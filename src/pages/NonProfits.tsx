import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Users, TrendingUp, ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const NonProfits = () => {
  const benefits = [
    {
      icon: <Gift className="h-5 w-5 text-rose" />,
      title: "Free Salesforce Licenses",
      description: "Access up to 10 free Salesforce licenses through the Power of Us Programme.",
      link: "/non-profits/free-salesforce",
      category: "LICENSING"
    },
    {
      icon: <Users className="h-5 w-5 text-rose" />,
      title: "Nonprofit Success Pack",
      description: "Purpose-built tools for donor management, fundraising, and program delivery.",
      link: "/non-profits/npsp-basics",
      category: "NPSP BASICS"
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-rose" />,
      title: "Overcome Common Challenges",
      description: "Solutions for data fragmentation, fundraising tracking, and impact reporting.",
      link: "/non-profits/challenges",
      category: "STRATEGY"
    },
  ];

  const points = [
    { title: "Unified Donor Management", desc: "Keep all donor information, interactions, and giving history in one place." },
    { title: "Powerful Fundraising Tools", desc: "Track campaigns, pledges, and donations with purpose-built features." },
    { title: "Program Management", desc: "Measure program outcomes and demonstrate impact to stakeholders." },
    { title: "Volunteer Coordination", desc: "Manage volunteer recruitment, scheduling, and engagement efficiently." },
    { title: "Grant Tracking", desc: "Monitor grant applications, requirements, and reporting deadlines." },
    { title: "Cost-Effective Implementation", desc: "Free or heavily discounted licensing through Salesforce.org programs." },
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
                // IMPACT . NON-PROFIT . 2026
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">// SOCIAL IMPACT TECHNOLOGY</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-white uppercase mb-8">
                Tech for <br />
                Your <br />
                Mission <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">outcomes</span>.
              </h1>
            </div>

            {/* Right Explainer & CTA */}
            <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-white/50 leading-relaxed max-w-[32ch]">
                Maximize your impact with powerful, affordable Salesforce solutions designed specifically for non-profit organizations.
              </p>
              
              <div className="flex flex-col space-y-4 items-start">
                <Link to="/book-consultation">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all">
                    Book Consultation →
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solutions Showcase - Row List Style */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-24 text-left max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// STRATEGY</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-6">
              Technology That Amplifies Your Mission
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-2xl">
              Running a non-profit is challenging enough without worrying about complex, expensive technology. 
              We specialize in helping non-profits leverage Salesforce's powerful tools at little to no license cost, 
              so you can focus entirely on making a difference.
            </p>
          </div>

          {/* Row Stack List */}
          <div className="border-b border-white/10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group relative"
              >
                {/* 1. Category Tag */}
                <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                  // {benefit.category}
                </div>

                {/* 2. Headline & Description */}
                <div className="lg:col-span-8 pr-8 mb-6 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  <Link to={benefit.link} className="inline-flex items-center text-xs font-mono uppercase tracking-[0.15em] text-rose/80 hover:text-white transition-colors">
                    Learn More →
                  </Link>
                </div>

                {/* 3. Arrow Link */}
                <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                  <Link to={benefit.link}>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                      <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-rose" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Salesforce - Asymmetric Split Grid */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left">
            <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.25em] block mb-8">
              // SOLUTION ADAPTABILITY
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] uppercase mb-20">
              Why Salesforce? Build donor trust, volunteer engagement, and grant transparency through cloud systems.
            </h2>
            
            {/* Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10">
              {points.map((item, index) => (
                <div key={index} className="group">
                  <span className="text-xs font-mono text-rose/60 block mb-3">// CAPABILITY 0{index + 1}</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
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
              Ready to Upgrade?
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how Salesforce can help you achieve more with less.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg"
                >
                  Book Free Consultation →
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonProfits;
