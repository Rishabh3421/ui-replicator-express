import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Easy World Info */}
          <div className="animate-fade-in-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-accent w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Easy World</h3>
                <p className="text-xs text-footer-foreground/80">Educational Consultant</p>
              </div>
            </div>
            <p className="text-sm text-footer-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for visa and immigration services. We help build futures with personalized guidance and transparent processes.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li><Link to="/about" className="text-footer-foreground/80 hover:text-accent transition-colors duration-300">About Us</Link></li>
                <li><Link to="/services" className="text-footer-foreground/80 hover:text-accent transition-colors duration-300">Our Services</Link></li>
                <li><Link to="/country" className="text-footer-foreground/80 hover:text-accent transition-colors duration-300">Countries</Link></li>
                <li><Link to="/contact" className="text-footer-foreground/80 hover:text-accent transition-colors duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">Student Visa</li>
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">Work Visa</li>
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">Tourist & Visitor Visa</li>
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">PR & Immigration</li>
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">Business & Investor Visa</li>
              <li className="text-footer-foreground/80 hover:text-accent transition-colors duration-300 cursor-pointer">Family & Dependent Visa</li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Head Office:</p>
                  <p className="text-footer-foreground/80">Mahalaxmi Nagar, Vijay Nagar, Indore – 452010</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-footer-foreground/80">9050519168, 8950023501, 8396000445</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-footer-foreground/80">mdeasyworld@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Branches</h4>
              <p className="text-sm text-footer-foreground/80">Indore (HO), Assandh, Panipat, Sonipat, Indri</p>
            </div>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-footer-foreground/80 mb-3">Subscribe for latest updates</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter email address..." 
                    className="flex-1 px-3 py-2 text-primary bg-white rounded-l text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button className="bg-accent hover:bg-accent-dark px-4 py-2 rounded-r transition-colors duration-300">
                    <span className="text-accent-foreground">→</span>
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-accent hover:bg-accent-dark rounded cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <span className="text-accent-foreground text-xs">FB</span>
                  </div>
                  <div className="w-8 h-8 bg-accent hover:bg-accent-dark rounded cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <span className="text-accent-foreground text-xs">IG</span>
                  </div>
                  <div className="w-8 h-8 bg-accent hover:bg-accent-dark rounded cursor-pointer transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <span className="text-accent-foreground text-xs">LI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="https://wa.me/919050519168" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-gentle"
          >
            <span className="text-2xl">💬</span>
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-footer-foreground/20 mt-12 pt-6 text-center">
          <p className="text-sm text-footer-foreground/60 leading-relaxed">
            <strong>Disclaimer:</strong> Easy World Educational Consultant is an independent consultancy providing visa and immigration guidance. 
            We are not affiliated with any government authority.
          </p>
          <p className="text-xs text-footer-foreground/50 mt-2">
            Copyright © 2024 Easy World Educational Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;