import { Card } from "@/components/ui/card";
import { Award, Users, Clock, Shield, MapPin } from "lucide-react";

const TrustSection = () => {
  const features = [
    {
      icon: Award,
      title: "High Visa Success Rate",
      description: "95% success rate across all visa categories"
    },
    {
      icon: Users,
      title: "Experienced & Certified",
      description: "ICCRC certified consultants with 5+ years experience"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: Shield,
      title: "100% Transparency",
      description: "Clear processes with no hidden charges"
    },
    {
      icon: MapPin,
      title: "Branches Across India",
      description: "Multiple offices for your convenience"
    }
  ];

  return (
    <div className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Trust & Excellence</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Why Choose <span className="text-accent">Easy World</span>?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Your trusted partner for visa and immigration services with proven expertise and commitment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:animate-bounce-gentle transition-all duration-300">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-foreground/80">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;