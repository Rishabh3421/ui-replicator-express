import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Search, Menu, X } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-header-bg text-header-foreground py-2 text-sm hidden md:block">
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
            {/* Logo and Title */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/lovable-uploads/0c5eb42a-7f1b-4596-acd8-a8b530e8e3ff.png"
                alt="Easy World Educational Consultant Logo"
                className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
              />
              <span className="text-primary font-bold text-xl">Easy World Education Consultants</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Home</Link>
              <Link to="/about" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">About</Link>
              <Link to="/services" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Services</Link>
              <Link to="/countries" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Countries</Link>
              <Link to="/contact" className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Contact</Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsEnquiryOpen(true)}
                className="hidden md:flex items-center space-x-2 text-muted-foreground hover:text-accent"
              >
                <Search className="w-4 h-4" />
              </Button> */}
              <Button
                onClick={() => setIsEnquiryOpen(true)}
                className="hidden md:flex bg-accent hover:bg-accent-dark text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Apply Now
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="pt-4 pb-2 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/countries"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Countries
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 space-y-2">
                <Button
                  onClick={() => {
                    setIsEnquiryOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-accent hover:bg-accent-dark text-accent-foreground"
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Enquiry Form Modal */}
      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
};

export default Header;
