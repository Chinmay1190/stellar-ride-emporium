
import { Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { CheckoutForm } from "@/components/CheckoutForm";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  
  // Redirect to cart page if cart is empty
  if (cartItems.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
};

export default CheckoutPage;
