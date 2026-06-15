import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Salesforce", "Cloud & Data", "AI & Automation", "Support"];

  const solutions = [
    {
      title: "Salesforce Implementation",
      category: "Salesforce",
      description: "Full end-to-end Salesforce implementation tailored to your business processes. We configure, customise, and optimise your Salesforce environment for maximum efficiency.",
      features: [
        "Requirements gathering and discovery",
        "Custom object and field configuration",
        "Workflow and process automation",
        "User setup and permissions management",
      ],
    },
    {
      title: "Cloud Solutions",
      category: "Cloud & Data",
      description: "Scale your business with secure, high-performance cloud infrastructure tailored for modern enterprises.",
      features: [
        "Cloud architecture design",
        "Infrastructure migration",
        "Cloud security & compliance",
        "Ongoing cloud management",
      ],
    },
    {
      title: "AI Automation & Engineering",
      category: "AI & Automation",
      description: "Streamline your operations with intelligent workflow automation. Save time, reduce errors, and let your team focus on what matters.",
      features: [
        "Machine learning pipelines",
        "Document processing & data extraction",
        "Workflow automation",
        "Custom AI integrations",
      ],
    },
    {
      title: "Data Analysis",
      category: "Cloud & Data",
      description: "Transform your data into actionable insights with powerful data engineering and predictive analytics.",
      features: [
        "Predictive analytics & modeling",
        "Business intelligence consulting",
        "Custom data dashboards",
        "Data strategy & governance",
      ],
    },
    {
      title: "Data Migration & Integration",
      category: "Cloud & Data",
      description: "Seamlessly migrate your data and integrate with your existing systems for a unified view of your business.",
      features: [
        "Data cleansing and preparation",
        "Secure platform migration",
        "API integration setup",
        "ETL process implementation",
      ],
    },
    {
      title: "Salesforce Customisation",
      category: "Salesforce",
      description: "Make Salesforce truly yours with custom solutions built for your unique workflows and business requirements.",
      features: [
        "Custom app development",
        "Lightning component creation",
        "Apex code and triggers",
        "Third-party app integration",
      ],
    },
    {
      title: "Training & Support",
      category: "Support",
      description: "Empower your team with comprehensive training and ongoing support to maximise your tech investment.",
      features: [
        "User and admin training",
        "Custom documentation",
        "Ongoing support packages",
        "Best practice guidance",
      ],
    },
    {
      title: "Non-Profit Solutions",
      category: "Salesforce",
      description: "Specialised tech solutions for non-profit organisations, including free licensing guidance and implementation.",
      features: [
        "Power of Us programme assistance",
        "System setup and customisation",
        "Donor and grant management",
        "Volunteer tracking systems",
      ],
    },
    {
      title: "Health Check & Optimisation",
      category: "Salesforce",
      description: "Already using complex tech stacks? We'll review your setup and identify opportunities for improvement and optimisation.",
      features: [
        "Comprehensive system audit",
        "Performance optimisation",
        "Security review",
        "Actionable recommendations",
      ],
    },
    {
      title: "AI-Powered Websites",
      category: "AI & Automation",
      description: "Next-generation websites that work smarter, not harder. Adapt to visitors, personalise content, and convert more leads.",
      features: [
        "Intelligent content personalisation",
        "AI-powered search & recommendations",
        "Automated SEO optimisation",
        "Smart lead capture & qualification",
      ],
    },
    {
      title: "AI Chatbots",
      category: "AI & Automation",
      description: "Engage customers 24/7 with intelligent conversational AI that understands context and handles complex queries.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "CRM & helpdesk integration",
        "Lead qualification & booking",
      ],
    },
    {
      title: "Social Media Automations",
      category: "AI & Automation",
      description: "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and analytics.",
      features: [
        "Scheduled content publishing",
        "Cross-platform management",
        "Automated engagement responses",
        "Performance analytics & reporting",
      ],
    },
  ];

  const filteredSolutions = activeCategory === "All"
    ? solutions
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background selection:bg-rose/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden z-10">
        <LiquidGlassBackground variant="hero" />

        <div className="container relative mx-auto px-4 z-10 text-center pt-24">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <span className="text-xs uppercase tracking-[0.25em] text-rose/90 font-mono mb-4 block">Our Offerings</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">Our <span className="text-rose font-extrabold italic">Solutions</span></h1>
            <p className="text-lg md:text-xl text-white/70 font-medium">
              Enterprise engineering designed to automate, scale, and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 relative z-10 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? "bg-rose text-black font-semibold shadow-lg shadow-rose/10"
                      : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Solutions List (Anti-Card Grid) */}
          <div className="border-b border-white/10 mt-12">
            {filteredSolutions.map((solution, index) => (
              <div
                key={solution.title}
                className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group relative"
              >
                {/* 1. Category Tag */}
                <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                  // {solution.category.toUpperCase()}
                </div>

                {/* 2. Headline & Description */}
                <div className="lg:col-span-5 pr-8 mb-6 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* 3. Features List */}
                <div className="lg:col-span-4 mb-4 lg:mb-0 lg:pt-1">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-4">// Core Inclusions</span>
                  <ul className="grid grid-cols-1 gap-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose/60"></span>
                        <span className="text-xs text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-border bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Upgrade?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can build custom Salesforce, Cloud, or AI solutions for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full glow-button bg-rose text-black hover:bg-white font-bold text-lg px-10 py-7 rounded-full shadow-lg">
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 text-black" />
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
