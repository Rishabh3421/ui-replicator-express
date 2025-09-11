import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const number = "919050519168"; // country code + number (India = 91)
  const msg = "Hi Easy World, I'm interested and want to know more.";
  const encoded = encodeURIComponent(msg);

  const handleWhatsAppClick = () => {
    // Prefer wa.me (universal). If you ONLY target mobile, you can try the app scheme.
    const url = `https://wa.me/${number}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-lg z-40 bg-gray-200 hover:bg-gray-300 text-white p-0"
      size="icon"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="h-8 w-8"
        loading="lazy"
      />
    </Button>
  );
};

export default WhatsAppButton;
