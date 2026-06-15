import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const CloudSolutions = () => {
  const services = [
    {
      title: "Cloud Infrastructure Setup",
      category: "ARCHITECTURE",
      description:
        "Design and deploy scalable, high-performance cloud architectures tailored to your enterprise requirements.",
      features: [
        "AWS, Azure, and Google Cloud Platform (GCP)",
        "Serverless architecture design",
        "High availability and disaster recovery",
        "Cost optimization and auditing",
      ],
    },
    {
      title: "Seamless Cloud Migration",
      category: "MIGRATION",
      description:
        "Migrate your legacy systems to the cloud with zero downtime and complete data integrity.",
      features: [
        "Infrastructure and application migration",
        "Database migration services",
        "Minimal downtime strategies",
        "Post-migration support and tuning",
      ],
    },
    {
      title: "Cloud Security & Compliance",
      category: "SECURITY",
      description:
        "Enterprise-grade security implementations ensuring your data remains protected and compliant with industry standards.",
      features: [
        "Identity and Access Management (IAM)",
        "Data encryption in transit and at rest",
        "Vulnerability assessments",
        "Regulatory compliance (GDPR, HIPAA, SOC2)",
      ],
    },
    {
      title: "Managed Cloud Services",
      category: "OPERATIONS",
      description:
        "24/7 monitoring, maintenance, and optimization of your cloud environments, so your team can focus on building.",
      features: [
        "Proactive monitoring and alerting",
        "Performance optimization",
        "Automated backups and patching",
        "Dedicated cloud support engineers",
      ],
    },
  ];

  const benefits = [
    {
      title: "Infinite Scalability",
      description: "Automatically scale resources up or down based on your business demands.",
    },
    {
      title: "Enhanced Security",
      description: "Leverage state-of-the-art security protocols and compliance frameworks.",
    },
    {
      title: "Cost Efficiency",
      description: "Pay only for what you use and optimize overhead with intelligent resource management.",
    },
    {
      title: "High Availability",
      description: "Ensure your applications are always online with robust disaster recovery plans.",
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
                // COHBY . INFRASTRUCTURE . 2026
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">// ENTERPRISE ARCHITECTURE</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] text-white uppercase mb-8">
                Elevate <br />
                Your <br />
                Cloud <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">systems</span>.
              </h1>
            </div>

            {/* Right Explainer & CTA */}
            <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg text-white/50 leading-relaxed max-w-[32ch]">
                Secure, scalable, and high-performance cloud solutions that drive digital transformation and enterprise agility.
              </p>
              
              <div className="flex flex-col space-y-4 items-start">
                <Link to="/book-consultation">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all">
                    Architect Your Cloud →
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
              Cloud Solutions
            </h2>
          </div>

          {/* Row Stack List */}
          <div className="border-b border-white/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group relative"
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

      {/* The Advantages - Asymmetric Split Grid */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="max-w-5xl mx-auto text-left">
            <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.25em] block mb-8">
              // VALUE GENERATION
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.05] uppercase mb-20">
              The cloud advantage. Scale instantly, secure your data, optimize infrastructure overhead, and guarantee high availability.
            </h2>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
              {benefits.map((benefit, index) => (
                <div key={index} className="group">
                  <span className="text-xs font-mono text-rose/60 block mb-3">// ADVANTAGE 0{index + 1}</span>
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
              Ready to Upgrade?
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Our cloud engineers can architect a solution that guarantees uptime and boosts performance.
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

export default CloudSolutions;
