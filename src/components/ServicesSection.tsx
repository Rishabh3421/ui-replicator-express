import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import jobVisaImage from "@/assets/job-visa.jpg";
import businessVisaImage from "@/assets/business-visa.jpg";
import studentVisaImage from "@/assets/student-visa.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Job Visa",
      subtitle: "AWESOME",
      image: jobVisaImage,
      link: "/services/job-visa"
    },
    {
      title: "Business Visa",
      subtitle: "AWESOME",
      image: businessVisaImage,
      link: "/services/business-visa"
    },
    {
      title: "Students Visa",
      subtitle: "AWESOME",
      image: studentVisaImage,
      link: "/services/student-visa"
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            We provide experts great<br />
            visa <span className="text-accent italic">Categories</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-soft">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                <div className="text-sm text-accent font-medium mb-4">{service.subtitle}</div>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Explore More
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