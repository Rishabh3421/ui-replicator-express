import { useState } from "react";
import { Button } from "@/components/ui/button";
import FreeCounsellingForm from "./FreeCounsellingForm";

interface EnquireNowButtonProps {
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

const EnquireNowButton = ({ 
  className = "", 
  variant = "default",
  size = "default"
}: EnquireNowButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant={variant}
        size={size}
        className={`bg-accent hover:bg-accent-dark text-accent-foreground transition-all duration-300 hover:scale-105 ${className}`}
      >
        Enquire Now
      </Button>
      
      <FreeCounsellingForm 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};

export default EnquireNowButton;