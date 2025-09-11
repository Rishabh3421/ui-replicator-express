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
              <span>truvik@yourdomain.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Call Us: +000 123 123 21</span>
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">T</span>
              </div>
              <span className="text-2xl font-bold text-primary">Truvik</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/pages" className="text-foreground hover:text-primary transition-colors">Pages</Link>
              <Link to="/visa" className="text-foreground hover:text-primary transition-colors">Visa</Link>
              <Link to="/coaching" className="text-foreground hover:text-primary transition-colors">Coaching</Link>
              <Link to="/country" className="text-foreground hover:text-primary transition-colors">Country</Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact Us</Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-muted-foreground">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search Here...</span>
              </div>
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground">
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;