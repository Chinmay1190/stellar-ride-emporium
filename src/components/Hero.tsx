
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 luxury-container min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
          <span className="gradient-text">Stellar Ride</span> Emporium
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Experience the extraordinary with India's premier luxury and sports car collection. 
          Featuring the world's most prestigious automotive masterpieces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg"
          >
            <Link to="/category/luxury">
              Explore Luxury Cars
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 text-lg"
          >
            <Link to="/category/sports">
              Discover Sports Models
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-300 mb-2">Scroll to Explore</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </div>
  );
}
