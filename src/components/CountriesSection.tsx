import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CountriesSection = () => {
  const countries = [
    { 
      name: "France", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Excellence in education and culture",
      slug: "france"
    },
    { 
      name: "United Kingdom", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Historic universities and innovation",
      slug: "uk"
    },
    { 
      name: "Australia", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Top universities and PR pathways",
      slug: "australia"
    },
    { 
      name: "New Zealand", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Quality education and lifestyle",
      slug: "new-zealand"
    },
    { 
      name: "Italy", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Art, culture and education heritage",
      slug: "italy"
    },
    { 
      name: "Russia", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Strong technical education system",
      slug: "russia"
    },
    { 
      name: "India", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "Emerging opportunities and growth",
      slug: "india"
    },
    { 
      name: "Canada", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png",
      description: "World-class education system",
      slug: "canada"
    }
  ];

  return (
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">Countries We Offer</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Immigration & visa services <br />
            following <span className="text-accent">Countries</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore visa opportunities across top global destinations for education, work, and settlement.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${country.image}')`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                        {country.name}
                      </h3>
                      <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {country.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="w-full bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-primary"
                      asChild
                    >
                      <Link to="/countries">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            asChild
          >
            <Link to="/countries">
              Explore All Countries
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CountriesSection;