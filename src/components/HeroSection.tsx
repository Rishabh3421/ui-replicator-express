import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-student.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-95"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-bounce-gentle">
              Managing Director: Ravi Kumar
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Anywhere You Want to <span className="text-accent">Be</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Study. Work. Travel. Settle Abroad with Confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Apply Now
              </Button>
              <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Free Consultation
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6 text-center">Quick Enquiry</h3>
              <form className="space-y-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                />
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select Visa Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student Visa</SelectItem>
                    <SelectItem value="work">Work Visa</SelectItem>
                    <SelectItem value="pr">PR Visa</SelectItem>
                    <SelectItem value="tourist">Tourist Visa</SelectItem>
                    <SelectItem value="business">Business Visa</SelectItem>
                    <SelectItem value="family">Family Visa</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Submit Enquiry
                </Button>
              </form>
            </div>
            <img 
              src={heroImage} 
              alt="Study abroad success" 
              className="absolute -bottom-10 -left-10 w-48 h-48 object-cover rounded-xl shadow-2xl opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;