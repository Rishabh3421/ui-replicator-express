import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { MessageCircle, X, Send, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface Country {
  slug: string;
  name: string;
  flag_emoji: string;
  visa_types: string[];
  required_docs: string[];
  avg_processing_time: string;
  top_colleges: any;
  best_places: any;
}

interface ChatMessage {
  type: "bot" | "user";
  content: string;
  options?: string[];
  countries?: Country[];
  visaTypes?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentStep, setCurrentStep] = useState("main");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const { data, error } = await supabase
        .from("countries")
        .select("*");

      if (error) throw error;
      setCountries(data || []);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const initializeChat = () => {
    const welcomeMessage: ChatMessage = {
      type: "bot",
      content: "Hello! Welcome to Easy World. How can I help you today?",
      options: [
        "Check eligibility",
        "Visa requirements", 
        "Processing time",
        "Top colleges",
        "Consultation booking"
      ]
    };
    setMessages([welcomeMessage]);
  };

  const logEngagement = async (event: string, country?: string, visaType?: string) => {
    try {
      await supabase
        .from("engagement")
        .insert([
          {
            event,
            country,
            visa_type: visaType,
            user_data: { timestamp: new Date().toISOString() }
          }
        ]);
    } catch (error) {
      console.error("Error logging engagement:", error);
    }
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, { type: "user", content: option }]);

    // Handle different options
    switch (option) {
      case "Check eligibility":
        setCurrentStep("country-selection");
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Please select your target country:",
          countries: countries.slice(0, 8) // Show first 8 countries
        }]);
        logEngagement("check_eligibility");
        break;

      case "Visa requirements":
        setCurrentStep("country-selection");
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Which country are you interested in?",
          countries: countries.slice(0, 8)
        }]);
        logEngagement("visa_requirements");
        break;

      case "Processing time":
        setCurrentStep("country-selection");
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Select a country to see processing times:",
          countries: countries.slice(0, 8)
        }]);
        logEngagement("processing_time");
        break;

      case "Top colleges":
        setCurrentStep("country-selection");
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Which country would you like to explore colleges for?",
          countries: countries.slice(0, 8)
        }]);
        logEngagement("top_colleges");
        break;

      case "Consultation booking":
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Great! I'll help you book a consultation. Would you like to:",
          options: ["Book WhatsApp consultation", "Schedule email consultation", "Get Free Checklist"]
        }]);
        logEngagement("consultation_booking");
        break;

      case "Book WhatsApp consultation":
        window.open("https://wa.me/9050519168", "_blank");
        setMessages(prev => [...prev, {
          type: "bot",
          content: "Perfect! I've opened WhatsApp for you. You can also continue here if you have more questions.",
          options: ["Back to main menu"]
        }]);
        break;

      case "Schedule email consultation":
        window.location.href = "mailto:mdeasyworld@gmail.com?subject=Consultation Booking";
        setMessages(prev => [...prev, {
          type: "bot",
          content: "I've opened your email client. You can also ask me more questions here.",
          options: ["Back to main menu"]
        }]);
        break;

      case "Get Free Checklist":
        setMessages(prev => [...prev, {
          type: "bot",
          content: "I'll help you get a free checklist. Please share your email and I'll send it right away!",
          options: ["Back to main menu"]
        }]);
        break;

      case "Back to main menu":
        setCurrentStep("main");
        initializeChat();
        break;

      default:
        handleFreeText(option);
    }
  };

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setMessages(prev => [...prev, { type: "user", content: country.name }]);

    // Show visa types for the selected country
    setMessages(prev => [...prev, {
      type: "bot",
      content: `Great choice! ${country.name} ${country.flag_emoji} offers these visa types:`,
      visaTypes: country.visa_types
    }]);

    logEngagement("country_selected", country.name);
  };

  const handleVisaTypeSelect = (visaType: string) => {
    if (!selectedCountry) return;

    setMessages(prev => [...prev, { type: "user", content: visaType }]);

    let response = "";
    const options = ["Apply Now", "Get Free Checklist", "Back to main menu"];

    switch (currentStep) {
      case "country-selection":
        if (messages.some(m => m.content.includes("requirements"))) {
          response = `Here are the ${visaType} visa requirements for ${selectedCountry.name}:\n\n` +
                    selectedCountry.required_docs.map(doc => `• ${doc}`).join('\n') +
                    `\n\nProcessing time: ${selectedCountry.avg_processing_time}`;
        } else if (messages.some(m => m.content.includes("processing"))) {
          response = `Processing time for ${visaType} visa to ${selectedCountry.name}: ${selectedCountry.avg_processing_time}`;
        } else if (messages.some(m => m.content.includes("colleges"))) {
          const colleges = Array.isArray(selectedCountry.top_colleges) ? selectedCountry.top_colleges : [];
          response = `Top colleges in ${selectedCountry.name}:\n\n` +
                    colleges.slice(0, 3).map((college: any) => 
                      `• ${college.name}, ${college.city}${college.rank ? ` (Rank #${college.rank})` : ''}`
                    ).join('\n') +
                    `\n\nWould you like to see more details?`;
          options.push("View more colleges");
        } else {
          response = `You're interested in ${visaType} visa for ${selectedCountry.name}. Let me help you get started!`;
        }
        break;
    }

    setMessages(prev => [...prev, {
      type: "bot",
      content: response,
      options
    }]);

    logEngagement("visa_type_selected", selectedCountry.name, visaType);
  };

  const handleFreeText = (text: string) => {
    setMessages(prev => [...prev, {
      type: "bot",
      content: "Thanks for your message! For personalized assistance, please contact us directly:",
      options: ["Talk on WhatsApp", "Email us", "Back to main menu"]
    }]);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    setMessages(prev => [...prev, { type: "user", content: userInput }]);
    handleFreeText(userInput);
    setUserInput("");
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "Talk on WhatsApp":
        window.open("https://wa.me/9050519168", "_blank");
        break;
      case "Email us":
        window.location.href = "mailto:mdeasyworld@gmail.com";
        break;
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-accent hover:bg-accent-dark"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-50 flex flex-col">
          <CardHeader className="bg-accent text-accent-foreground rounded-t-lg p-4">
            <CardTitle className="flex items-center justify-between text-lg">
              <span>Ask Easy World</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-accent-foreground hover:bg-accent-dark"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message, index) => (
                <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
                    message.type === 'user' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                    
                    {/* Options */}
                    {message.options && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, optIndex) => (
                          <Button
                            key={optIndex}
                            variant="outline"
                            size="sm"
                            className="w-full text-xs"
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    )}

                    {/* Countries */}
                    {message.countries && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {message.countries.map((country, countryIndex) => (
                          <Button
                            key={countryIndex}
                            variant="outline"
                            size="sm"
                            className="text-xs p-2 h-auto"
                            onClick={() => handleCountrySelect(country)}
                          >
                            <div className="text-center">
                              <div className="text-lg">{country.flag_emoji}</div>
                              <div className="text-xs">{country.name}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    )}

                    {/* Visa Types */}
                    {message.visaTypes && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {message.visaTypes.map((visaType, visaIndex) => (
                          <Badge
                            key={visaIndex}
                            variant="outline"
                            className="cursor-pointer text-xs"
                            onClick={() => handleVisaTypeSelect(visaType)}
                          >
                            {visaType}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="border-t p-3">
              <div className="flex gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => handleQuickAction("Talk on WhatsApp")}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs"
                  onClick={() => handleQuickAction("Email us")}
                >
                  Email
                </Button>
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="text-sm"
                />
                <Button size="sm" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;