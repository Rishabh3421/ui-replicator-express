import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import welcomeImage from "@/assets/welcome-consultation.jpg";

const WelcomeSection = () => {
  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <img 
              src={welcomeImage} 
              alt="Easy World MD photo" 
              className="w-full h-auto rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            />
            <div className="absolute top-6 left-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold animate-bounce-gentle">
              MD - Ravi Kumar
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <p className="text-primary font-medium italic text-center">
                "At Easy World, we don't just process visas—we help build futures."
              </p>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in-right">
            <div className="text-accent font-semibold text-sm uppercase tracking-wider">Who We Are</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Your Global Education<br />
              <span className="text-accent">Consultant</span> Partner
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 5 years of experience, Easy World Educational Consultant has helped 1000+ students 
              and professionals achieve their dreams of studying, working, and settling abroad. We provide 
              personalized, transparent guidance for every step of your journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
                <div className="bg-accent rounded-full p-2 group-hover:animate-bounce-gentle">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
                <div className="bg-accent rounded-full p-2 group-hover:animate-bounce-gentle">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">1000+ Success Cases</span>
              </div>
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
                <div className="bg-accent rounded-full p-2 group-hover:animate-bounce-gentle">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">Personalized Service</span>
              </div>
              <div className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105">
                <div className="bg-accent rounded-full p-2 group-hover:animate-bounce-gentle">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-foreground font-medium">100% Transparency</span>
              </div>
            </div>
            
            <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;