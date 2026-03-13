import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CloudSolutions = () => {
  const services = [
    {
      title: "Cloud Infrastructure Setup",
      description:
        "Design and deploy scalable, high-performance cloud architectures tailored to your enterprise requirements.",
      features: [
        "AWS, Azure, and Google Cloud Platform (GCP)",
        "Serverless architecture design",
        "High availability and disaster recovery",
        "Cost optimization and auditing",
      ],
    },
    {
      title: "Seamless Cloud Migration",
      description:
        "Migrate your legacy systems to the cloud with zero downtime and complete data integrity.",
      features: [
        "Infrastructure and application migration",
        "Database migration services",
        "Minimal downtime strategies",
        "Post-migration support and tuning",
      ],
    },
    {
      title: "Cloud Security & Compliance",
      description:
        "Enterprise-grade security implementations ensuring your data remains protected and compliant with industry standards.",
      features: [
        "Identity and Access Management (IAM)",
        "Data encryption in transit and at rest",
        "Vulnerability assessments",
        "Regulatory compliance (GDPR, HIPAA, SOC2)",
      ],
    },
    {
      title: "Managed Cloud Services",
      description:
        "24/7 monitoring, maintenance, and optimization of your cloud environments, so your team can focus on building.",
      features: [
        "Proactive monitoring and alerting",
        "Performance optimization",
        "Automated backups and patching",
        "Dedicated cloud support engineers",
      ],
    },
  ];

  const benefits = [
    {
      title: "Infinite Scalability",
      description: "Automatically scale resources up or down based on your business demands.",
    },
    {
      title: "Enhanced Security",
      description: "Leverage state-of-the-art security protocols and compliance frameworks.",
    },
    {
      title: "Cost Efficiency",
      description: "Pay only for what you use and optimize overhead with intelligent resource management.",
    },
    {
      title: "High Availability",
      description: "Ensure your applications are always online with robust disaster recovery plans.",
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-navy z-10">
        <div className="absolute inset-0 data-rain-bg opacity-10"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '2s' }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/30 flex items-center justify-center animate-particle-drift rounded-full shadow-sm"
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
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in shadow-md">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Enterprise Cloud Architecture
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white animate-slide-up tracking-tight">
              ELEVATE YOUR <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-primary filter drop-shadow-[0_0_15px_rgba(27,156,217,0.4)]">
                INFRASTRUCTURE
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-12 text-white/80 animate-slide-up font-medium"
              style={{ animationDelay: "0.1s" }}
            >
              Secure, scalable, and high-performance cloud solutions that drive digital transformation and enterprise agility.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-primary text-white hover:bg-secondary font-bold text-lg px-10 py-7 shadow-lg rounded-full"
                >
                  Architect Your Cloud
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative z-10 bg-ash/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
              Cloud Solutions
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive migration, security, and management tailored to your specific operational needs.
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
              The Cloud Advantage
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
      <section className="relative py-32 overflow-hidden border-t border-border bg-navy">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="absolute inset-0 data-rain-bg opacity-5 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 text-center z-10">
           <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Optimize Your Cloud?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Our cloud engineers can architect a solution that guarantees uptime and boosts performance.
            </p>
            <Link to="/book-consultation" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full glow-button bg-primary text-white hover:bg-secondary font-bold text-xl px-12 py-8 rounded-full shadow-lg"
              >
                Schedule an Assessment
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
