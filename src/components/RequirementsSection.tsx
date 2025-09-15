import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, FileText, User, CreditCard, MapPin, Users } from "lucide-react";

const RequirementsSection = () => {
  const requirements = [
    { icon: FileText, title: "Academic Certificates", description: "Educational transcripts and degrees" },
    { icon: User, title: "Aadhar Card", description: "Government identity proof" },
    { icon: CreditCard, title: "PAN Card", description: "Tax identification document" },
    { icon: MapPin, title: "Passport", description: "Valid travel document" },
    { icon: Users, title: "Family Documents", description: "Family relationship certificates" }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Document Requirements</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Essential <span className="text-accent">Documents</span> Checklist
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {requirements.map((req, index) => (
            <Card 
              key={index} 
              className="group p-6 text-center hover:shadow-xl transition-all duration-500 border-0 shadow-soft hover:-translate-y-2"
            >
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-all duration-300">
                <req.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-primary mb-2">{req.title}</h3>
              <Check className="w-5 h-5 text-green-500 mx-auto mt-3" />
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
            Get Free Checklist
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default RequirementsSection;