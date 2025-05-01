
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="luxury-container py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been confirmed and is being processed.
            You will receive a confirmation email with details of your purchase.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold mb-2">What's Next?</h2>
            <ul className="space-y-2 text-left">
              <li className="flex">
                <span className="mr-2">•</span> 
                <span>Our team will reach out to you within 24 hours to arrange delivery.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span> 
                <span>A detailed invoice has been sent to your registered email address.</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span> 
                <span>For any questions, please contact our customer service team.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
