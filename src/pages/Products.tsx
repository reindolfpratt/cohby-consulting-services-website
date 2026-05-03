import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Rocket } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "CohbyLearn LMS",
      tagline: "AI-Driven, Enterprise-Grade Learning",
      description: "A multi-tenant learning management system designed for the future. From AI course generation to SCORM compliance, CohbyLearn handles it all.",
      features: ["AI Architect", "SCORM 1.2/2004", "Live Learning Engine"],
      link: "/products/cohbylearn",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      color: "from-blue-500/20 to-cyan-500/20",
    }
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-navy z-10">
        <div className="absolute inset-0 data-rain-bg opacity-10"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
        
        <div className="container relative mx-auto px-4 z-10 text-center pt-20">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-foreground/80 mb-8 backdrop-blur-sm">
              <Rocket size={16} className="text-primary" />
              <span className="text-sm font-medium tracking-wide uppercase">The Cohby Product Suite</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none">
              Tools for the <span className="text-transparent bg-clip-text bg-gradient-primary">Digital Age</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
              Proprietary software solutions built by Cohby Consulting to streamline your operations and amplify your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative animate-slide-up"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-[2.5rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                <div className="relative bg-card border border-border/50 rounded-[2.5rem] overflow-hidden p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        {product.icon}
                      </div>
                      <span className="text-primary font-bold tracking-widest uppercase text-sm">{product.tagline}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground">{product.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.features.map((feature, fIdx) => (
                        <span key={fIdx} className="px-4 py-2 rounded-full bg-ash text-foreground text-sm font-semibold border border-border/50">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link to={product.link} className="inline-block pt-4">
                      <Button size="lg" className="glow-button bg-primary text-white hover:bg-secondary rounded-full px-8 py-6 text-lg font-bold group">
                        Explore Features
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex-1 w-full aspect-video bg-navy/50 rounded-3xl border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                       <Sparkles size={120} className="text-primary animate-pulse-glow" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-navy rounded-[3rem] p-10 md:p-16 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Shield size={200} className="text-primary" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-white mb-4">Enterprise-Grade Security</h3>
                <p className="text-white/60 text-lg">
                  Every Cohby product is built on a foundation of multi-tenancy and row-level security. Your data is isolated, encrypted, and protected by industry-standard protocols.
                </p>
              </div>
              <div className="flex gap-8 items-center border-l border-white/10 pl-10 hidden md:flex">
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">AES-256</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-tighter">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-primary">99.9%</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-tighter">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 relative z-10 border-t border-border">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">Need a Custom Solution?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              We also build bespoke platforms tailored specifically to your unique business requirements.
            </p>
            <Link to="/book-consultation">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg font-bold border-primary text-primary hover:bg-primary/5 transition-all">
                Talk to an Expert
              </Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Products;
