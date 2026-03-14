import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6 animate-fade-in p-8 bg-background border border-border shadow-xl rounded-2xl">
        <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight">Thank You!</h1>
        
        <p className="text-muted-foreground text-lg">
          Your message has been successfully received. A member of our team will review your inquiry and get back to you shortly.
        </p>
        
        <div className="pt-6 border-t border-border">
          <Link to="/">
            <Button className="w-full sm:w-auto glow-button bg-primary text-primary-foreground hover:bg-secondary">
              Return to Homepage
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
