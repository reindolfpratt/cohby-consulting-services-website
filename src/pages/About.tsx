import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-rose/30 relative grid-blueprint">
      
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
        
        <div className="container relative mx-auto px-4 md:px-8 z-10 max-w-7xl pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2 hidden lg:block"></div>
            <div className="lg:col-span-10 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// COMPANY OVERVIEW</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">About <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">cohby</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                Your elite engineering partner in cloud, data, and business transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// MISSION</span>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight">Quantifiable Impact</h2>
            </div>
            <div className="lg:col-span-8 border-l border-white/10 pl-8 lg:pl-16 text-lg text-white/60 space-y-6 leading-relaxed">
              <p>
                Cohby Consulting Services operates on a core thesis: premium engineering should translate directly to elite business outcomes. We've witnessed too many organizations crippled by bloated implementations, rigid architecture, and disconnected data silos.
              </p>
              <p>
                We do things differently. We are deeply technical, hands-on engineers and consultants who solve highly complex data and cloud challenges. Whether you require advanced AI pipelines, robust cloud infrastructure, or a high-performance Salesforce environment, we build to scale.
              </p>
              <p>
                Based in the UK and Canada, we architect customized, future-proof solutions for global enterprises driving the modern digital frontier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="mb-20 text-left">
             <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// PRINCIPLES</span>
             <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 border-t border-b border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 py-12">
            <div className="group lg:px-6 first:pl-0 last:pr-0 pt-6 lg:pt-0">
              <span className="text-xs font-mono text-rose/50 block mb-6">// 01</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">Impact-Obsessed</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We engineer for quantifiable performance, speed, and business scale.
              </p>
            </div>

            <div className="group lg:px-6 pt-6 lg:pt-0">
              <span className="text-xs font-mono text-rose/50 block mb-6">// 02</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">Collaborative</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We integrate seamlessly with your teams, accelerating delivery and execution.
              </p>
            </div>

            <div className="group lg:px-6 pt-6 lg:pt-0">
              <span className="text-xs font-mono text-rose/50 block mb-6">// 03</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">Elite Expertise</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Top-tier cloud architects, data engineers, and certified specialists.
              </p>
            </div>

            <div className="group lg:px-6 pt-6 lg:pt-0">
              <span className="text-xs font-mono text-rose/50 block mb-6">// 04</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">Zero BS</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Complete transparency in architecture, pricing, and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative z-10 bg-background/50 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-24 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// ADVANTAGE</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Why Partner With Us?</h2>
          </div>
          
          <div className="border-b border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // ROOT STRENGTH
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors">Deep Engineering Roots</h3>
              </div>
              <div className="lg:col-span-5 text-white/50 text-sm leading-relaxed">
                We go beyond high-level strategy to execute complex, technical implementations. We write the code, configure the environments, and migrate the data.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // ARCHITECTURE
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors">Future-Proof Architecture</h3>
              </div>
              <div className="lg:col-span-5 text-white/50 text-sm leading-relaxed">
                We build scalable, modular systems designed to handle tomorrow's data loads and computing demands without requiring a total rewrite.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // TIMELINES
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors">Agile & Responsive</h3>
              </div>
              <div className="lg:col-span-5 text-white/50 text-sm leading-relaxed">
                Free from massive agency overhead, we deliver highly responsive execution, rapid prototyping, and flexible engagement models.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // GEOGRAPHY
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors">Global Talent, Local Touch</h3>
              </div>
              <div className="lg:col-span-5 text-white/50 text-sm leading-relaxed">
                Operating across the UK and Canada, we offer around-the-clock capabilities combined with personalized communication and dedicated project leadership.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
