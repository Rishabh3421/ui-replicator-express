import { Card } from "@/components/ui/card";

const CountriesSection = () => {
  const countries = [
    { name: "France", flag: "🇫🇷" },
    { name: "Netherlands", flag: "🇳🇱" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Russia", flag: "🇷🇺" },
    { name: "Ukraine", flag: "🇺🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "USA", flag: "🇺🇸" }
  ];

  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Immigration & visa services<br />
            following <span className="text-accent italic">Countries</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft bg-background">
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="font-semibold text-primary">{country.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;