
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, ShoppingCart, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Car, formatPrice } from "@/data/cars";

interface ProductDetailProps {
  car: Car;
}

export function ProductDetail({ car }: ProductDetailProps) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };
  
  const handleAddToCart = () => {
    addToCart(car);
  };
  
  const handleBuyNow = () => {
    addToCart(car);
    navigate('/cart');
  };

  return (
    <div className="luxury-container py-10">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Image slider */}
        <div className="relative">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-4">
            <img
              src={car.images[currentImageIndex]}
              alt={`${car.brand} ${car.name}`}
              className="w-full h-full object-cover"
            />
            
            {/* Image navigation */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevImage}
                className="rounded-full bg-black/20 border-0 text-white hover:bg-black/40"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextImage}
                className="rounded-full bg-black/20 border-0 text-white hover:bg-black/40"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {car.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                  index === currentImageIndex ? "border-primary" : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${car.brand} ${car.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side: Product information */}
        <div className="space-y-6">
          <div>
            <span className="text-muted-foreground">{car.brand}</span>
            <h1 className="text-3xl md:text-4xl font-bold">{car.name}</h1>
            <div className="mt-2 flex items-center">
              <BadgeIndianRupee className="w-6 h-6 text-primary mr-1" />
              <span className="text-2xl font-bold">{formatPrice(car.price)}</span>
            </div>
          </div>

          <div className="py-3 border-y border-border">
            <h2 className="text-xl font-semibold mb-3">Description</h2>
            <p className="text-muted-foreground">{car.description}</p>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Engine</span>
                <p className="font-medium">{car.specs.engine}</p>
              </div>
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Power</span>
                <p className="font-medium">{car.specs.power}</p>
              </div>
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Torque</span>
                <p className="font-medium">{car.specs.torque}</p>
              </div>
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Acceleration</span>
                <p className="font-medium">{car.specs.acceleration}</p>
              </div>
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Top Speed</span>
                <p className="font-medium">{car.specs.topSpeed}</p>
              </div>
              <div className="bg-muted/40 p-3 rounded-lg">
                <span className="text-sm text-muted-foreground">Transmission</span>
                <p className="font-medium">{car.specs.transmission}</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-4 pt-4">
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary/10"
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button 
              onClick={handleBuyNow} 
              className="flex-1"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
