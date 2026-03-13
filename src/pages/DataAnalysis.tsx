import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const DataAnalysis = () => {
  const services = [
    {
      title: "Data Engineering & Pipelines",
      description:
        "Centralize your scattered data into robust data warehouses and lakes. We build automated ETL/ELT pipelines that ensure your data is clean, accurate, and ready to use.",
      features: [
        "Data Warehouse architecture (Snowflake, BigQuery)",
        "Automated ETL/ELT pipeline development",
        "Data cleansing and normalisation",
        "Real-time streaming data solutions",
      ],
    },
    {
      title: "Business Intelligence & Dashboards",
      description:
        "Turn raw data into interactive, intuitive dashboards. We help executive teams and operators understand their business performance at a glance.",
      features: [
        "Tableau, PowerBI & Looker implementation",
        "Custom dashboard design and UX",
        "KPI and metric definition",
        "Self-service analytics setup",
      ],
    },
    {
      title: "Predictive Analytics & Modeling",
      description:
        "Leverage statistical models and machine learning to forecast trends, understand customer behavior, and optimize pricing strategies.",
      features: [
        "Customer churn prediction",
        "Demand forecasting & inventory optimization",
        "Pricing elasticity models",
        "Propensity and segmentation analysis",
      ],
    },
    {
      title: "Data Strategy & Governance",
      description:
        "Establish a secure, compliant data foundation. We define data governance policies so your teams trust the data they rely on.",
      features: [
        "Data maturity assessments",
        "Data governance framework implementation",
        "Master Data Management (MDM)",
        "Compliance and security reviews",
      ],
    },
  ];

  const benefits = [
    {
      title: "Deep Insights",
      description: "Uncover hidden patterns in your data that drive strategic decisions.",
    },
    {
      title: "Revenue Growth",
      description: "Identify new market opportunities and optimize pricing models.",
    },
    {
      title: "Improved Accuracy",
      description: "Eliminate manual data entry and blind guesswork.",
    },
    {
      title: "Holistic View",
      description: "Maintain a single source of truth across all departments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-hero border-b border-white/5 z-10">
        <div className="absolute inset-0 data-rain-bg opacity-40"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '2s' }}></div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/50 flex items-center justify-center animate-particle-drift rounded-full shadow-blue-glow"
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
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border border-primary/30 mb-8 animate-fade-in shadow-blue-glow">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Data & Analytics
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] text-white animate-slide-up tracking-tight">
              HARNESS YOUR <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-primary filter drop-shadow-[0_0_15px_rgba(43,158,255,0.4)]">
                DATA POTENTIAL
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-12 text-white/80 animate-slide-up font-medium"
              style={{ animationDelay: "0.1s" }}
            >
              Transform raw complex data into an actionable strategic asset with predictive modeling and powerful BI.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/book-consultation" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-primary text-white hover:bg-primary font-bold text-lg px-10 py-7 shadow-blue-glow rounded-full"
                >
                  Unlock Your Data
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
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
              Analytics Services
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end data engineering and reporting for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group glass-card card-hover-glow transition-all duration-500 animate-slide-up overflow-hidden border-white/5 h-full flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-10 relative flex flex-col h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="h-1 w-12 bg-primary rounded-full mb-8 group-hover:w-full transition-all duration-500 shadow-blue-glow"></div>
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                       {service.features.map((feature, idx) => (
                         <li key={idx} className="flex items-start gap-4">
                           <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(43,158,255,0.8)]"></div>
                           <span className="text-white/80">{feature}</span>
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
      <section className="py-32 bg-card/40 relative overflow-hidden border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Data Driven Impact
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group text-center p-10 rounded-3xl glass-card card-hover-glow transition-all duration-500 animate-slide-up h-full flex flex-col items-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors duration-500">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg">{benefit.description}</p>
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
           <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border-primary/20 shadow-blue-glow">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Stop Guessing, Start Knowing
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Our data engineers can turn your messy data into a powerful engine for predictable growth.
            </p>
            <Link to="/book-consultation" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full glow-button bg-primary text-white hover:bg-primary font-bold text-xl px-12 py-8 rounded-full shadow-blue-glow"
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

export default DataAnalysis;
