
import { BadgeIndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="luxury-container py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <BadgeIndianRupee className="h-8 w-8 text-primary" />
            <span className="text-xl font-display font-bold">
              <span className="gradient-text">Stellar</span> Ride
            </span>
          </Link>
          <p className="text-muted-foreground">
            India's premier destination for luxury and sports automobiles, offering an unparalleled selection of the world's finest vehicles.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/category/luxury" className="text-muted-foreground hover:text-primary transition-colors">
                Luxury Cars
              </Link>
            </li>
            <li>
              <Link to="/category/sports" className="text-muted-foreground hover:text-primary transition-colors">
                Sports Cars
              </Link>
            </li>
            <li>
              <Link to="/category/supercar" className="text-muted-foreground hover:text-primary transition-colors">
                Supercars
              </Link>
            </li>
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Return Policy
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe to our Newsletter</h3>
          <p className="text-muted-foreground mb-4">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-3 py-2 bg-muted text-foreground rounded-l-md focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-border">
        <div className="luxury-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Stellar Ride Emporium. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
