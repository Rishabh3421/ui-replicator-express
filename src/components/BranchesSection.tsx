import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BranchesSection = () => {
  const branches = [
    {
      id: 1,
      name: "Indore Branch",
      address: "Mahalaxmi Nagar, Vijay Nagar, Indore - 452010",
      phone: "+91 99919 20206",
      email: "indore@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM"
    },
    {
      id: 2,
      name: "Panipat Branch",
      address: "SF 03 Happy Homes Emperium Society, Panipat - 132103",
      phone: "+91 8396000445",
      email: "panipat@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM"
    },
    {
      id: 3,
      name: "Assandh Branch",
      address: "Above Karan Furniture 1st Floor, Safidon Road, Near Bus Stand, Assandh - 132039",
      phone: "+91 99919 29607",
      email: "assandh@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM"
    },
    {
      id: 4,
      name: "Sonipat Branch",
      address: "SCO No. 97 DS, Sector-15, Sonipat (Basement + Ground Floor) - 131001",
      phone: "+91 89500 23501",
      email: "sonipat@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM"
    },
    {
      id: 5,
      name: "Indri Branch",
      address: "Opposite Bus Stand, Shop No.18, Municipal Committee, Indri - 132041",
      phone: "+91 97297-79271",
      email: "indri@easyworldedu.com",
      timing: "Mon - Sat: 9:00 AM to 6:00 PM"
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
            <Card
              key={branch.id}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-soft"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{branch.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{branch.address}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{branch.phone}</span>
                </div>

                {/* Uncomment to add email */}
                {/* <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{branch.email}</span>
                </div> */}

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{branch.timing}</span>
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
