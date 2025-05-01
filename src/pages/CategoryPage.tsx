
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { CarCard } from "@/components/CarCard";
import { cars, getCarsByCategory, formatPrice } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { BadgeIndianRupee, SlidersHorizontal } from "lucide-react";

const CategoryPage = () => {
  const { category = 'all' } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState<string>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300000000]); // 0 to 30 Crore
  const [filteredCars, setFilteredCars] = useState(cars);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter and sort cars based on category, price range, and sorting criteria
  useEffect(() => {
    let result = category === 'all' ? [...cars] : getCarsByCategory(category);
    
    // Apply price filter
    result = result.filter(car => car.price >= priceRange[0] && car.price <= priceRange[1]);
    
    // Apply sorting
    switch(sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting remains as is
        break;
    }
    
    setFilteredCars(result);
  }, [category, sortBy, priceRange]);
  
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };
  
  const categoryTitle = category === 'all' ? 'All Vehicles' : 
    `${category.charAt(0).toUpperCase() + category.slice(1)} Cars`;

  return (
    <Layout>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80')",
            filter: "brightness(0.4)"
          }}
        />
        
        <div className="relative z-10 luxury-container py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryTitle}
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our collection of {category === 'all' ? 'premium vehicles' : `${category} cars`} from the world's most prestigious manufacturers.
          </p>
        </div>
      </div>
      
      <div className="luxury-container py-10">
        {/* Filters and Sorting */}
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          
          <div className={`md:flex gap-6 ${showFilters ? 'flex flex-col' : 'hidden'}`}>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Min Price
              </label>
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="h-4 w-4 text-primary" />
                <select 
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                  className="bg-muted border border-border rounded p-2"
                >
                  <option value={0}>₹0</option>
                  <option value={10000000}>₹1 Cr</option>
                  <option value={30000000}>₹3 Cr</option>
                  <option value={50000000}>₹5 Cr</option>
                  <option value={100000000}>₹10 Cr</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Max Price
              </label>
              <div className="flex items-center gap-2">
                <BadgeIndianRupee className="h-4 w-4 text-primary" />
                <select 
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                  className="bg-muted border border-border rounded p-2"
                >
                  <option value={10000000}>₹1 Cr</option>
                  <option value={30000000}>₹3 Cr</option>
                  <option value={50000000}>₹5 Cr</option>
                  <option value={100000000}>₹10 Cr</option>
                  <option value={300000000}>₹30 Cr</option>
                </select>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-1">
              Sort By
            </label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-muted border border-border rounded p-2"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCars.length} vehicle{filteredCars.length !== 1 ? 's' : ''}
          </p>
        </div>
        
        {/* Car grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-dashed border-border rounded-lg">
            <h3 className="text-xl font-medium mb-2">No vehicles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
