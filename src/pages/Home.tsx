import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      number: "01",
      title: "Hands-On, Practical Expertise",
      description:
        "We're certified pros who get our hands dirty with your data and workflows. No jargon, just results.",
    },
    {
      number: "02",
      title: "Tailored Solutions, Not Templates",
      description:
        "Your business isn't one-size-fits-all, and neither are our solutions. We customise everything to fit your way of working.",
    },
    {
      number: "03",
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
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero Section — Dark ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 border-b border-white/[0.06] bg-background grid-blueprint">
        <LiquidGlassBackground variant="hero" />

        {/* 4-Column Blueprint Vertical Grid Lines Overlay */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="h-full"></div>
        </div>

        {/* Giant Vertical Frosted Glass Arch Frame */}
        <div className="absolute top-[15%] w-[85%] md:w-[50%] h-[85%] rounded-t-[16rem] border-t border-x border-white/[0.05] bg-white/[0.015] backdrop-blur-[24px] shadow-[inset_0_1.5px_0_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.65)] z-0 pointer-events-none flex flex-col justify-end p-12">
          {/* Subtle reflection overlay inside arch */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-t-[16rem] pointer-events-none" />
        </div>

        <div className="container relative mx-auto px-4 md:px-8 z-10 pt-40 pb-24 max-w-7xl text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose font-mono mb-8 block px-3 py-1 rounded-full border border-rose/20 bg-rose/[0.02] backdrop-blur-md">
              // Elite Digital Architecture
            </span>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.85] text-white uppercase mb-10 max-w-4xl select-none">
              Bespoke <br />
              Systems. <br />
              Real{" "}
              <span className="text-rose font-extrabold italic font-serif lowercase tracking-normal">
                results
              </span>
              .
            </h1>

            <p className="text-base md:text-xl text-white/70 leading-relaxed max-w-lg mb-12 font-sans">
              Salesforce, Cloud, and AI platforms engineered for enterprise scale, built to integrate seamlessly with your workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link to="/book-consultation">
                <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg cursor-pointer">
                  Book Consultation &rarr;
                </Button>
              </Link>
              <Link
                to="/solutions"
                className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 hover:text-rose transition-colors py-4 px-6 cursor-pointer"
              >
                Explore Services &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Left and Right Vertical Info Bars */}
        <div className="absolute left-6 bottom-12 hidden xl:block z-20">
          <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] block origin-left -rotate-90 -translate-y-12">
            // UK . CANADA . EST. 2026
          </span>
        </div>
        <div className="absolute right-6 bottom-12 hidden xl:block z-20">
          <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] block origin-right rotate-90 translate-y-12">
            SCROLL TO EXPLORE &darr;
          </span>
        </div>
      </section>

      {/* ── Services Showcase — Dark ── */}
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

      {/* ── Studio Gallery Transition ── */}
      {/* Gradient fade from dark to light clay */}
      <div className="h-48 w-full pointer-events-none" style={{background: "linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      {/* ── Why Us Section — Light Clay ── */}
      <section className="bg-studio-light relative pt-4 pb-28 overflow-hidden">

        {/* Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Section Header */}
          <div className="pt-4 pb-16 border-b studio-rule">
            <div className="flex items-baseline justify-between">
              <span className="studio-label">// Why Cohby</span>
              <span className="studio-label">03 pillars</span>
            </div>
          </div>

          {/* Big Statement */}
          <div className="py-20 border-b studio-rule">
            <h2 className="studio-heading text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[0.95]">
              We reject templated systems. We build bespoke digital architecture that integrates with your workflow.
            </h2>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-2">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="py-12 pr-12 border-b md:border-b-0 md:border-r studio-rule last:border-r-0 last:border-b-0 group"
              >
                <span className="studio-label block mb-8">// {item.number}</span>
                <h3 className="text-xl font-bold text-[#121214] mb-4 leading-tight tracking-tight group-hover:opacity-60 transition-opacity">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed studio-subtext">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology Section — Light Clay ── */}
      <section className="bg-studio-light relative pb-28 overflow-hidden">

        {/* Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Section Header */}
          <div className="pb-12 border-b studio-rule">
            <div className="flex items-baseline justify-between">
              <h2 className="studio-heading text-4xl md:text-5xl">Our Methodology</h2>
              <span className="studio-label">Process</span>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x" style={{borderColor: "rgba(18,18,20,0.1)"}}>
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="py-12 pr-0 md:pr-10 pl-0 md:pl-10 first:pl-0 group"
              >
                <span className="studio-label block mb-8">// {step.number}</span>
                <h3 className="text-2xl font-bold text-[#121214] mb-4 tracking-tight uppercase group-hover:opacity-60 transition-opacity">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed studio-subtext">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Block */}
          <div className="mt-16 studio-cta-block p-14 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}} />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-6">// Next Step</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]">
              Let's Build<br />
              <span className="italic font-serif lowercase tracking-normal text-rose">the future</span>
            </h2>
            <p className="text-base text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
              Collaborate with us to architect custom Salesforce, Cloud, and AI systems built specifically for your scale.
            </p>
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose transition-colors duration-300 font-semibold"
            >
              Book Consultation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
