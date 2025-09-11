import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-student.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-90"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="text-sm text-accent font-medium">Study Visa</div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Study in <span className="text-accent italic">Abroad</span><br />
              Universities
            </h1>
            <p className="text-lg text-primary-foreground/90">
              We help you get to the university abroad & choose your future carefully!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-3">
                Free Visa Check
              </Button>
              <div className="flex items-center space-x-2">
                <div className="bg-accent rounded-full p-2">
                  <span className="text-accent-foreground font-bold">📞</span>
                </div>
                <div>
                  <div className="text-sm text-primary-foreground/80">Call us</div>
                  <div className="font-semibold">+1234 567 890</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Student with documents" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;