
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { CarCard } from "@/components/CarCard";
import { Layout } from "@/components/Layout";
import { cars, getCarsByCategory } from "@/data/cars";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const featuredCars = activeCategory === "all" 
    ? cars.slice(0, 8) 
    : getCarsByCategory(activeCategory).slice(0, 8);
  
  const categories = [
    { id: "all", name: "All" },
    { id: "luxury", name: "Luxury" },
    { id: "sports", name: "Sports" },
    { id: "supercar", name: "Supercars" }
  ];

  return (
    <Layout>
      <Hero />
      
      <section className="luxury-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Exclusive Collection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the world's most prestigious and high-performance vehicles, 
            crafted for those who demand the extraordinary.
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 mb-10 overflow-auto pb-4">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`min-w-[100px] ${
                activeCategory === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <Link to="/category/all">View All Vehicles</Link>
          </Button>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-muted py-16">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Stellar Ride Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We go beyond selling exceptional cars to deliver a seamless, luxurious experience from browsing to delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
              <p className="text-muted-foreground">
                Every purchase is protected with state-of-the-art encryption and secure payment systems.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Authenticity</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes rigorous authentication and quality checks before being offered for sale.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Our team of automotive experts is available 24/7 to assist with inquiries and provide personalized guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="luxury-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premier Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We proudly represent the world's most prestigious automotive manufacturers.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {["Ferrari", "Lamborghini", "Rolls-Royce", "Aston Martin", "Porsche", "Bugatti"].map((brand) => (
            <div 
              key={brand} 
              className="flex items-center justify-center bg-card border border-border rounded-lg p-6 h-24 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-display font-bold text-center">{brand}</h3>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
