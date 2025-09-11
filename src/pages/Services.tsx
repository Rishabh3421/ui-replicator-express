import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jobVisaImage from "@/assets/job-visa.jpg";
import businessVisaImage from "@/assets/business-visa.jpg";
import studentVisaImage from "@/assets/student-visa.jpg";

const Services = () => {
  const services = [
    {
      title: "Job Visa",
      image: jobVisaImage,
      description: "Professional job visa services for skilled workers"
    },
    {
      title: "Business Visa", 
      image: businessVisaImage,
      description: "Business visa solutions for entrepreneurs and investors"
    },
    {
      title: "Diplomatic Visa",
      image: studentVisaImage,
      description: "Diplomatic visa services for official government business"
    },
    {
      title: "Worker Visa",
      image: jobVisaImage,
      description: "Worker visa assistance for employment opportunities"
    },
    {
      title: "Free Visa Enquiry",
      image: businessVisaImage,
      description: "Free consultation and visa enquiry services"
    },
    {
      title: "Student Visas",
      image: studentVisaImage,
      description: "Student visa services for educational opportunities abroad"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-header-bg text-header-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-accent">Home</span>
            <span>•</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-soft">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    Explore More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Immigration Services Section */}
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
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            For the immigration, choose <span className="text-accent italic">Team Member!</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            when essential stakeholders processes located right in their area.You can writing various visa advisors and we inquiry 
            migration towards and we determine inquiry resolution areas where present exposure where drop.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Sam Martin", role: "Director" },
              { name: "David Coper", role: "Officer" },
              { name: "Melika Fonals", role: "Agent" },
              { name: "Sophia Arthur", role: "Migration Agent" }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft">
                <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                <div className="flex justify-center space-x-2 mt-3">
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="w-6 h-6 bg-muted rounded"></div>
                  <div className="w-6 h-6 bg-muted rounded"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;