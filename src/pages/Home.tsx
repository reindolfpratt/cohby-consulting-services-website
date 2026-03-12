import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Users,
  BarChart3,
  HeadphonesIcon,
  CheckCircle2,
  Sparkles,
  Bot,
  Globe,
  MessageSquare,
  Share2,
  Cloud,
  Cpu,
  LineChart
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Salesforce Consulting",
      description:
        "Tailored Salesforce solutions, implementation, and customisation that fit your unique business needs.",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description:
        "Comprehensive cloud architecture, migration, and infrastructure management for modern enterprises.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI Automation & Engineering",
      description:
        "Intelligent AI pipelines, machine learning models, and automated workflows that save time and reduce errors.",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Analysis",
      description:
        "Deep insights through advanced BI, predictive analytics, and transformative data engineering.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Migration & Integration",
      description:
        "Seamless transfer and connection of your critical data across platforms and cloud environments.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
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
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        
        {/* Data Rain Background */}
        <div className="absolute inset-0 data-rain-bg opacity-30"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>

        {/* Floating Decorative Shapes (Cloud Glows) */}
        <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '1.5s' }}></div>

        {/* Tech Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-primary/50 flex items-center justify-center animate-particle-drift rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container relative mx-auto px-4 py-32 z-10 pt-40">
          <div className="max-w-5xl mx-auto text-center">
            
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in sm:gap-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center border-primary/30 shadow-blue-glow mb-4 sm:mb-0">
                <Cloud className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse" />
              </div>
              <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-primary to-transparent hidden sm:block"></div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center border-accent/30 shadow-blue-glow">
                <Database className="w-8 h-8 sm:w-10 sm:h-10 text-accent animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-white animate-slide-up">
              CLOUD-POWERED <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-primary filter drop-shadow-[0_0_20px_rgba(43,158,255,0.4)]">
                SOLUTIONS
              </span>
            </h1>

            <p
              className="text-xl md:text-3xl font-medium mb-12 text-white/90 animate-slide-up tracking-wide"
              style={{ animationDelay: "0.1s" }}
            >
              Unlock your digital transformation today!
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/book-consultation">
                <Button
                  size="lg"
                  className="w-full sm:w-auto glow-button bg-primary text-white hover:bg-primary font-bold text-lg px-10 py-7 shadow-blue-glow rounded-full"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto glass border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50 font-bold text-lg px-10 py-7 transition-all duration-300 rounded-full"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
              Our Expertise
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical solutions engineered to scale and perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card card-hover-glow transition-all duration-500 animate-slide-up overflow-hidden border-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-10 relative h-full flex flex-col">
                  {/* Glowing background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 flex-grow">
                    <div className="mb-8 p-5 glass rounded-2xl w-fit text-primary border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 bg-card/40 relative overflow-hidden border-y border-white/5">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              The Cohby Advantage
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group text-center animate-slide-up p-10 rounded-3xl glass-card card-hover-glow transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                    <div className="relative p-6 glass rounded-full border border-primary/30 group-hover:border-primary shadow-blue-glow transition-all duration-500 group-hover:scale-110">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Our Methodology</h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative mt-16">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-px">
              <div className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            </div>

            {workProcess.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center relative z-10">
                  <div className="relative inline-block mb-8">
                    {/* Number background shadow */}
                    <div className="text-9xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-primary/10 transition-colors duration-500 select-none">
                      {step.number}
                    </div>
                    {/* Glowing dot */}
                    <div className="relative w-20 h-20 rounded-full glass border border-primary/30 flex items-center justify-center shadow-blue-glow group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                      <span className="text-primary font-bold text-2xl">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors mt-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 data-rain-bg opacity-10 pointer-events-none"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none animate-pulse"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border-primary/20 relative overflow-hidden shadow-blue-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white relative z-10">
              Ready to Upgrade?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/80 relative z-10 max-w-2xl mx-auto">
              Let's talk about transforming your business. No pressure, just strategic advice.
            </p>
            <Link to="/book-consultation" className="relative z-10 inline-block">
              <Button
                size="lg"
                className="glow-button bg-primary text-white hover:bg-primary font-bold text-xl px-12 py-8 rounded-full shadow-blue-glow w-full sm:w-auto"
              >
                Book Your Strategy Call
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
