import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Imagine A Better Future */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Imagine A Better Future</h3>
            <p className="text-sm text-footer-foreground/80 mb-4">
              The Most Eminent Visas & Immigration Consultant service provider.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/business" className="text-footer-foreground/80 hover:text-footer-foreground">■ Business</Link></li>
                <li><Link to="/migrate" className="text-footer-foreground/80 hover:text-footer-foreground">■ Migrate</Link></li>
                <li><Link to="/countries" className="text-footer-foreground/80 hover:text-footer-foreground">■ Countries</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Best Universities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">100+ Best Universities</h3>
            <h4 className="font-medium mb-2">Scholarship Programs From 20 Countries</h4>
            <p className="text-sm text-footer-foreground/80 mb-4">
              We also help with other family based employment card and investment based immigration (Yearly from 2022-23 is 8000)
            </p>
            <div className="flex space-x-2">
              <img src="/flag-au.png" alt="Australia" className="w-6 h-4" />
              <img src="/flag-us.png" alt="USA" className="w-6 h-4" />
              <img src="/flag-ca.png" alt="Canada" className="w-6 h-4" />
              <img src="/flag-fr.png" alt="France" className="w-6 h-4" />
            </div>
            <Link to="/apply" className="inline-block mt-4 bg-accent hover:bg-accent-dark text-accent-foreground px-4 py-2 rounded text-sm">
              Apply Visa Now!
            </Link>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p>1st First Floor, 12 St Rossa Terrace, Los Angeles 90210</p>
              <p>Front Desk: +1 89 436 44098</p>
              <p>Email: info@yourdomain.com</p>
            </div>
            <Link to="/branches" className="text-accent hover:text-accent-light">View All Branches</Link>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Sign up to Latest Updates</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address..." 
                  className="flex-1 px-3 py-2 text-primary bg-white rounded-l text-sm"
                />
                <button className="bg-accent hover:bg-accent-dark px-4 py-2 rounded-r">
                  <span className="text-accent-foreground">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Column 4: Canada Immigrations */}
          <div>
            <div className="bg-white text-primary p-4 rounded">
              <h3 className="font-bold mb-2">Canada</h3>
              <h4 className="font-semibold text-lg mb-2">Immigrations</h4>
              <p className="text-sm mb-4">Give Wings to Your Dream</p>
              <p className="text-xs">Call Us On +00-456-7890</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-footer-foreground/20 mt-8 pt-4 text-center text-sm text-footer-foreground/60">
          <p>Copyright © 2024 Truvik. Theme by PrepareforChange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;