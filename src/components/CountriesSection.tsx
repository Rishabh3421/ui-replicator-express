import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CountriesSection = () => {
  const countries = [
    { name: "Canada", flag: "🇨🇦", description: "Study and work opportunities" },
    { name: "Australia", flag: "🇦🇺", description: "Top universities and PR pathways" },
    { name: "New Zealand", flag: "🇳🇿", description: "Quality education and lifestyle" },
    { name: "USA", flag: "🇺🇸", description: "World-class education system" },
    { name: "UK", flag: "🇬🇧", description: "Historic universities and culture" },
    { name: "Europe", flag: "🇪🇺", description: "Diverse study destinations" },
    { name: "Japan", flag: "🇯🇵", description: "Technology and innovation hub" },
    { name: "Singapore", flag: "🇸🇬", description: "Gateway to Asia-Pacific" }
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Where We Serve</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Study & Work <span className="text-accent">Destinations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore visa opportunities across top global destinations for education, work, and settlement.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {countries.map((country, index) => (
            <Card 
              key={index} 
              className="group p-6 text-center hover:shadow-xl transition-all duration-500 border-0 shadow-soft bg-background hover:-translate-y-2 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:scale-110">
                {country.flag}
              </div>
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {country.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {country.description}
              </p>
              <Button 
                size="sm" 
                variant="outline"
                className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-accent border-accent hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse-glow">
            Check Eligibility
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;