import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      name: "Delhi Branch",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 9050519168",
      email: "delhi@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM",
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    },
    {
      id: 2,
      name: "Mumbai Branch", 
      address: "Andheri West, Mumbai - 400058",
      phone: "+91 8950023501",
      email: "mumbai@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM",
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    },
    {
      id: 3,
      name: "Chandigarh Branch",
      address: "Sector 17, Chandigarh - 160017", 
      phone: "+91 9050519168",
      email: "chandigarh@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM",
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    },
    {
      id: 4,
      name: "Bangalore Branch",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91 8950023501", 
      email: "bangalore@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM",
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    },
    {
      id: 5,
      name: "Hyderabad Branch",
      address: "Banjara Hills, Hyderabad - 500034",
      phone: "+91 9050519168",
      email: "hyderabad@easyworldedu.com", 
      timing: "Mon - Sat: 9:00 AM to 6:00 PM",
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    },
    {
      id: 6,
      name: "Pune Branch",
      address: "Koregaon Park, Pune - 411001",
      phone: "+91 8950023501",
      email: "pune@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM", 
      image: "/lovable-uploads/0129d08a-0d93-4380-8a93-062415c76d2e.png"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our <span className="text-accent italic">Branches</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our offices across India for personalized consultation and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <Card key={branch.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-soft">
              <div className="relative">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Open
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {branch.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {branch.address}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {branch.phone}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {branch.email}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {branch.timing}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;