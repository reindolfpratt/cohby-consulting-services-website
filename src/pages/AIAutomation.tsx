import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const AIAutomation = () => {
  const services = [
    {
      id: "engineering",
      title: "AI Engineering & Integrations",
      category: "INTELLIGENCE",
      description:
        "Custom machine learning pipelines and deep integrations with your existing platforms. We build intelligent systems that scale and adapt to your complex data architecture.",
      features: [
        "Machine learning model deployment",
        "Custom LLM integrations",
        "API & webhook development",
        "Data pipeline engineering",
        "Predictive analytics engines",
      ],
    },
    {
      id: "automations",
      title: "Intelligent Automations",
      category: "WORKFLOWS",
      description:
        "Streamline your operations with intelligent workflow automation. We build custom solutions that save time, reduce errors, and let your team focus on high-impact work.",
      features: [
        "Workflow process automation",
        "Document processing & data extraction",
        "Email and task automation",
        "Business process optimisation",
        "RPA (Robotic Process Automation)",
      ],
    },
    {
      id: "chatbots",
      title: "Conversational AI Chatbots",
      category: "AGENTS",
      description:
        "Engage customers 24/7 with advanced conversational AI. Our agents understand context, handle complex queries, and seamlessly hand off to human reps when necessary.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment (Web, WhatsApp, etc.)",
        "CRM & helpdesk integration",
        "Lead qualification & booking",
        "Continuous learning & feedback loops",
      ],
    },
    {
      id: "websites",
      title: "AI-Powered Platforms",
      category: "PLATFORMS",
      description:
        "Next-generation portals and websites that work smarter. Our platforms adapt to users, personalise content, and generate actionable insights automatically.",
      features: [
        "Intelligent content personalisation",
        "AI-powered search & recommendations",
        "Automated SEO optimization",
        "Smart lead capture",
        "Performance self-optimisation",
      ],
    },
    {
      id: "social",
      title: "Social Media Automations",
      category: "SOCIAL",
      description:
        "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and performance analytics across all major channels.",
      features: [
        "Scheduled content publishing",
        "Cross-platform management",
        "Automated engagement responses",
        "Performance analytics & reporting",
      ],
    },
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate repetitive tasks and free up hours every week.",
    },
    {
      title: "Scale Effortlessly",
      description: "Handle more workload without adding proportional headcount.",
    },
    {
      title: "Reduce Errors",
      description: "Eliminate human error with consistent, deterministic automation.",
    },
    {
      title: "Stay Competitive",
      description: "Leverage cutting-edge engineering to outpace your industry.",
    },
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden z-10 border-b border-white/10">
        <LiquidGlassBackground variant="hero" />

        <div className="container relative mx-auto px-4 md:px-8 z-10 pt-36 pb-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Vertical Info */}
            <div className="lg:col-span-2 hidden lg:block pt-12">
              <span className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.3em] block origin-left rotate-90 translate-y-24 whitespace-nowrap">
                // COHBY . INTELLIGENCE . 2026
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">// SYSTEM AUTOMATIONS</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-white uppercase mb-8">
                Engineer <br />
                Your <br />
                Future <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">today</span>.
              </h1>
            </div>

            {/* Right Explainer & CTA */}
            <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-white/50 leading-relaxed max-w-[32ch]">
                From intelligent data pipelines to custom automated workflows, we engineer AI systems that drive massive business impact.
              </p>
              
              <div className="flex flex-col space-y-4 items-start">
                <Link to="/book-consultation">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all">
                    Start Building →
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Showcase - Row List Style */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-24 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              AI & Automation Engineering
            </h2>
          </div>

          {/* Row Stack List */}
          <div className="border-b border-white/10">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group relative scroll-mt-24"
              >
                {/* 1. Category Tag */}
                <div className="lg:col-span-2 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                  // {service.category}
                </div>

                {/* 2. Headline & Description */}
                <div className="lg:col-span-5 pr-8 mb-6 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 3. Features List */}
                <div className="lg:col-span-4 mb-4 lg:mb-0 lg:pt-1">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-4">// Core Deliverables</span>
                  <ul className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose/60"></span>
                        <span className="text-xs text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Arrow Link */}
                <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-rose" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The ROI - Asymmetric Split Grid */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left">
            <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.25em] block mb-8">
              // VALUE GENERATION
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] uppercase mb-20">
              The engineering ROI. We build solutions that scale your operations, reduce human error, and save massive overhead.
            </h2>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <span className="text-xs font-mono text-rose/60 block mb-3">// ROI 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose transition-colors">{benefit.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10 bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10 uppercase tracking-tighter">
              Ready to Automate?
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let's engineer custom AI workflows and system integrations to scale your business operations.
            </p>
            
            <Link to="/book-consultation" className="relative z-10 inline-block">
              <Button
                size="lg"
                className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg"
              >
                Schedule an Assessment →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
