import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import ImmigrationServicesSection from "@/components/ImmigrationServicesSection";
import CountriesSection from "@/components/CountriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <ImmigrationServicesSection />
      <CountriesSection />
      <TestimonialsSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
