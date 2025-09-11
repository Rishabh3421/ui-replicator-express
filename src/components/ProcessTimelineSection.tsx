import { Card } from "@/components/ui/card";
import { MessageCircle, FileCheck, Send, CheckCircle } from "lucide-react";

const ProcessTimelineSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Free initial consultation to understand your goals and assess eligibility"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete document preparation and verification process"
    },
    {
      icon: Send,
      title: "Application",
      description: "Submit your visa application with expert guidance"
    },
    {
      icon: CheckCircle,
      title: "Approval",
      description: "Receive your visa approval and pre-departure support"
    }
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Process</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Simple 4-Step <span className="text-accent">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From consultation to approval, we guide you through every step of your visa journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="group p-6 text-center hover:shadow-xl transition-all duration-500 border-0 shadow-soft hover:-translate-y-2">
                <div className="relative">
                  <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-bounce-gentle transition-all duration-300">
                    <step.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {/* Timeline connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimelineSection;