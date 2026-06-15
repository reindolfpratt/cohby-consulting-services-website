import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutGrid, Cloud, ShieldCheck, Database, Sliders } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Salesforce", "Cloud & Data", "AI & Automation", "Support"];

  const solutions = [
    {
      title: "Salesforce Implementation",
      category: "Salesforce",
      icon: <LayoutGrid className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Full end-to-end Salesforce implementation configured, customised, and optimised for maximum operational efficiency.",
      features: [
        "Requirements discovery",
        "Custom field config",
        "Process automation",
        "Permissions management",
      ],
    },
    {
      title: "Cloud Infrastructure Setup",
      category: "Cloud & Data",
      icon: <Cloud className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Scale your business with secure, high-performance cloud infrastructure tailored for modern enterprises.",
      features: [
        "AWS, Azure & GCP setup",
        "Serverless architecture",
        "Disaster recovery plans",
        "Cost optimization audits",
      ],
    },
    {
      title: "AI Engineering & Pipelines",
      category: "AI & Automation",
      icon: <Sliders className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Streamline your operations with intelligent workflows, machine learning models, and document extraction pipelines.",
      features: [
        "ML pipeline deployment",
        "LLM system integrations",
        "API & webhook config",
        "Automated extraction",
      ],
    },
    {
      title: "Data Analytics & Insights",
      category: "Cloud & Data",
      icon: <Database className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Transform raw complex data into an actionable strategic asset with predictive modeling and powerful BI.",
      features: [
        "Predictive modeling",
        "Custom dashboards (PowerBI)",
        "KPI & metric definition",
        "Data strategy frameworks",
      ],
    },
    {
      title: "Data Migration & Integration",
      category: "Cloud & Data",
      icon: <Database className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Seamlessly migrate your data and integrate with your existing systems for a unified view of your business.",
      features: [
        "Data cleansing & prep",
        "Secure cloud migration",
        "API integration setup",
        "ETL process design",
      ],
    },
    {
      title: "Salesforce Customisation",
      category: "Salesforce",
      icon: <LayoutGrid className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Make Salesforce truly yours with custom Apex triggers, Lightning components, and tailored workflows.",
      features: [
        "Apex code development",
        "Lightning components",
        "Third-party integrations",
        "Custom app creation",
      ],
    },
    {
      title: "Ongoing Training & Support",
      category: "Support",
      icon: <ShieldCheck className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Empower your team with comprehensive training and ongoing support to maximise your tech investment.",
      features: [
        "User & admin training",
        "Custom documentation",
        "Dedicated helpdesk",
        "Best practice audits",
      ],
    },
    {
      title: "Non-Profit Tech Solutions",
      category: "Salesforce",
      icon: <LayoutGrid className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Specialised tech solutions for non-profit organisations, including free licensing guidance and donor portals.",
      features: [
        "Power of Us licensing",
        "NPSP customization",
        "Donor tracking setup",
        "Volunteer management",
      ],
    },
    {
      title: "System Health Checks",
      category: "Salesforce",
      icon: <ShieldCheck className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Already using complex tech stacks? We'll review your setup and identify opportunities for optimization.",
      features: [
        "Comprehensive system audit",
        "Performance tuning",
        "Security & access review",
        "Actionable roadmap",
      ],
    },
    {
      title: "AI-Powered Websites",
      category: "AI & Automation",
      icon: <Cloud className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Next-generation websites that work smarter. Personalize content, automate SEO, and capture leads with AI.",
      features: [
        "Content personalization",
        "AI search & indexing",
        "Automated SEO setups",
        "Smart lead qualification",
      ],
    },
    {
      title: "AI Agent Chatbots",
      category: "AI & Automation",
      icon: <Sliders className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Engage customers 24/7 with intelligent conversational agents that understand context and write leads to CRM.",
      features: [
        "Natural language context",
        "Multi-channel support",
        "Salesforce integration",
        "Appointment booking",
      ],
    },
    {
      title: "Social Media Automations",
      category: "AI & Automation",
      icon: <Sliders className="h-12 w-12 text-rose/40 group-hover:text-rose transition-colors" />,
      description: "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and reporting.",
      features: [
        "Scheduled publishing",
        "Cross-platform loops",
        "Automated replies",
        "Analytics reports",
      ],
    },
  ];

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return solutions.length;
    return solutions.filter((s) => s.category === cat).length;
  };

  const filteredSolutions = activeCategory === "All"
    ? solutions
    : solutions.filter((s) => s.category === activeCategory);

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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden z-10 border-b border-white/10 justify-center">
        <LiquidGlassBackground variant="hero" />

        {/* Giant Frosted Glass Arch Frame behind Hero */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] md:w-[65%] h-[320px] md:h-[420px] rounded-t-[12rem] md:rounded-t-[20rem] border-t border-x border-white/10 bg-white/[0.01] backdrop-blur-[10px] shadow-[inset_0_2px_20px_rgba(255,255,255,0.05)] z-0 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 md:px-8 z-10 pt-36 pb-20 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// PORTFOLIO</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-tight">
              Selected <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">solutions</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
              Enterprise digital engineering designed to automate, scale, and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Grid of Glass Arches */}
      <section className="py-24 relative z-10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Category Filter Pills (Unseen Style) */}
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? "bg-rose text-black font-semibold shadow-lg shadow-rose/10"
                      : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat} <sup className="text-[8px] opacity-60 ml-0.5 font-bold">{getCategoryCount(cat)}</sup>
                </button>
              );
            })}
          </div>

          {/* 2-Column Arched Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto mt-12">
            {filteredSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="liquid-glass-arch p-6 glass-sheen-sweep flex flex-col justify-between group cursor-pointer"
              >
                {/* Curved visual representation */}
                <div className="rounded-t-[6rem] rounded-b-[1.5rem] overflow-hidden aspect-[4/3] bg-ash/50 border border-white/5 relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose/10 via-transparent to-transparent z-10 pointer-events-none"></div>
                  
                  {/* Floating abstract liquid orb inside image frame */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-white/[0.01] to-white/[0.04]">
                    <div className="liquid-distort opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 transform">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Feature labels overlay */}
                  <div className="absolute bottom-4 left-6 z-20 space-y-1 text-[10px] font-mono text-white/30 tracking-widest uppercase">
                    {solution.features.slice(0, 2).map((feat, fidx) => (
                      <div key={fidx}>// {feat}</div>
                    ))}
                  </div>
                </div>

                {/* Text details */}
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black text-white group-hover:text-rose transition-colors uppercase tracking-tight">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                    {solution.description}
                  </p>
                </div>

                {/* Bottom line detailing */}
                <div className="flex justify-between items-end border-t border-white/5 pt-4 mt-auto">
                  <span className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">
                    // {solution.category.toUpperCase()}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:bg-rose group-hover:text-black transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-white/60 group-hover:text-black group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10 bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white relative z-10 uppercase tracking-tighter">
              Ready to Upgrade?
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can build custom Salesforce, Cloud, or AI solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg"
                >
                  Book Consultation →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
