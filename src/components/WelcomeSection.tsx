import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import welcomeImage from "@/assets/welcome-consultation.jpg";

const WelcomeSection = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={welcomeImage} 
              alt="Immigration consultation" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded text-sm font-semibold">
              WE CARE FOR YOU
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-accent font-medium text-sm">WE CARE FOR YOU</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              Welcome to immigration<br />
              <span className="text-accent italic">Advisory</span> services
            </h2>
            <p className="text-muted-foreground">
              Lorem Commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper 
              nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras 
              mattis consectetur purus sit amet fermentum.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-1">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Direct Interviews</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-1">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Faster Processing Time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-accent rounded-full p-1">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-foreground">Easy payment via Installment</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;