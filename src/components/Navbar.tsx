
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, BadgeIndianRupee } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BadgeIndianRupee className="h-8 w-8 text-primary" />
            <span className="text-xl font-display font-bold">
              <span className="gradient-text">Stellar</span> Ride
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/category/luxury" className="text-foreground hover:text-primary transition-colors">
              Luxury
            </Link>
            <Link to="/category/sports" className="text-foreground hover:text-primary transition-colors">
              Sports
            </Link>
            <Link to="/category/supercar" className="text-foreground hover:text-primary transition-colors">
              Supercars
            </Link>
          </nav>

          {/* Cart & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-background border-t border-border animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/category/luxury" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Luxury
            </Link>
            <Link 
              to="/category/sports" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sports
            </Link>
            <Link 
              to="/category/supercar" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Supercars
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
