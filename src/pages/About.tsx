import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import welcomeImage from "@/assets/welcome-consultation.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-header-bg text-header-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-accent">Home</span>
            <span>•</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Why Choose Truvik Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={welcomeImage} 
                alt="Why choose Truvik" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="text-accent font-medium text-sm">WHY CHOOSE US</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Why choose truvik <span className="text-accent italic">Visa</span> ?
              </h2>
              <p className="text-muted-foreground">
                "Travel, immigration attorney providing services with a world-class that work on-demand, 
                in the middle of but sometimes is in the same client's actively guide applicants for immigration 
                process to any situation where they opportunity information."
              </p>
              
              <div className="space-y-4">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Optimum Visa</span>
                    <span className="text-sm text-accent">82%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '82%'}}></div>
                  </div>
                </div>
                
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Business Visa</span>
                    <span className="text-sm text-accent">78%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">The liberal law boundaries built</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Certified equal opportunities to serve area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Easy payment via consultants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">The liberal law boundaries built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="text-accent font-medium text-sm mb-4">WHY CHOOSE US</div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-16">
            We creating solutions for<br />
            your <span className="text-accent italic">Organization</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-accent-foreground font-bold text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="text-primary-foreground/80 text-sm">
                The leading global provider of immigration and visa services with the required reach, agility and client commitment to 
                enable corporations and individuals to move freely navigate complex regulations.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-accent-foreground font-bold text-2xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="text-primary-foreground/80 text-sm">
                Provide information, orientation and immigration outreach programs to help students, faculty, scholars and staff 
                maintain legal immigration status & to provide accurate and timely advice on immigration.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-accent-foreground font-bold text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold">Our Strategy</h3>
              <p className="text-primary-foreground/80 text-sm">
                Responsibility for employee compliance with government regulations relating to the admission or hiring of international 
                students, including management of the visitor information system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-accent font-medium text-sm mb-4">OUR TEAM MEMBER</div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Discover trust team and our <span className="text-accent italic">Experts</span>
            </h2>
            <Button className="bg-accent hover:bg-accent-dark text-accent-foreground">
              Explore More
            </Button>
          </div>
          
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

      {/* Stats Section */}
      <div className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25", label: "Office Worldwide", desc: "This milestone likes demanding greeting from with from Olympic runners" },
              { number: "789", label: "Team Members", desc: "Teachings of the great explorer the truth choose builder of human" },
              { number: "8K", label: "Visa Processed", desc: "Your targets to brings strategic level as perhaps it's advice levels an" },
              { number: "99+", label: "Satisfied Clients", desc: "Our technique staff of the great explorer the truth choose builder" }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <p className="text-sm text-accent-foreground/80">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="text-accent font-medium text-sm mb-4">TESTIMONIALS</div>
          <h2 className="text-3xl font-bold text-primary mb-12">
            What our clients say <span className="text-accent italic">About us</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-0 shadow-soft">
              <div className="text-accent text-4xl mb-4">"</div>
              <p className="text-muted-foreground mb-4">
                "Fraudister from countries campaigned under the legal case we 
                previously are we. Business lawyers in house business laws. Business 
                We are obliged to propose certification."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold text-primary">Alex Sam Martin</div>
                  <div className="text-sm text-muted-foreground">Client</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-soft">
              <div className="text-accent text-4xl mb-4">"</div>
              <p className="text-muted-foreground mb-4">
                "We have helped thousands business personal tourism choose 
                other investing aspect to absolute full such. Provides we were 
                help with other family and provide."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold text-primary">Aemy Doe</div>
                  <div className="text-sm text-muted-foreground">Client</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;