import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Step = "MAIN" | "COUNTRY" | "VISA" | "RESULT";

interface Country {
  slug: string;
  name: string;
  flag_emoji: string;
  visa_types: string[];
  required_docs: string[];
  avg_processing_time: string;
  top_colleges?: any;
  best_places?: any;
}

interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  options?: string[];
  countries?: Country[];
  visaTypes?: string[];
}

const WHATSAPP_NUMBER = "919050519168"; // with country code (India = 91)

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [step, setStep] = useState<Step>("MAIN");
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTop = scrollerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Fetch countries once
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoadingCountries(true);
        const { data, error } = await supabase.from("countries").select("*");
        if (error) throw error;
        setCountries((data || []) as Country[]);
      } catch (err) {
        console.error("Error fetching countries:", err);
        toast({
          title: "Could not load countries",
          description: "Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoadingCountries(false);
      }
    };
    fetchCountries();
  }, []);

  // Open → initialize
  useEffect(() => {
    if (isOpen && messages.length === 0) initializeChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const append = (msg: Omit<ChatMessage, "id">) => {
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), ...msg }]);
  };

  const initializeChat = () => {
    setStep("MAIN");
    setSelectedCountry(null);
    setSelectedVisa(null);
    setMessages([]);
    append({
      type: "bot",
      content: "Hello! Welcome to Easy World. How can I help you today?",
      options: [
        "Check eligibility",
        "Visa requirements",
        "Processing time",
        "Top colleges",
        "Consultation booking",
      ],
    });
  };

  const logEngagement = async (event: string, country?: string, visaType?: string) => {
    try {
      await supabase.from("engagement").insert([
        { event, country, visa_type: visaType, user_data: { timestamp: new Date().toISOString() } },
      ]);
    } catch (err) {
      console.error("Error logging engagement:", err);
    }
  };

  const openWhatsApp = (text: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // ========= FLOW HANDLERS =========
  const askForCountry = (prompt: string) => {
    setStep("COUNTRY");
    append({ type: "bot", content: prompt, countries: countries.slice(0, 8) });
  };

  const askForVisaType = (country: Country) => {
    setStep("VISA");
    setSelectedCountry(country);
    append({
      type: "bot",
      content: `Great choice! ${country.name} ${country.flag_emoji} offers these visa types:`,
      visaTypes: country.visa_types || [],
    });
  };

  const showResultFor = (
    country: Country,
    visa: string,
    intent: "requirements" | "processing" | "colleges" | "eligibility"
  ) => {
    setStep("RESULT");
    setSelectedVisa(visa);

    let content = "";
    const options = ["Apply Now", "Get Free Checklist", "Back to main menu"];

    switch (intent) {
      case "requirements":
        content =
          `Here are the ${visa} visa requirements for ${country.name}:\n\n` +
          (country.required_docs?.map((d) => `• ${d}`).join("\n") || "• Please contact us for the latest list.") +
          `\n\nAverage processing time: ${country.avg_processing_time || "Varies by profile."}`;
        break;
      case "processing":
        content = `Average processing time for ${visa} visa to ${country.name}: ${country.avg_processing_time || "Varies by case."}`;
        break;
      case "colleges": {
        const colleges = (country.top_colleges || []).slice(0, 6);
        content =
          `Top colleges in ${country.name}:\n\n` +
          (colleges.length
            ? colleges
                .map(
                  (c) =>
                    `• ${c.name}${c.city ? `, ${c.city}` : ""}${typeof c.rank === "number" ? ` (Rank #${c.rank})` : ""}`
                )
                .join("\n")
            : "• We'll share a curated list based on your profile.");
        break;
      }
      case "eligibility":
        content = `You're interested in ${visa} visa for ${country.name}. We can check your eligibility right away.`;
        break;
    }

    append({ type: "bot", content, options });
  };

  // ========= OPTION CLICKS =========
  const handleOptionClick = (option: string) => {
    append({ type: "user", content: option });

    if (step === "MAIN") {
      switch (option) {
        case "Check eligibility":
          logEngagement("check_eligibility");
          askForCountry("Please select your target country:");
          return;
        case "Visa requirements":
          logEngagement("visa_requirements");
          askForCountry("Which country are you interested in?");
          return;
        case "Processing time":
          logEngagement("processing_time");
          askForCountry("Select a country to see processing times:");
          return;
        case "Top colleges":
          logEngagement("top_colleges");
          askForCountry("Which country would you like to explore colleges for?");
          return;
        case "Consultation booking":
          logEngagement("consultation_booking");
          append({
            type: "bot",
            content: "Great! Choose a consultation method:",
            options: ["Book WhatsApp consultation", "Schedule email consultation", "Back to main menu"],
          });
          return;
        case "Book WhatsApp consultation":
          openWhatsApp("Hi Easy World, I'd like to book a consultation.");
          append({
            type: "bot",
            content: "I’ve opened WhatsApp for you. You can also continue here if you have more questions.",
            options: ["Back to main menu"],
          });
          return;
        case "Schedule email consultation":
          window.location.href = "mailto:mdeasyworld@gmail.com?subject=Consultation%20Booking";
          append({
            type: "bot",
            content: "I’ve opened your email client. You can also ask me more questions here.",
            options: ["Back to main menu"],
          });
          return;
        case "Back to main menu":
          initializeChat();
          return;
      }
    }

    if (step === "RESULT") {
      if (option === "Apply Now" && selectedCountry && selectedVisa) {
        logEngagement("apply_now", selectedCountry.name, selectedVisa);
        openWhatsApp(
          `APPLY NOW\nCountry: ${selectedCountry.name}\nVisa Type: ${selectedVisa}\nI want to proceed. Please guide me.`
        );
        append({
          type: "bot",
          content: "Opened WhatsApp with your application intent. Anything else I can help you with?",
          options: ["Back to main menu"],
        });
        return;
      }
      if (option === "Get Free Checklist" && selectedCountry && selectedVisa) {
        logEngagement("get_checklist", selectedCountry.name, selectedVisa);
        openWhatsApp(`Please share the free checklist for ${selectedVisa} to ${selectedCountry.name}.`);
        append({ type: "bot", content: "I’ve opened WhatsApp to request your checklist.", options: ["Back to main menu"] });
        return;
      }
      if (option === "Back to main menu") {
        initializeChat();
        return;
      }
    }

    // default → treat as free text
    handleFreeText(option);
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    append({ type: "user", content: country.name });
    askForVisaType(country);
    logEngagement("country_selected", country.name);
  };

  const handleVisaTypeSelect = (
    visa: string,
    intent?: "requirements" | "processing" | "colleges" | "eligibility"
  ) => {
    if (!selectedCountry) return;
    setSelectedVisa(visa);
    append({ type: "user", content: visa });

    // infer current intent from last bot message if not provided
    let derivedIntent: "requirements" | "processing" | "colleges" | "eligibility" = "eligibility";
    const lastBot = [...messages].reverse().find((m) => m.type === "bot");
    if (intent) derivedIntent = intent;
    else if (lastBot?.content.toLowerCase().includes("requirements")) derivedIntent = "requirements";
    else if (lastBot?.content.toLowerCase().includes("processing")) derivedIntent = "processing";
    else if (lastBot?.content.toLowerCase().includes("colleges")) derivedIntent = "colleges";

    showResultFor(selectedCountry, visa, derivedIntent);
    logEngagement("visa_type_selected", selectedCountry.name, visa);
  };

  const handleFreeText = (text: string) => {
    append({
      type: "bot",
      content:
        "Thanks for your message! For personalized assistance, choose an option below or start a WhatsApp chat.",
      options: ["Talk on WhatsApp", "Email us", "Back to main menu"],
    });
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    append({ type: "user", content: userInput.trim() });
    handleFreeText(userInput.trim());
    setUserInput("");
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickAction = (action: string) => {
    switch (action) {
      case "Talk on WhatsApp":
        openWhatsApp("Hi Easy World, I have a question.");
        break;
      case "Email us":
        window.location.href = "mailto:mdeasyworld@gmail.com";
        break;
      case "Back to main menu":
        initializeChat();
        break;
    }
  };

  const canGoBack = useMemo(() => step !== "MAIN", [step]);

  const goBack = () => {
    if (step === "RESULT") {
      if (selectedCountry) askForVisaType(selectedCountry);
      setStep("VISA");
      return;
    }
    if (step === "VISA") {
      askForCountry("Select a country:");
      setStep("COUNTRY");
      return;
    }
    if (step === "COUNTRY") {
      initializeChat();
      return;
    }
  };
return (
  <>
    {/* Chat Toggle Button */}
    {!isOpen && (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-[60] bg-accent hover:bg-accent/90 focus:ring-4 focus:ring-accent/30"
        size="icon"
        aria-label="Open chat"
        title="Ask Easy World"
      >
        <MessageCircle className="h-6 w-6 text-accent-foreground" />
      </Button>
    )}

    {/* Chat Window */}
    {isOpen && (
      <Card
        className="
          fixed bottom-6 right-6 
          w-[360px] sm:w-[380px] max-w-[92vw] 
          h-[560px] max-h-[calc(100vh-32px)] 
          shadow-2xl z-[60] flex flex-col 
          border border-border/60 rounded-2xl overflow-hidden
          bg-background
        "
      >
        <CardHeader className="bg-accent text-accent-foreground p-4">
          <CardTitle className="flex items-center justify-between text-base font-semibold">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Ask Easy World
            </span>
            <div className="flex items-center gap-2">
              {canGoBack && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goBack}
                  aria-label="Back"
                  className="h-6 w-6 hover:bg-accent/20"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="h-6 w-6 hover:bg-accent/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 bg-background">
          {/* Messages (scrollable) */}
          <div
            ref={scrollerRef}
            className="
              flex-1 overflow-y-auto p-4 space-y-3
              scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-muted/20
              hover:scrollbar-thumb-muted-foreground/50
              custom-scrollbar
            "
            style={{
              maxHeight: 'calc(100vh - 220px)', // Adjusting height to add more padding at the bottom
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.type === "user" ? "flex justify-end" : "flex justify-start"}
              >
                <div
                  className={[
                    "px-3 py-2 rounded-2xl text-sm",
                    "max-w-[85%] break-words whitespace-pre-wrap",
                    message.type === "user"
                      ? "bg-accent text-accent-foreground rounded-br-sm"
                      : "bg-secondary text-secondary-foreground rounded-bl-sm",
                  ].join(" ")}
                >
                  {message.content}

                  {/* Options */}
                  {message.options && (
                    <div className="mt-3 grid grid-cols-1 gap-2">
                      {message.options.map((opt) => (
                        <Button
                          key={opt}
                          variant="outline"
                          size="sm"
                          className="justify-start text-xs w-full"
                          onClick={() => {
                            if (
                              opt === "Talk on WhatsApp" ||
                              opt === "Email us" ||
                              opt === "Back to main menu"
                            ) {
                              quickAction(opt);
                            } else {
                              handleOptionClick(opt);
                            }
                          }}
                        >
                          {opt}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* Countries */}
                  {message.countries && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {loadingCountries ? (
                        <div className="col-span-2 text-xs opacity-70">Loading countries…</div>
                      ) : (
                        message.countries.map((country) => (
                          <Button
                            key={country.slug}
                            variant="outline"
                            size="sm"
                            className="h-auto py-2 px-2 text-xs leading-tight"
                            onClick={() => handleCountrySelect(country)}
                            title={country.name}
                          >
                            <div className="w-full text-center">
                              <div className="text-lg leading-none">{country.flag_emoji}</div>
                              <div className="mt-1">{country.name}</div>
                            </div>
                          </Button>
                        ))
                      )}
                    </div>
                  )}

                  {/* Visa chips */}
                  {message.visaTypes && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.visaTypes.map((vt) => (
                        <Badge
                          key={vt}
                          variant="outline"
                          className="cursor-pointer text-xs px-2 py-1 hover:bg-muted"
                          onClick={() => handleVisaTypeSelect(vt)}
                        >
                          {vt}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t p-3 bg-background">
            <div className="flex gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => openWhatsApp("Hi Easy World, I’d like to chat.")}
              >
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => (window.location.href = "mailto:mdeasyworld@gmail.com")}
              >
                Email
              </Button>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Type a message…"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={onPressEnter}
                className="text-sm"
              />
              <Button size="sm" onClick={handleSendMessage} aria-label="Send">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )}

    {/* Custom scrollbar styles */}
    <style>{`
      .custom-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: hsl(var(--muted-foreground) / 0.3) transparent;
      }
      .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(120, 120, 120, 0.2);
        border-radius: 8px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar:hover::-webkit-scrollbar-thumb {
        background: rgba(120, 120, 120, 0.4);
      }
    `}</style>
  </>
);



};

export default Chatbot;
