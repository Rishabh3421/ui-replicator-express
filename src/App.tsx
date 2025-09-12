import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import IntroAnimation from "./components/IntroAnimation";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/country" element={<Country />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:slug" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Clear session storage to always show intro for testing
    // sessionStorage.removeItem('hasSeenIntro');
    
    // Check if intro was already seen
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
