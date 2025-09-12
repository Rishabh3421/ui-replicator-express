import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import jobVisaImage from "@/assets/job-visa.jpg";
import businessVisaImage from "@/assets/business-visa.jpg";
import studentVisaImage from "@/assets/student-visa.jpg";
import prImmigrationImage from "@/assets/PR-Immigration.jpg";
import business from "@/assets/business.jpg";
import family from "@/assets/family.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Student Visa",
      description: "Study abroad programs and student visa assistance",
      image: studentVisaImage,
      link: "/services/student-visa"
    },
    {
      title: "Work Visa",
      description: "Professional work permits and employment visas",
      image: jobVisaImage,
      link: "/services/work-visa"
    },
    {
      title: "Tourist & Visitor",
      description: "Tourism and visitor visa services",
      image: businessVisaImage,
      link: "/services/tourist-visa"
    },
{
  title: "PR & Immigration",
  description: "Permanent residency and immigration solutions",
  image: prImmigrationImage,
  link: "/services/PR-Immigration"
},
    {
      title: "Business & Investor",
      description: "Business and investment visa programs",
      image: business,
      link: "/services/business-visa"
    },
    {
      title: "Family & Dependent",
      description: "Family reunification and dependent visas",
      image: family,
      link: "/services/family-visa"
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">What We Do</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Our Visa <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive visa and immigration services tailored to your specific needs and aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-soft bg-background hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="h-1 w-12 bg-accent mx-auto mb-4 transition-all duration-300 group-hover:w-20"></div>
                <Button 
                  variant="outline" 
                  className="text-primary border-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to={`/services/${service.link.split('/services/')[1]}`}>
                    Explore More
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;