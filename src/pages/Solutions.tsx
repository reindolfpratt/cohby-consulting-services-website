import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  LayoutGrid,
  Cloud,
  ShieldCheck,
  Database,
  Sliders,
  Code2,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, TechWordReveal } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { EASE_OUT } from "@/lib/motionTokens";

import liquidGlassBespokeSoftware from "@/assets/liquid-glass-bespoke-software.jpg";
import liquidGlassSalesforceCrm from "@/assets/liquid-glass-salesforce-crm.jpg";
import liquidGlassCloud from "@/assets/liquid-glass-cloud.jpg";
import liquidGlassDataAnalytics from "@/assets/liquid-glass-data-analytics.jpg";
import liquidGlassAiPedestals from "@/assets/liquid-glass-ai-pedestals.jpg";
import consultingTeamCollaboration from "@/assets/consulting-team-collaboration.jpg";
import aiNeuralComputation from "@/assets/ai-neural-computation.jpg";
import enterpriseCloudNetwork from "@/assets/enterprise-cloud-network.jpg";
import smartInfrastructureGrid from "@/assets/smart-infrastructure-grid.jpg";

interface SolutionItem {
  title: string;
  category: "Bespoke Software" | "Salesforce" | "Cloud & Data" | "AI & Automation" | "Support";
  index: string;
  image: string;
  icon: JSX.Element;
  description: string;
  features: string[];
}

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Bespoke Software",
    "Salesforce",
    "Cloud & Data",
    "AI & Automation",
    "Support",
  ];

  const solutions: SolutionItem[] = [
    {
      title: "Bespoke Enterprise Web & Cloud Platforms",
      category: "Bespoke Software",
      index: "001",
      image: liquidGlassBespokeSoftware,
      icon: <Code2 className="h-10 w-10" />,
      description:
        "Full-stack custom web applications and SaaS platforms engineered from ground zero. Modular, scalable, and free from rigid off-the-shelf constraints.",
      features: [
        "React / Next.js / TypeScript",
        "Microservices Architecture",
        "Role-Based Multi-Tenancy",
        "Sub-100ms Latency Performance",
      ],
    },
    {
      title: "High-Throughput API & Microservices",
      category: "Bespoke Software",
      index: "002",
      image: enterpriseCloudNetwork,
      icon: <Terminal className="h-10 w-10" />,
      description:
        "Robust REST & GraphQL APIs, distributed event-driven message buses, and custom integrations connecting your systems with external services.",
      features: [
        "Event-driven architecture",
        "Webhook management",
        "High-load rate limiting",
        "Enterprise OAuth & SSO",
      ],
    },
    {
      title: "Custom Internal Operations Dashboards",
      category: "Bespoke Software",
      index: "003",
      image: smartInfrastructureGrid,
      icon: <LayoutGrid className="h-10 w-10" />,
      description:
        "Eliminate operational bottlenecks with bespoke administrative command centers built specifically around your company's workflows.",
      features: [
        "Custom telemetry UI",
        "Real-time WebSocket sync",
        "Automated executive reports",
        "Compliance & audit logging",
      ],
    },
    {
      title: "Salesforce Implementation",
      category: "Salesforce",
      index: "004",
      image: liquidGlassSalesforceCrm,
      icon: <LayoutGrid className="h-10 w-10" />,
      description:
        "Full end-to-end Salesforce implementation configured, customised, and optimised for maximum operational efficiency.",
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
      index: "005",
      image: liquidGlassCloud,
      icon: <Cloud className="h-10 w-10" />,
      description:
        "Scale your business with secure, high-performance cloud infrastructure tailored for modern enterprises.",
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
      index: "006",
      image: aiNeuralComputation,
      icon: <Sliders className="h-10 w-10" />,
      description:
        "Streamline your operations with intelligent workflows, machine learning models, and document extraction pipelines.",
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
      index: "007",
      image: liquidGlassDataAnalytics,
      icon: <Database className="h-10 w-10" />,
      description:
        "Transform raw complex data into an actionable strategic asset with predictive modeling and powerful BI.",
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
      index: "008",
      image: enterpriseCloudNetwork,
      icon: <Database className="h-10 w-10" />,
      description:
        "Seamlessly migrate your data and integrate with your existing systems for a unified view of your business.",
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
      index: "009",
      image: liquidGlassSalesforceCrm,
      icon: <LayoutGrid className="h-10 w-10" />,
      description:
        "Make Salesforce truly yours with custom Apex triggers, Lightning components, and tailored workflows.",
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
      index: "010",
      image: consultingTeamCollaboration,
      icon: <ShieldCheck className="h-10 w-10" />,
      description:
        "Empower your team with comprehensive training and ongoing support to maximise your tech investment.",
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
      index: "011",
      image: liquidGlassSalesforceCrm,
      icon: <LayoutGrid className="h-10 w-10" />,
      description:
        "Specialised tech solutions for non-profit organisations, including free licensing guidance and donor portals.",
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
      index: "012",
      image: smartInfrastructureGrid,
      icon: <ShieldCheck className="h-10 w-10" />,
      description:
        "Already using complex tech stacks? We'll review your setup and identify opportunities for optimization.",
      features: [
        "Comprehensive system audit",
        "Performance tuning",
        "Security & access review",
        "Actionable roadmap",
      ],
    },
    {
      title: "AI-Powered Platforms",
      category: "AI & Automation",
      index: "013",
      image: liquidGlassAiPedestals,
      icon: <Cloud className="h-10 w-10" />,
      description:
        "Next-generation websites that work smarter. Personalize content, automate SEO, and capture leads with AI.",
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
      index: "014",
      image: aiNeuralComputation,
      icon: <Sliders className="h-10 w-10" />,
      description:
        "Engage customers 24/7 with intelligent conversational agents that understand context and write leads to CRM.",
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
      index: "015",
      image: enterpriseCloudNetwork,
      icon: <Sliders className="h-10 w-10" />,
      description:
        "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and reporting.",
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

  const filteredSolutions =
    activeCategory === "All"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">
      {/* ── Hero - Dark Section ── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        {/* 4-col grid lines */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border-r border-white/[0.02] h-full" />
          <div className="border-r border-white/[0.02] h-full" />
          <div className="border-r border-white/[0.02] h-full" />
          <div className="h-full" />
        </div>

        <div className="container relative mx-auto px-4 md:px-8 z-10 pb-24 pt-36 max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose font-mono mb-6 block">
              // PORTFOLIO & CAPABILITIES
            </span>
            <TechWordReveal
              text="Selected Solutions & Bespoke Engineering"
              highlightWord="Bespoke"
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-white uppercase tracking-tight leading-[0.95]"
            />
            <p className="text-base text-white/50 leading-relaxed max-w-xl">
              Enterprise digital engineering, bespoke software development, and cloud architectures designed to automate, scale, and transform.
            </p>
          </div>
        </div>
      </section>

      {/* ── Gallery - Light Clay Section ── */}
      <section className="bg-studio-light relative">
        {/* 3D Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        {/* Filter Bar */}
        <div className="sticky top-0 z-40 bg-studio-light/95 border-b border-black/[0.08] backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-wrap items-center gap-2 py-5">
              <span className="studio-label mr-4 hidden md:block">Filter -</span>
              {categories.map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      active ? "studio-filter-active shadow-md" : "studio-filter-inactive"
                    }`}
                  >
                    {cat}
                    <sup className="ml-1 opacity-70 text-[8px] font-bold">
                      {getCategoryCount(cat)}
                    </sup>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Project Count */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl pt-12 pb-4">
          <div className="flex items-baseline justify-between border-b border-black/[0.08] pb-6">
            <h2 className="studio-heading text-4xl md:text-5xl">
              {activeCategory === "All" ? "All Work" : activeCategory}
            </h2>
            <span className="studio-label">
              {String(filteredSolutions.length).padStart(2, "0")} projects available
            </span>
          </div>
        </div>

        {/* Project Cards Grid - Animated with AnimatePresence to ensure no empty sections */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl py-8 pb-28 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            >
              {filteredSolutions.map((solution) => (
                <div
                  key={solution.title}
                  className="studio-card group cursor-pointer border border-black/[0.08] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-1"
                >
                  {/* Solution Image Banner */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#070912]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Subtle glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-[11px] font-mono text-rose uppercase tracking-wider font-semibold mb-2">
                          // {solution.category}
                        </div>
                        <h3 className="text-xl font-black text-[#121214] tracking-tight uppercase leading-snug mb-3 group-hover:text-rose transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-sm text-black/55 leading-relaxed mb-5 font-sans">
                          {solution.description}
                        </p>
                        {/* Deliverables tags */}
                        <div className="flex flex-wrap gap-2">
                          {solution.features.map((f) => (
                            <span
                              key={f}
                              className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border border-black/[0.1] text-black/60 bg-black/[0.02]"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 w-10 h-10 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-black/30 group-hover:bg-[#121214] group-hover:text-white transition-all duration-300 mt-1">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Block inside light section */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl pb-32">
          <Reveal className="studio-cta-block p-14 md:p-20 text-center relative overflow-hidden">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 block mb-6">
              // Next Step
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]">
              Ready to build <br />
              <span className="italic font-serif lowercase tracking-normal text-rose">
                your bespoke system?
              </span>
            </h2>
            <p className="text-base text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
              Let's build custom Bespoke Software, Salesforce, Cloud, or AI solutions tailored for your scale.
            </p>
            <Magnetic>
              <Link
                to="/book-consultation"
                className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose transition-colors duration-300 font-semibold press"
              >
                Book Consultation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
