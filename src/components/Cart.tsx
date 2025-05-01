
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BadgeIndianRupee, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/cars";

export function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartTotal } = useCart();
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="luxury-container py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Explore our exclusive collection and add items to your cart.</p>
        <Button 
          onClick={() => navigate('/')}
          className="px-8"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="luxury-container py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {/* Cart items */}
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col sm:flex-row gap-6 border border-border rounded-lg p-4"
            >
              <div className="sm:w-1/3">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md" 
                />
              </div>
              
              <div className="sm:w-2/3 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.brand}</p>
                  </div>
                  <Button
                    variant="ghost" 
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline" 
                      size="icon" 
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline" 
                      size="icon" 
                      onClick={() => increaseQuantity(item.id)}
                      className="h-8 w-8"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center text-primary">
                    <BadgeIndianRupee className="h-4 w-4 mr-1" />
                    <span className="font-bold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Clear cart button */}
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-destructive border-destructive hover:bg-destructive/10"
            >
              <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="bg-card border border-border rounded-lg p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
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
              <span>Taxes</span>
              <div className="flex items-center">
                <BadgeIndianRupee className="h-3 w-3 mr-1" />
                <span>{formatPrice(cartTotal * 0.18)}</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-3 mt-3 flex justify-between font-bold">
              <span>Total</span>
              <div className="flex items-center text-primary">
                <BadgeIndianRupee className="h-4 w-4 mr-1" />
                <span>{formatPrice(cartTotal * 1.18)}</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/checkout')}
            className="w-full"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
