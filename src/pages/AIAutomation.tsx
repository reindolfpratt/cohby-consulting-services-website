import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const AIAutomation = () => {
  const services = [
    {
      title: "AI Engineering & Integrations",
      description:
        "Custom machine learning pipelines and deep integrations with your existing platforms. We build intelligent systems that scale and adapt to your complex data architecture.",
      features: [
        "Machine learning model deployment",
        "Custom LLM integrations",
        "API & webhook development",
        "Data pipeline engineering",
        "Predictive analytics engines",
      ],
    },
    {
      title: "Intelligent Automations",
      description:
        "Streamline your operations with intelligent workflow automation. We build custom solutions that save time, reduce errors, and let your team focus on high-impact work.",
      features: [
        "Workflow process automation",
        "Document processing & data extraction",
        "Email and task automation",
        "Business process optimisation",
        "RPA (Robotic Process Automation)",
      ],
    },
    {
      title: "Conversational AI Chatbots",
      description:
        "Engage customers 24/7 with advanced conversational AI. Our agents understand context, handle complex queries, and seamlessly hand off to human reps when necessary.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment (Web, WhatsApp, etc.)",
        "CRM & helpdesk integration",
        "Lead qualification & booking",
        "Continuous learning & feedback loops",
      ],
    },
    {
      title: "AI-Powered Platforms",
      description:
        "Next-generation portals and websites that work smarter. Our platforms adapt to users, personalise content, and generate actionable insights automatically.",
      features: [
        "Intelligent content personalisation",
        "AI-powered search & recommendations",
        "Automated SEO optimization",
        "Smart lead capture",
        "Performance self-optimisation",
      ],
    },
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "Automate repetitive tasks and free up hours every week.",
    },
    {
      title: "Scale Effortlessly",
      description: "Handle more workload without adding proportional headcount.",
    },
    {
      title: "Reduce Errors",
      description: "Eliminate human error with consistent, deterministic automation.",
    },
    {
      title: "Stay Competitive",
      description: "Leverage cutting-edge engineering to outpace your industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-hero border-b border-border z-10">
        <div className="absolute inset-0 data-rain-bg opacity-5"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-5"></div>
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '2s' }}></div>

        {/* AI Tech Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-primary/60 flex items-center justify-center animate-particle-drift rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container relative mx-auto px-4 py-32 z-10 pt-40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in shadow-md">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-foreground tracking-widest uppercase">
                AI Automation & Engineering
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-foreground animate-slide-up tracking-tight">
              ENGINEER YOUR <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-primary filter drop-shadow-[0_0_15px_rgba(27,156,217,0.4)]">
                FUTURE
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-12 text-muted-foreground animate-slide-up font-medium"
              style={{ animationDelay: "0.1s" }}
            >
              From intelligent data pipelines to custom automated workflows, we engineer AI systems that drive massive business impact.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-primary text-primary-foreground hover:bg-secondary font-bold text-lg px-10 py-7 shadow-lg rounded-full"
                >
                  Start Building
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
              Engineering Capabilities
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technical solutions tailored for ambitious enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-slide-up overflow-hidden border-border h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-10 relative flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="h-1 w-12 bg-primary rounded-full mb-8 group-hover:w-full transition-all duration-500"></div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                       {service.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-md"></div>
                           <span className="text-muted-foreground">{feature}</span>
                         </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden border-y border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              The Engineering ROI
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-10 rounded-3xl bg-card border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-slide-up h-full flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 data-rain-bg opacity-5 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
           <div className="max-w-4xl mx-auto bg-card p-12 md:p-20 rounded-[3rem] border border-border shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              Ready to Upgrade Your Tech Stack?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's engineer a solution that positions your business for the next decade.
            </p>
            <Link to="/book-consultation" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full glow-button bg-primary text-primary-foreground hover:bg-secondary font-bold text-xl px-12 py-8 rounded-full shadow-lg"
              >
                Schedule an Architecture Review
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
