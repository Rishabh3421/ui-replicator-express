import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const number = "919050519168"; // country code + number (India = 91)
  const msg = "Hi Easy World! I'm interested in your visa services. Please provide me with more information about the available options and requirements.";
  const encoded = encodeURIComponent(msg);

  const handleWhatsAppClick = () => {
    // Direct WhatsApp URL that auto-opens chat with pre-filled message
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 h-16 w-16 rounded-full shadow-2xl z-50 bg-green-500 hover:bg-green-600 text-white p-0 animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
      size="icon"
      title="Chat on WhatsApp - Get instant assistance"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
