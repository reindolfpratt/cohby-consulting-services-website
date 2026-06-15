import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Home = () => {
  const services = [
    {
      title: "Salesforce Consulting",
      category: "Salesforce",
      description:
        "Tailored Salesforce solutions, implementation, and customisation that fit your unique business needs.",
    },
    {
      title: "Cloud Solutions",
      category: "Cloud",
      description:
        "Comprehensive cloud architecture, migration, and infrastructure management for modern enterprises.",
    },
    {
      title: "AI Automation & Engineering",
      category: "Intelligence",
      description:
        "Intelligent AI pipelines, machine learning models, and automated workflows that save time and reduce errors.",
    },
    {
      title: "Data Analysis",
      category: "Data",
      description:
        "Deep insights through advanced BI, predictive analytics, and transformative data engineering.",
    },
    {
      title: "Data Migration & Integration",
      category: "Integrations",
      description:
        "Seamless transfer and connection of your critical data across platforms and cloud environments.",
    },
    {
      title: "Ongoing Support & Training",
      category: "Support",
      description:
        "Continuous guidance to ensure your tech stack and team evolve with your business.",
    },
  ];

  const differentiators = [
    {
      title: "Hands-On, Practical Expertise",
      description:
        "We're certified pros who get our hands dirty with your data and workflows. No jargon, just results.",
    },
    {
      title: "Tailored Solutions, Not Templates",
      description:
        "Your business isn't one-size-fits-all, and neither are our solutions. We customise everything to fit your way of working.",
    },
    {
      title: "Transparent, Collaborative Partnership",
      description:
        "We work with you every step of the way, keeping you in control and informed throughout.",
    },
  ];

  const workProcess = [
    {
      number: "01",
      title: "Discover",
      description: "We work with you to understand your goals and challenges.",
    },
    {
      number: "02",
      title: "Design",
      description: "Build a customised strategy and architecture.",
    },
    {
      number: "03",
      title: "Deliver",
      description: "Implement solutions efficiently and effectively.",
    },
    {
      number: "04",
      title: "Support",
      description: "Provide ongoing assistance and optimisation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30 relative">

      {/* ── Hero Section ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden z-10 border-b border-white/10">
        <LiquidGlassBackground variant="hero" />

        {/* Frosted glass arch frame */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[65%] h-[320px] md:h-[450px] rounded-t-[12rem] md:rounded-t-[20rem] border-t border-x border-white/[0.08] bg-white/[0.015] backdrop-blur-[12px] shadow-[inset_0_2px_24px_rgba(255,255,255,0.06)] z-0 pointer-events-none" />

        <div className="container relative mx-auto px-4 md:px-8 z-10 pt-36 pb-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left rotated label */}
            <div className="lg:col-span-2 hidden lg:block pt-12">
              <span className="text-[10px] font-mono text-rose/55 uppercase tracking-[0.3em] block origin-left rotate-90 translate-y-24 whitespace-nowrap">
                COHBY . STUDIO . 2026
              </span>
            </div>

            {/* Main headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">
                // ELITE DIGITAL ENGINEERING
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-white uppercase mb-8">
                Smart <br />
                Solutions. <br />
                Real{" "}
                <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">
                  results
                </span>
                .
              </h1>
            </div>

            {/* Right explainer + CTA */}
            <div
              className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <p className="text-lg text-white/75 leading-relaxed max-w-[32ch]">
                Salesforce, Cloud, and AI systems engineered for scale. Built custom to adapt to your enterprise workflow.
              </p>

              <div className="flex flex-col space-y-4 items-start">
                <Link to="/book-consultation">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all cursor-pointer">
                    Book Consultation &rarr;
                  </Button>
                </Link>
                <Link
                  to="/solutions"
                  className="text-xs font-mono uppercase tracking-[0.2em] text-white/65 hover:text-rose transition-colors pt-2 cursor-pointer"
                >
                  Explore services &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Showcase ── */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          <div className="mb-24 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">
              // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Our Capabilities
            </h2>
          </div>

          <div className="border-b border-white/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 py-12 items-center border-t border-white/[0.07] transition-all duration-300 group relative service-row-glass glass-sheen-sweep cursor-pointer"
              >
                {/* Category */}
                <div className="lg:col-span-3 text-xs font-mono text-rose/75 uppercase tracking-[0.2em] mb-4 lg:mb-0">
                  // {service.category.toUpperCase()}
                </div>

                {/* Title */}
                <div className="lg:col-span-4 mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white/90 group-hover:text-rose transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4 text-white/70 text-sm leading-relaxed pr-6 mb-4 lg:mb-0 font-sans">
                  {service.description}
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex lg:justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/40 group-hover:translate-x-2 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-rose transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Thesis Section ── */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/[0.04] rounded-full blur-[200px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] uppercase mb-20">
              We reject templated systems. We build bespoke digital architecture that integrates with your workflow, rather than forcing you into rigid templates.
            </h2>

            {/* Differentiators - proper glass cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 border-t border-white/10">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl relative overflow-hidden liquid-glass-card-strong glass-sheen-sweep"
                >
                  <div className="text-4xl font-black text-white/[0.04] font-mono mb-6 select-none leading-none">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rose transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Methodology Section ── */}
      <section className="py-32 relative overflow-hidden bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">

          <div className="mb-20 text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Our Methodology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07] mt-16 border-t border-b border-white/[0.07]">
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="p-8 lg:p-12 group method-step-glass"
              >
                <span className="text-xs font-mono text-rose/75 block mb-6 uppercase tracking-[0.2em]">
                  // {step.number}
                </span>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-32 overflow-hidden border-t border-white/10 bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto liquid-glass-cta-panel p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            {/* Inner rose gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose/[0.08] via-transparent to-primary/[0.06] pointer-events-none rounded-[3rem]" />

            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10 uppercase tracking-tighter">
              Let's Build the Future
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/75 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Collaborate with us to architect custom Salesforce, Cloud, and AI systems built specifically for your scale.
            </p>

            <Link to="/book-consultation" className="relative z-10 inline-block">
              <Button
                size="lg"
                className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg cursor-pointer"
              >
                Book Consultation &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
