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
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Settings className="h-10 w-10 text-accent" />,
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
      icon: <Cloud className="h-10 w-10 text-accent" />,
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
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Data Migration & Integration",
      description: "Seamlessly migrate your data to Salesforce and integrate with your existing systems for a unified view of your business.",
      features: [
        "Data cleansing and preparation",
        "Secure data migration",
        "API integration setup",
        "ETL process implementation",
      ],
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-accent" />,
      title: "Analytics & Reporting",
      description: "Transform your data into actionable insights with powerful dashboards, reports, and analytics solutions.",
      features: [
        "Custom dashboard creation",
        "Advanced reporting setup",
        "Einstein Analytics implementation",
        "KPI tracking and monitoring",
      ],
    },
    {
      icon: <Workflow className="h-10 w-10 text-accent" />,
      title: "Process Automation",
      description: "Streamline your operations with intelligent automation that saves time and reduces manual work.",
      features: [
        "Flow and Process Builder setup",
        "Approval process configuration",
        "Email and task automation",
        "Custom workflow solutions",
      ],
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-accent" />,
      title: "Training & Support",
      description: "Empower your team with comprehensive training and ongoing support to maximise your Salesforce investment.",
      features: [
        "User and admin training",
        "Custom documentation",
        "Ongoing support packages",
        "Best practice guidance",
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Non-Profit Solutions",
      description: "Specialised Salesforce solutions for non-profit organisations, including free licensing guidance and NPSP implementation.",
      features: [
        "Power of Us programme assistance",
        "NPSP setup and customisation",
        "Donor and grant management",
        "Volunteer tracking systems",
      ],
    },
    {
      icon: <FileSpreadsheet className="h-10 w-10 text-accent" />,
      title: "Health Check & Optimisation",
      description: "Already using Salesforce? We'll review your setup and identify opportunities for improvement and optimisation.",
      features: [
        "Comprehensive system audit",
        "Performance optimisation",
        "Security review",
        "Actionable recommendations",
      ],
    },
    {
      icon: <Bot className="h-10 w-10 text-accent" />,
      title: "AI & General Automations",
      description: "Streamline your operations with intelligent workflow automation. Save time, reduce errors, and let your team focus on what matters.",
      features: [
        "Workflow process automation",
        "Document processing & data extraction",
        "Email and task automation",
        "Custom integration development",
      ],
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
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
      icon: <MessageSquare className="h-10 w-10 text-accent" />,
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
      icon: <Share2 className="h-10 w-10 text-accent" />,
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl text-white/90">
              Comprehensive Salesforce and data consulting services designed to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your goals with the right Salesforce solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
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
