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
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Salesforce Implementation & Customisation",
      description:
        "Tailored Salesforce solutions that fit your unique business needs.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Migration & Integration",
      description:
        "Seamless transfer and connection of your critical data across platforms.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description:
        "Actionable insights to empower data-driven decision-making.",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Ongoing Support & Training",
      description:
        "Continuous guidance to ensure your Salesforce environment evolves with your business.",
    },
  ];

  const differentiators = [
    {
      title: "Hands-On, Practical Expertise",
      description:
        "We're certified Salesforce pros who get our hands dirty with your data and workflows - no jargon, just results.",
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
      description: "Build a customised Salesforce and data strategy.",
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
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(210,100%,12%)] via-primary to-secondary animate-gradient-shift">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40"></div>

        {/* Floating Decorative Shapes */}
        <div className="floating-shape w-96 h-96 bg-accent -top-20 -left-20 animate-float"></div>
        <div className="floating-shape w-80 h-80 bg-secondary top-1/2 -right-20 animate-float-delayed"></div>
        <div className="floating-shape w-64 h-64 bg-primary/50 bottom-20 left-1/4 animate-float-slow"></div>
        <div className="floating-shape w-40 h-40 bg-accent/60 top-1/4 right-1/3 animate-float"></div>

        {/* Rotating Ring Decoration */}
        <div className="absolute top-20 right-10 w-72 h-72 border border-white/10 rounded-full animate-rotate-slow hidden lg:block"></div>
        <div
          className="absolute top-24 right-14 w-64 h-64 border border-white/5 rounded-full animate-rotate-slow hidden lg:block"
          style={{ animationDirection: "reverse", animationDuration: "30s" }}
        ></div>

        <div className="container relative mx-auto px-4 py-24 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white animate-fade-in">
              Salesforce & Data Consulting That Actually{" "}
              <span className="text-shimmer">Moves Your Business Forward</span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-6 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              We Don't Just Implement Salesforce, We Make It Work for You
            </p>

            <p
              className="text-lg mb-10 text-white/75 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              At Cohby Consulting Services, we know that every organisation's
              challenges are unique. That's why we don't do cookie-cutter
              solutions. We dig deep to understand your specific goals and
              design Salesforce and data strategies that solve real problems.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/book-consultation">
                <Button
                  size="lg"
                  className="glow-button bg-white text-primary hover:bg-white font-semibold text-lg px-8 py-6 animate-pulse-glow"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                >
                  Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(210, 20%, 98%)"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <span className="text-sm font-semibold text-accent">
                What We Offer
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Salesforce solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="mb-6 p-4 bg-gradient-to-br from-primary to-accent rounded-2xl w-fit text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <span className="text-sm font-semibold text-primary">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group text-center animate-slide-up p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    {/* Animated Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500"></div>
                    <div className="relative p-5 bg-gradient-to-br from-primary to-accent rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <span className="text-sm font-semibold text-accent">
                Our Process
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground">
              Our proven four-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5">
              <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"></div>
            </div>

            {workProcess.map((step, index) => (
              <div
                key={index}
                className="relative animate-slide-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center relative z-10">
                  {/* Step Number with Glow */}
                  <div className="relative inline-block mb-6">
                    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent/30 to-primary/30 group-hover:from-accent/50 group-hover:to-primary/50 transition-all duration-500">
                      {step.number}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <span className="text-white font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-shift"></div>

        {/* Floating Shapes */}
        <div className="floating-shape w-64 h-64 bg-white/20 -top-10 -left-10 animate-float"></div>
        <div className="floating-shape w-48 h-48 bg-white/10 bottom-0 right-0 animate-float-delayed"></div>
        <div className="floating-shape w-32 h-32 bg-accent/30 top-1/2 left-1/4 animate-float-slow"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 hero-grid-pattern opacity-20"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Ready for Salesforce That Works for You?
            </h2>
            <p
              className="text-xl mb-10 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Let's talk. No pressure, just honest advice.
            </p>
            <Link to="/book-consultation">
              <Button
                size="lg"
                className="glow-button bg-white text-primary hover:bg-white font-semibold text-lg px-10 py-7 animate-pulse-glow shadow-2xl"
              >
                Book a Free 30-Minute Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
