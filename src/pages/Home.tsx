import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight
} from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Home = () => {
  const services = [
    {
      title: "Salesforce Consulting",
      description:
        "Tailored Salesforce solutions, implementation, and customisation that fit your unique business needs.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Comprehensive cloud architecture, migration, and infrastructure management for modern enterprises.",
    },
    {
      title: "AI Automation & Engineering",
      description:
        "Intelligent AI pipelines, machine learning models, and automated workflows that save time and reduce errors.",
    },
    {
      title: "Data Analysis",
      description:
        "Deep insights through advanced BI, predictive analytics, and transformative data engineering.",
    },
    {
      title: "Data Migration & Integration",
      description:
        "Seamless transfer and connection of your critical data across platforms and cloud environments.",
    },
    {
      title: "Ongoing Support & Training",
      description:
        "Continuous guidance to ensure your tech stack and team evolve with your business.",
    },
  ];

  const differentiators = [
    {
      title: "Hands-On, Practical Expertise",
      description:
        "We're certified pros who get our hands dirty with your data and workflows - no jargon, just results.",
    },
    {
      title: "Tailored Solutions, Not Templates",
      description:
        "Your business isn't one-size-fits-all, and neither are our solutions. We customise everything to fit your way of working.",
    },
    {
      title: "Transparent, Collaborative Partnership",
      description:
        "We work with you every step of the way, keeping you in control and informed.",
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
      description: "Build a customised strategy architecture.",
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
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden z-10">
        <LiquidGlassBackground variant="hero" />

        <div className="container relative mx-auto px-4 z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            <span className="block text-xs uppercase tracking-[0.25em] text-rose/90 font-mono mb-6 animate-slide-up" style={{ animationDelay: "0.04s" }}>
              Elite Digital Engineering
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-white animate-slide-up" style={{ animationDelay: "0.08s" }}>
              Smart Solutions.
              <br />
              Real <span className="text-rose font-extrabold italic">Results</span>.
            </h1>

            <p
              className="text-lg md:text-xl font-medium mb-12 text-white/70 tracking-wide max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.12s" }}
            >
              Salesforce, Cloud, and AI systems engineered for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.16s" }}>
              <Link to="/book-consultation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto glow-button bg-rose text-black hover:bg-white font-bold text-lg px-10 py-7 shadow-lg rounded-full"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 text-black" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/10 text-white hover:bg-white/5 hover:border-white/20 font-bold text-lg px-10 py-7 transition-all duration-300 rounded-full bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Floating glass capability chips */}
            <div
              className="animate-slide-up flex flex-wrap justify-center gap-3"
              style={{ animationDelay: "0.2s" }}
            >
              {["Salesforce Consulting", "AI Automation", "Data Analysis", "Cloud Solutions", "Nonprofits"].map(
                (tag) => (
                  <div key={tag} className="liquid-glass-tag px-5 py-2 rounded-full text-xs text-white/60 font-medium flex items-center border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose/85 mr-2"></span>
                    {tag}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20 text-left md:max-w-2xl animate-slide-up">
            <span className="text-xs uppercase tracking-[0.25em] text-rose/80 font-mono mb-4 block">Expertise Areas</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Our Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Technical excellence and platform execution built for modern speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-card hover:border-rose/30 transition-all duration-500 animate-slide-up overflow-hidden border-border"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-10 relative h-full flex flex-col">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 flex-grow">
                    <div className="text-rose font-mono text-sm mb-8 block transition-transform group-hover:translate-x-1 duration-300">
                      // {service.title.toUpperCase()}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Asymmetric Split Screen layout to prevent repetition */}
      <section className="py-32 bg-ash relative overflow-hidden border-y border-border">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Editorial Thesis */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.25em] text-rose/80 font-mono mb-4 block">The Cohby Thesis</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                We reject templated systems.
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Your business is unique. We build tailored digital architecture that integrates with your workflow, rather than forcing you into rigid templates.
              </p>
            </div>

            {/* Right Column: Structured List with hairline dividers */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              {differentiators.map((item, index) => (
                <div key={index} className="border-t border-white/10 pt-8 first:border-0 first:pt-0 group">
                  <span className="text-xs font-mono text-rose/60 block mb-3">// FEATURE 0{index + 1}</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose transition-colors">{item.title}</h3>
                  <p className="text-white/65 text-base leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* How We Work - Minimalist spacing and clear design flow */}
      <section className="py-32 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="mb-20 text-left md:max-w-2xl animate-slide-up">
            <span className="text-xs uppercase tracking-[0.25em] text-rose/80 font-mono mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Our Methodology</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
            {workProcess.map((step, index) => (
              <div
                key={index}
                className="relative group border-l border-white/10 pl-6 py-4 transition-all duration-300 hover:border-rose/50"
              >
                <span className="text-4xl font-mono font-black text-white/10 group-hover:text-rose/30 transition-colors block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-rose transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Consistently uses unique intent labels */}
      <section className="relative py-32 overflow-hidden border-t border-border">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10">
              Ready to Upgrade?
            </h2>
            <p className="text-lg md:text-xl mb-12 text-white/70 relative z-10 max-w-2xl mx-auto">
              Let's discuss how we can build custom Salesforce, Cloud, or AI solutions for your organization.
            </p>
            <Link to="/book-consultation" className="relative z-10 inline-block">
              <Button
                size="lg"
                className="glow-button bg-rose text-black hover:bg-white font-bold text-lg px-12 py-8 rounded-full shadow-lg w-full sm:w-auto"
              >
                Book Consultation
                <ArrowRight className="ml-3 h-5 w-5 text-black" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
