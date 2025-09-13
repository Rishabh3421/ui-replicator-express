import { useState, useEffect } from "react";
import CallbackPopup from "./CallbackPopup";

const AutoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before in this session
    const popupShown = sessionStorage.getItem("popup-shown");
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popup-shown", "true");
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <CallbackPopup isOpen={showPopup} onClose={handleClose} />
  );
};

export default AutoPopup;