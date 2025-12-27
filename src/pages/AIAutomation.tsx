import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  Globe,
  MessageSquare,
  Share2,
  Zap,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const AIAutomation = () => {
  const services = [
    {
      icon: <Zap className="h-10 w-10" />,
      title: "AI & General Automations",
      description:
        "Streamline your operations with intelligent workflow automation. We build custom automation solutions that save time, reduce errors, and let your team focus on what matters most.",
      features: [
        "Workflow process automation",
        "Document processing & data extraction",
        "Email and task automation",
        "Custom integration development",
        "Business process optimisation",
      ],
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "AI-Powered Websites",
      description:
        "Next-generation websites that work smarter, not harder. Our AI-enhanced websites adapt to your visitors, personalise content, and convert more leads while you sleep.",
      features: [
        "Intelligent content personalisation",
        "AI-powered search & recommendations",
        "Automated SEO optimisation",
        "Smart lead capture & qualification",
        "Performance self-optimisation",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "AI Chatbots",
      description:
        "Engage customers 24/7 with intelligent conversational AI. Our chatbots understand context, handle complex queries, and seamlessly hand off to humans when needed.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "CRM & helpdesk integration",
        "Lead qualification & booking",
        "Continuous learning & improvement",
      ],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Social Media Automations",
      description:
        "Maintain a powerful social presence without the manual grind. Automated posting, engagement tracking, and analytics that help you grow your audience effortlessly.",
      features: [
        "Scheduled content publishing",
        "Cross-platform management",
        "Automated engagement responses",
        "Performance analytics & reporting",
        "Content calendar management",
      ],
      gradient: "from-orange-500 to-rose-600",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "Automate repetitive tasks and free up hours every week.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scale Effortlessly",
      description: "Handle more customers without adding more staff.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reduce Errors",
      description: "Eliminate human error with consistent automation.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Stay Competitive",
      description: "Leverage cutting-edge AI to outpace competitors.",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[hsl(210,100%,12%)] via-primary to-secondary animate-gradient-shift">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 hero-grid-pattern opacity-40"></div>

        {/* Floating Decorative Shapes */}
        <div className="floating-shape w-96 h-96 bg-purple-500/30 -top-20 -left-20 animate-float"></div>
        <div className="floating-shape w-80 h-80 bg-cyan-500/30 top-1/2 -right-20 animate-float-delayed"></div>
        <div className="floating-shape w-64 h-64 bg-emerald-500/20 bottom-20 left-1/4 animate-float-slow"></div>

        {/* AI-themed decoration */}
        <div className="absolute top-20 right-10 hidden lg:block">
          <Bot className="w-32 h-32 text-white/10 animate-float-slow" />
        </div>

        <div className="container relative mx-auto px-4 py-24 md:py-32 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <Bot className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">
                AI & Automation Services
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white animate-fade-in">
              Supercharge Your Business with{" "}
              <span className="text-shimmer">AI & Automation</span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-6 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Work Smarter, Not Harder
            </p>

            <p
              className="text-lg mb-10 text-white/75 max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              From intelligent chatbots to automated workflows, we help
              businesses leverage the power of AI to save time, reduce costs,
              and deliver exceptional customer experiences.
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
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                >
                  Talk to an Expert
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
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <span className="text-sm font-semibold text-accent">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              AI Solutions That Deliver Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical AI and automation solutions designed for real business impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div
                      className={`mb-6 p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
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
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Automate with AI?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your operations and stay ahead of the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent animate-gradient-shift"></div>

        <div className="floating-shape w-64 h-64 bg-white/20 -top-10 -left-10 animate-float"></div>
        <div className="floating-shape w-48 h-48 bg-white/10 bottom-0 right-0 animate-float-delayed"></div>

        <div className="absolute inset-0 hero-grid-pattern opacity-20"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white animate-fade-in">
              Ready to Embrace the Future?
            </h2>
            <p
              className="text-xl mb-10 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Let's discuss how AI and automation can transform your business.
              No jargon, just practical solutions.
            </p>
            <Link to="/book-consultation">
              <Button
                size="lg"
                className="glow-button bg-white text-primary hover:bg-white font-semibold text-lg px-10 py-7 animate-pulse-glow shadow-2xl"
              >
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomation;
