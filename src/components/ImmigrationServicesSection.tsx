import { Button } from "@/components/ui/button";
import immigrationAgentsImage from "@/assets/immigration-agents.jpg";

const ImmigrationServicesSection = () => {
  return (
    <div className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-accent font-medium text-sm">WHAT WE DO</div>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Immigration services from<br />
              <span className="text-accent italic">Experienced</span> agents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-semibold">Immigration Program</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Most countries accept visa applications 30 days before the date of travel.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">👥</span>
                </div>
                <h3 className="text-xl font-semibold">Skilled Worker Visa</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Allows you to come to or stay in the UK to do an eligible job with an approved.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-accent rounded-lg p-8 text-accent-foreground">
              <h3 className="text-2xl font-bold mb-4">
                The future of<br />
                business visa<br />
                <span className="italic">Consulting.</span>
              </h3>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                Our Consulting
              </Button>
            </div>
            <div className="absolute -bottom-8 -right-8 hidden lg:block">
              <img 
                src={immigrationAgentsImage} 
                alt="Immigration consultation" 
                className="w-64 h-48 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmigrationServicesSection;