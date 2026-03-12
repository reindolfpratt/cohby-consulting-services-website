import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Settings,
  Database,
  BarChart3,
  GraduationCap,
  Cloud,
  Workflow,
  FileSpreadsheet,
  Users,
  Bot,
  Globe,
  MessageSquare,
  Share2,
  Cpu,
  LineChart
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Settings className="h-10 w-10 text-primary" />,
      title: "Salesforce Implementation",
      description: "Full end-to-end Salesforce implementation tailored to your business processes. We configure, customise, and optimise your Salesforce environment for maximum efficiency.",
      features: [
        "Requirements gathering and discovery",
        "Custom object and field configuration",
        "Workflow and process automation",
        "User setup and permissions management",
      ],
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Solutions",
      description: "Scale your business with secure, high-performance cloud infrastructure tailored for modern enterprises.",
      features: [
        "Cloud architecture design",
        "Infrastructure migration",
        "Cloud security & compliance",
        "Ongoing cloud management",
      ],
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI Automation & Engineering",
      description: "Streamline your operations with intelligent workflow automation. Save time, reduce errors, and let your team focus on what matters.",
      features: [
        "Machine learning pipelines",
        "Document processing & data extraction",
        "Workflow automation",
        "Custom AI integrations",
      ],
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Data Analysis",
      description: "Transform your data into actionable insights with powerful data engineering and predictive analytics.",
      features: [
        "Predictive analytics & modeling",
        "Business intelligence consulting",
        "Custom data dashboards",
        "Data strategy & governance",
      ],
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Migration & Integration",
      description: "Seamlessly migrate your data and integrate with your existing systems for a unified view of your business.",
      features: [
        "Data cleansing and preparation",
        "Secure platform migration",
        "API integration setup",
        "ETL process implementation",
      ],
    },
    {
      icon: <Workflow className="h-10 w-10 text-primary" />,
      title: "Salesforce Customisation",
      description: "Make Salesforce truly yours with custom solutions built for your unique workflows and business requirements.",
      features: [
        "Custom app development",
        "Lightning component creation",
        "Apex code and triggers",
        "Third-party app integration",
      ],
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Training & Support",
      description: "Empower your team with comprehensive training and ongoing support to maximise your tech investment.",
      features: [
        "User and admin training",
        "Custom documentation",
        "Ongoing support packages",
        "Best practice guidance",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Non-Profit Solutions",
      description: "Specialised tech solutions for non-profit organisations, including free licensing guidance and implementation.",
      features: [
        "Power of Us programme assistance",
        "System setup and customisation",
        "Donor and grant management",
        "Volunteer tracking systems",
      ],
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-primary" />,
      title: "Health Check & Optimisation",
      description: "Already using complex tech stacks? We'll review your setup and identify opportunities for improvement and optimisation.",
      features: [
        "Comprehensive system audit",
        "Performance optimisation",
        "Security review",
        "Actionable recommendations",
      ],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "AI-Powered Websites",
      description: "Next-generation websites that work smarter, not harder. Adapt to visitors, personalise content, and convert more leads.",
      features: [
        "Intelligent content personalisation",
        "AI-powered search & recommendations",
        "Automated SEO optimisation",
        "Smart lead capture & qualification",
      ],
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "AI Chatbots",
      description: "Engage customers 24/7 with intelligent conversational AI that understands context and handles complex queries.",
      features: [
        "Natural language understanding",
        "Multi-channel deployment",
        "CRM & helpdesk integration",
        "Lead qualification & booking",
      ],
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Social Media Automations",
      description: "Maintain a powerful social presence without the manual grind. Automate posting, engagement, and analytics.",
      features: [
        "Scheduled content publishing",
        "Cross-platform management",
        "Automated engagement responses",
        "Performance analytics & reporting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-hero border-b border-white/5">
        <div className="absolute inset-0 data-rain-bg opacity-30"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
        <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '1.5s' }}></div>

        <div className="container relative mx-auto px-4 z-10 text-center pt-20">
          <div className="max-w-3xl mx-auto animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-primary">Solutions</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              Comprehensive cloud, data, and engineering solutions designed to transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group glass-card card-hover-glow transition-all duration-500 animate-slide-up overflow-hidden border-white/5 h-full flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <CardHeader className="relative z-10">
                  <div className="mb-4 p-4 glass rounded-2xl w-fit border border-primary/20 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-blue-glow">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-grow text-lg">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(43,158,255,0.8)]" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
          <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border-primary/20 shadow-blue-glow">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our tailored tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full glow-button bg-primary text-white hover:bg-primary font-bold text-lg px-10 py-7 rounded-full shadow-blue-glow">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full glass border-white/20 text-white hover:bg-white/10 hover:text-primary hover:border-primary/50 font-bold text-lg px-10 py-7 transition-all duration-300 rounded-full">
                  Contact Us
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
