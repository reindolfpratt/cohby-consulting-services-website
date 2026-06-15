import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30 relative grid-blueprint flex items-center justify-center p-4">
      {/* 4-Column Blueprint Vertical Grid Lines Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="h-full"></div>
      </div>

      <LiquidGlassBackground variant="hero" />

      <div className="max-w-md w-full text-center space-y-8 animate-fade-in p-8 md:p-12 bg-white/[0.02] border border-white/10 shadow-2xl rounded-3xl relative z-10 backdrop-blur-md">
        <div className="mx-auto w-16 h-16 bg-rose/5 border border-rose/10 rounded-full flex items-center justify-center mb-6">
          <span className="text-rose font-mono text-xl">//</span>
        </div>
        
        <h1 className="text-3xl font-black tracking-tight text-white uppercase font-mono">Thank You</h1>
        
        <p className="text-white/50 text-sm leading-relaxed">
          Your message has been successfully received. A member of our team will review your inquiry and get back to you shortly.
        </p>
        
        <div className="pt-6 border-t border-white/5">
          <Link to="/">
            <Button className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-6 py-5 rounded-full shadow-lg transition-all duration-300">
              Return to Homepage
              <ArrowRight className="ml-2 w-4 h-4 text-black" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
