import { CheckCircle2 } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const BookConsultation = () => {
  const benefits = [
    "No-obligation conversation about your business needs",
    "Expert advice from certified Salesforce consultants",
    "Tailored recommendations for your specific challenges",
    "Clear next steps and transparent pricing",
    "Discover how Salesforce can transform your operations",
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30 relative grid-blueprint">
      
      {/* 4-Column Blueprint Vertical Grid Lines Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="h-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden z-10 border-b border-white/10">
        <LiquidGlassBackground variant="hero" />
        
        <div className="container relative mx-auto px-4 md:px-8 z-10 max-w-7xl pt-36 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2 hidden lg:block"></div>
            <div className="lg:col-span-10 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// ADVISORY SERVICES</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">Book Your <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">consultation</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                30 minutes that could transform your business technology architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Asymmetric split layout */}
      <section className="py-24 relative z-10 bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: What to expect & you'll get */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.2em] block mb-4">// AGENDA</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">What to Expect</h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  During your free 30-minute consultation, we'll take the time to understand 
                  your business challenges and explore how custom Salesforce, Cloud, or AI solutions 
                  can optimize your operational efficiency.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.2em] block mb-4">// DELIVERABLES</span>
                <h3 className="text-xl font-bold text-white uppercase mb-4">You'll Get:</h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose/60 mt-1.5 flex-shrink-0"></span>
                      <p className="text-white/60 text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-8">
                <p className="text-xs font-mono text-rose/60 uppercase tracking-widest block mb-2">// OUR PHILOSOPHY</p>
                <p className="text-sm text-white/40 leading-relaxed italic">
                  "We believe in building long-term partnerships, not making quick sales. If we are not the right fit, we will tell you. If we can help, we will show you exactly how."
                </p>
              </div>
            </div>

            {/* Right Column: Schedule Card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 bg-rose/10 blur-3xl rounded-full pointer-events-none"></div>
                <div className="relative rounded-[2rem] bg-white/[0.02] backdrop-blur-md p-8 border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Schedule Your Call</h3>
                  
                  <div className="space-y-6 text-sm text-white/70">
                    <p className="text-white/50 mb-6">
                      To schedule your free consultation, please contact us directly:
                    </p>
                    
                    <div className="space-y-6 border-t border-white/5 pt-6">
                      <div>
                        <p className="text-xs font-mono text-rose/50 uppercase tracking-[0.15em] mb-1">United Kingdom</p>
                        <a
                          href="tel:+447424742415"
                          className="text-base font-bold text-white hover:text-rose transition-colors font-mono"
                        >
                          +44 7424 742415
                        </a>
                      </div>
                      
                      <div>
                        <p className="text-xs font-mono text-rose/50 uppercase tracking-[0.15em] mb-1">Canada</p>
                        <a
                          href="tel:+13438832087"
                          className="text-base font-bold text-white hover:text-rose transition-colors font-mono"
                        >
                          +1 343 883 2087
                        </a>
                      </div>
                      
                      <div className="pt-6 border-t border-white/5">
                        <p className="text-xs font-mono text-rose/50 uppercase tracking-[0.15em] mb-1">Email Inquiry</p>
                        <a
                          href="mailto:info@cohbyconsultingservices.com"
                          className="text-sm font-bold text-white hover:text-rose transition-colors font-mono"
                        >
                          info@cohbyconsultingservices.com
                        </a>
                      </div>
                    </div>

                    <p className="text-xs text-white/30 font-mono mt-8 uppercase tracking-wider text-center">
                      // Available Monday to Saturday, 10 AM - 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
