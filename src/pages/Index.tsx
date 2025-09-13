import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import RequirementsSection from "@/components/RequirementsSection";
import TrustSection from "@/components/TrustSection";
import ProcessTimelineSection from "@/components/ProcessTimelineSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BranchesSection from "@/components/BranchesSection";
import Chatbot from "@/components/Chatbot";
import AutoPopup from "@/components/AutoPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <CountriesSection />
      <RequirementsSection />
      <TrustSection />
      <ProcessTimelineSection />
      <TestimonialsSection />
      <BranchesSection />
      <Footer />
      <Chatbot />
      <AutoPopup />
    </div>
  );
};

export default Index;
