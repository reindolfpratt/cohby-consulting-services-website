import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle2
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
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
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-navy z-10">
        <div className="absolute inset-0 data-rain-bg opacity-10"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
        <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '1.5s' }}></div>

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
      <section className="py-24 relative z-10 bg-ash/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-slide-up overflow-hidden border-border h-full flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <CardHeader className="relative z-10">
                  <div className="h-1 w-12 bg-primary rounded-full mb-6 group-hover:w-full transition-all duration-500"></div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-grow text-lg">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
      <section className="relative py-32 overflow-hidden border-t border-border bg-navy">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 data-rain-bg opacity-5 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our tailored tech solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button size="lg" className="w-full glow-button bg-primary text-white hover:bg-secondary font-bold text-lg px-10 py-7 rounded-full shadow-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/50 font-bold text-lg px-10 py-7 transition-all duration-300 rounded-full">
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
