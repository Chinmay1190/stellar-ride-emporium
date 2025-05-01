
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeIndianRupee, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/cars";
import { toast } from "sonner";

export function CheckoutForm() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      clearCart();
      toast.success("Payment successful!");
      navigate('/success');
    }, 2000);
  };

  return (
    <div className="luxury-container py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="johndoe@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-muted-foreground mb-1">
                  Address
                </label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="123 Main Street"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-muted-foreground mb-1">
                  City
                </label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Mumbai"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-muted-foreground mb-1">
                  State
                </label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="Maharashtra"
                />
              </div>
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-muted-foreground mb-1">
                  PIN Code
                </label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  placeholder="400001"
                />
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6 bg-card">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-muted-foreground mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="pr-10"
                  />
                  <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                </div>
              </div>
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-muted-foreground mb-1">
                  Expiry Date
                </label>
                <Input
                  id="expiry"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  required
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium text-muted-foreground mb-1">
                  CVV
                </label>
                <Input
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  placeholder="123"
                  maxLength={3}
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Complete Order"}
          </Button>
        </form>

        <div>
          <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <div className="flex items-center text-primary mt-1">
                      <BadgeIndianRupee className="h-3 w-3 mr-1" />
                      <span>{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-3 w-3 mr-1" />
                  <span>{formatPrice(cartTotal)}</span>
                </div>
              </div>
              
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              
              <div className="flex justify-between text-muted-foreground">
                <span>Taxes (18%)</span>
                <div className="flex items-center">
                  <BadgeIndianRupee className="h-3 w-3 mr-1" />
                  <span>{formatPrice(cartTotal * 0.18)}</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold">
                <span>Total</span>
                <div className="flex items-center text-primary">
                  <BadgeIndianRupee className="h-4 w-4 mr-1" />
                  <span>{formatPrice(cartTotal * 1.18)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
