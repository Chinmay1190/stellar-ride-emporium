
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductDetail } from "@/components/ProductDetail";
import { CarCard } from "@/components/CarCard";
import { getCarById, cars } from "@/data/cars";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const car = id ? getCarById(parseInt(id, 10)) : undefined;
  
  // Get related cars (same category but not the same car)
  const relatedCars = car 
    ? cars.filter(item => item.category === car.category && item.id !== car.id).slice(0, 4)
    : [];
    
  if (!car) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <Layout>
      <ProductDetail car={car} />
      
      {relatedCars.length > 0 && (
        <section className="luxury-container py-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCars.map(relatedCar => (
              <CarCard key={relatedCar.id} car={relatedCar} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductPage;
