import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  Variants,
} from "motion/react";
import { Reveal, RevealGroup, RevealItem, WordsReveal, TechWordReveal } from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import { EASE_OUT } from "@/lib/motionTokens";
import liquidGlassAiPedestals from "@/assets/liquid-glass-ai-pedestals.jpg";
import liquidGlassBespokeSoftware from "@/assets/liquid-glass-bespoke-software.jpg";
import consultingTeamCollaboration from "@/assets/consulting-team-collaboration.jpg";
import PlatformsMarquee from "@/components/PlatformsMarquee";

/* ── Hero entrance choreography ── */
const heroStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

const Home = () => {
  const reduce = useReducedMotion();

  const services = [
    {
      title: "Bespoke Software Engineering",
      category: "Software",
      href: "/solutions",
      description:
        "Custom enterprise web platforms, high-throughput microservices, and internal operations tools built from ground zero.",
    },
    {
      title: "Salesforce Consulting",
      category: "Salesforce",
      href: "/solutions",
      description:
        "Tailored Salesforce solutions, implementation, and customisation that fit your unique business needs.",
    },
    {
      title: "Cloud Solutions",
      category: "Cloud",
      href: "/cloud-solutions",
      description:
        "Comprehensive cloud architecture, migration, and infrastructure management for modern enterprises.",
    },
    {
      title: "AI Automation & Engineering",
      category: "Intelligence",
      href: "/ai-automation",
      description:
        "Intelligent AI pipelines, machine learning models, and automated workflows that save time and reduce errors.",
    },
    {
      title: "Data Analysis",
      category: "Data",
      href: "/data-analysis",
      description:
        "Deep insights through advanced BI, predictive analytics, and transformative data engineering.",
    },
    {
      title: "Data Migration & Integration",
      category: "Integrations",
      href: "/solutions",
      description:
        "Seamless transfer and connection of your critical data across platforms and cloud environments.",
    },
    {
      title: "Ongoing Support & Training",
      category: "Support",
      href: "/solutions",
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

  /* ── Hero scroll parallax ── */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const archY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">

      {/* ── Hero Section - Dark ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 border-b border-white/[0.06] grid-blueprint"
      >
        {/* 4-Column Blueprint Vertical Grid Lines Overlay */}
        <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="border-r border-white/[0.03] h-full"></div>
          <div className="h-full"></div>
        </div>

        <motion.div
          className="container relative mx-auto px-4 md:px-8 z-10 pt-36 pb-28 max-w-7xl text-center flex flex-col items-center justify-center"
          style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <motion.div
            className="max-w-5xl mx-auto flex flex-col items-center"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={heroItem}
              className="text-[10px] uppercase tracking-[0.3em] text-rose font-mono mb-8 block px-3 py-1 rounded-full border border-rose/20 bg-rose/[0.02] backdrop-blur-md"
            >
              // Cloud & Digital Systems
            </motion.span>

            <motion.div variants={heroItem} className="mb-10 max-w-4xl">
              <TechWordReveal
                text="Custom Systems. Real results."
                highlightWord="results"
                className="text-5xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.88] text-white uppercase select-none"
              />
            </motion.div>

            <motion.p
              variants={heroItem}
              className="text-base md:text-xl text-white/70 leading-relaxed max-w-lg mb-12 font-sans"
            >
              Salesforce and other CRMs, Cloud, and custom systems built to integrate seamlessly with your workflow.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-2"
            >
              <Magnetic>
                <Link to="/book-consultation">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg cursor-pointer">
                    Book Consultation &rarr;
                  </Button>
                </Link>
              </Magnetic>
              <Link
                to="/solutions"
                className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 hover:text-rose transition-colors py-4 px-6 cursor-pointer press"
              >
                Explore Services &rarr;
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Vertical Info Bar */}
        <div className="absolute right-6 bottom-12 hidden xl:block z-20">
          <motion.span
            className="text-[9px] font-mono text-white/30 uppercase tracking-[0.3em] block origin-right rotate-90 translate-y-12"
            animate={reduce ? undefined : { y: [48, 56, 48] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            SCROLL TO EXPLORE &darr;
          </motion.span>
        </div>
      </section>

      {/* ── Dynamic 3D Moving Platforms Marquee ── */}
      <PlatformsMarquee />

      {/* ── Services Showcase - Dark ── */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          <Reveal className="mb-24 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">
              // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Our Capabilities
            </h2>
          </Reveal>

          <div className="relative">
            <RevealGroup className="border-b border-white/10">
              {services.map((service) => (
                <RevealItem key={service.title}>
                  <Link
                    to={service.href}
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
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* ── AI Intelligence Showcase ── */}
          <Reveal className="mt-20">
            <div className="glass-frame-4k p-6 md:p-10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#070913] group shadow-2xl">
                    <img
                      src={liquidGlassAiPedestals}
                      alt="Cohby Consulting Services AI Workflow Architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-5 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono block">
                    // ARTIFICIAL INTELLIGENCE & AUTOMATION
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight">
                    Practical AI & Intelligent Workflow Automation
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-sans">
                    We build automated systems that do real work: intelligent document processing, customer support agents, and automated data pipelines that connect directly to your CRM and cloud databases.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/ai-automation"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors group"
                    >
                      <span>Explore AI Engineering</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Bespoke Software Engineering Feature ── */}
          <Reveal className="mt-12">
            <div className="glass-frame-4k p-6 md:p-10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-[#070913] group shadow-2xl">
                    <img
                      src={liquidGlassBespokeSoftware}
                      alt="Cohby Consulting Services Custom Systems Architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                <div className="lg:col-span-5 lg:order-1 space-y-5 text-left">
                  <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono block">
                    // BESPOKE SOFTWARE ENGINEERING
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight tracking-tight">
                    Tailored Software & Custom Systems
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-sans">
                    When off-the-shelf software limits how your team operates, we design and build custom web platforms, client portals, and internal tools tailored to your exact business processes.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors group"
                    >
                      <span>Explore Bespoke Solutions</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Studio Gallery Transition ── */}
      {/* Gradient fade from dark to light clay */}
      <div className="h-48 w-full pointer-events-none" style={{background: "linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)"}} />

      {/* ── Why Us Section - Light Clay ── */}
      <section className="bg-studio-light relative pt-4 pb-28 overflow-hidden">

        {/* Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Section Header */}
          <Reveal y={16} className="pt-4 pb-16 border-b studio-rule">
            <div className="flex items-baseline justify-between">
              <span className="studio-label">// Why Cohby Consulting Services</span>
              <span className="studio-label">03 pillars</span>
            </div>
          </Reveal>

          {/* Big Statement */}
          <div className="py-20 border-b studio-rule">
            <h2 className="studio-heading text-4xl md:text-6xl lg:text-7xl max-w-4xl leading-[0.95]">
              <WordsReveal text="We build systems that fit how your team actually works - without bloated agency layers, hidden handoffs, or unnecessary complexity." />
            </h2>
          </div>

          {/* ── Consulting Team Collaboration Showcase ── */}
          <Reveal className="my-16">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-[#faf8f5] relative group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden relative">
                  <img
                    src={consultingTeamCollaboration}
                    alt="Cohby Consulting Services certified engineering team collaborating on client architecture"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                      // UK & Canada Delivery
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 md:p-12 space-y-5">
                  <span className="studio-label block">// Direct Collaboration</span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#121214] uppercase leading-tight tracking-tight">
                    Work Directly with Senior Engineers
                  </h3>
                  <p className="text-sm text-black/65 leading-relaxed font-sans">
                    You won't get bounced between account managers. You collaborate directly with senior cloud architects and Salesforce specialists who write the code, configure your environments, and deliver on time.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="border-l-2 border-black/80 pl-3">
                      <span className="text-xs font-mono font-bold text-black block">UK & Canada</span>
                      <span className="text-[11px] text-black/50">Cross-border teams</span>
                    </div>
                    <div className="border-l-2 border-rose pl-3">
                      <span className="text-xs font-mono font-bold text-black block">Tailored Architecture</span>
                      <span className="text-[11px] text-black/50">Built around your workflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Differentiators Grid */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-2">
            {differentiators.map((item, index) => (
              <RevealItem
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
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Methodology Section - Light Clay ── */}
      <section className="bg-studio-light relative pb-28 overflow-hidden">

        {/* Side Arch Pillars */}
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          {/* Section Header */}
          <Reveal y={16} className="pb-12 border-b studio-rule">
            <div className="flex items-baseline justify-between">
              <h2 className="studio-heading text-4xl md:text-5xl">Our Methodology</h2>
              <span className="studio-label">Process</span>
            </div>
          </Reveal>

          {/* Process Steps */}
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x" delay={0.1}>
            {workProcess.map((step, index) => (
              <RevealItem
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
              </RevealItem>
            ))}
          </RevealGroup>

          {/* CTA Block */}
          <Reveal>
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
              <Magnetic>
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center gap-3 bg-white text-black font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-rose transition-colors duration-300 font-semibold press"
                >
                  Book Consultation <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
