import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-header-bg text-header-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mdeasyworld@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Call Us: 9050519168, 8950023501</span>
              </div>
            </div>
          <div className="flex items-center space-x-4">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/0c5eb42a-7f1b-4596-acd8-a8b530e8e3ff.png" 
                alt="Easy World Educational Consultant Logo" 
                className="h-14 w-auto transition-all duration-300 group-hover:scale-105" 
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</Link>
              <Link to="/countries" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Countries</Link>
              <Link to="/visa" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Requirements</Link>
              <Link to="/contact" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search Here...</span>
              </div>
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;