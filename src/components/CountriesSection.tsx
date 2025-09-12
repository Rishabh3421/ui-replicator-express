import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CountriesSection = () => {
  const countries = [
    {
      name: "🇨🇦 Canada",
      image: "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?q=80&w=1691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Study, work, PR opportunities",
      slug: "canada",
    },
    {
      name: "🇦🇺 Australia",
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "High-quality education & skilled migration",
      slug: "australia",
    },
    {
      name: "🇳🇿 New Zealand",
      image: "https://images.unsplash.com/photo-1683712922661-71b6f671ac25?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Student & work-friendly destination",
      slug: "new-zealand",
    },
    {
      name: "🇺🇸 USA",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Leading universities & career paths",
      slug: "usa",
    },
    {
      name: "🇬🇧 UK",
      image: "https://images.unsplash.com/photo-1464021025634-49b81a77a858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Affordable study & job prospects",
      slug: "uk",
    },
    {
      name: "🇪🇺 Europe",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Multiple countries, endless opportunities",
      slug: "europe",
    },
    {
      name: "🇯🇵 Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Growing hub for careers & education",
      slug: "japan",
    },
    {
      name: "🇸🇬 Singapore",
      image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Global business & study gateway",
      slug: "singapore",
    },
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