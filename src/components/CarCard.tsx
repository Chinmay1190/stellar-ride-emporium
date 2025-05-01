
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, ShoppingCart } from 'lucide-react';
import { Car, formatPrice } from '@/data/cars';
import { useCart } from '@/context/CartContext';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card-luxury group relative"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <img 
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs uppercase">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{car.name}</h3>
            <p className="text-muted-foreground">{car.brand}</p>
          </div>
          <div className="flex items-center text-primary">
            <BadgeIndianRupee className="h-4 w-4 mr-1" />
            <span className="font-bold">{formatPrice(car.price)}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {car.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-muted px-2 py-1 rounded-md text-xs">
            {car.specs.engine}
          </div>
          <div className="bg-muted px-2 py-1 rounded-md text-xs">
            {car.specs.power}
          </div>
          <div className="bg-muted px-2 py-1 rounded-md text-xs">
            {car.specs.acceleration}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button asChild className="flex-1">
            <Link to={`/product/${car.id}`}>
              View Details
            </Link>
          </Button>
          <Button 
            onClick={() => addToCart(car)} 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
