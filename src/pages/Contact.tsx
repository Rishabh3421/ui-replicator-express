import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Share2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-header-bg text-header-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-accent">Home</span>
            <span>•</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Building Image */}
            <div className="space-y-6">
              <div className="w-full h-96 bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-lg">Office Building Image</span>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">
                  Have be any question?<br />
                  feel free to <span className="text-accent italic">Contact</span>
                </h2>
              </div>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Your Full Name" 
                  className="bg-secondary border-0"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-secondary border-0"
                />
                <Select>
                  <SelectTrigger className="bg-secondary border-0">
                    <SelectValue placeholder="Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job-visa">Job Visa</SelectItem>
                    <SelectItem value="business-visa">Business Visa</SelectItem>
                    <SelectItem value="student-visa">Student Visa</SelectItem>
                    <SelectItem value="worker-visa">Worker Visa</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-secondary border-0"
                />
                <Button className="bg-accent hover:bg-accent-dark text-accent-foreground w-full py-3">
                  Submit Here
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Call us on</h3>
              <p className="text-sm text-accent">Tel: 000-70-34</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <p className="text-sm text-accent">support@yourdomain.com</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Opening hours</h3>
              <p className="text-sm text-muted-foreground">Mon - Sat: 08.00 to 19.00</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-soft">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Share</h3>
              <p className="text-sm text-muted-foreground">Facebook, Twitter, Instagram</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            20+ Across worldwide <span className="text-accent italic">Branches</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "New York Immigration Office",
                address: "189 Principal 3rd That Street LA 07834-05",
                phone: "+123-456-7890",
                email: "support@example.com"
              },
              {
                name: "Immigration Law Group", 
                address: "189 Principal 3rd That Street LA 07834-05",
                phone: "+123-456-7890",
                email: "support@example.com"
              },
              {
                name: "Global Immigration",
                address: "189 Principal 3rd That Street LA 07834-05", 
                phone: "+123-456-7890",
                email: "support@example.com"
              }
            ].map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 shadow-soft">
                <div className="w-full h-32 bg-muted rounded-lg mb-4"></div>
                <h3 className="font-semibold text-primary mb-3">{office.name}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div><strong>Address:</strong> {office.address}</div>
                  <div><strong>Contact Number:</strong> {office.phone}</div>
                  <div><strong>Email Us:</strong> {office.email}</div>
                </div>
                <Button variant="outline" className="w-full mt-4 text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  View Directions
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;