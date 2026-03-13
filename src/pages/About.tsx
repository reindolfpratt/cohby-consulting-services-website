import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-navy z-10">
         <div className="absolute inset-0 data-rain-bg opacity-10"></div>
         <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
         <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
         <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up pt-20">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-primary">Cohby</span></h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium">
              Your elite engineering partner in cloud, data, and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-32 relative z-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-foreground">Our Mission</h2>
            <div className="bg-card p-10 md:p-14 rounded-3xl border border-border shadow-md text-lg text-muted-foreground space-y-6 leading-relaxed">
              <p>
                Cohby Consulting Services operates on a core thesis: premium engineering should translate directly to elite business outcomes. We've witnessed too many organizations crippled by bloated implementations, rigid architecture, and disconnected data silos.
              </p>
              <p>
                We do things differently. We are deeply technical, hands-on engineers and consultants who solve highly complex data and cloud challenges. Whether you require advanced AI pipelines, robust cloud infrastructure, or a high-performance Salesforce environment, we build to scale.
              </p>
              <p>
                Based in the UK and Canada, we architect customized, future-proof solutions for global enterprises driving the modern digital frontier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-ash/50 relative overflow-hidden border-b border-border">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">Core Values</h2>
             <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center border-border">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-6">
                  <div className="text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    01
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Impact-Obsessed</h3>
                <p className="text-muted-foreground text-lg">
                  We engineer for quantifiable performance, speed, and business scale.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center border-border">
               <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-6">
                  <div className="text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    02
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Collaborative</h3>
                <p className="text-muted-foreground text-lg">
                  We integrate seamlessly with your teams, accelerating delivery and execution.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center border-border">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-6">
                  <div className="text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    03
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Elite Expertise</h3>
                <p className="text-muted-foreground text-lg">
                  Top-tier cloud architects, data engineers, and certified specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 text-center border-border">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-6">
                  <div className="text-4xl font-black text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                    04
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Zero BS</h3>
                <p className="text-muted-foreground text-lg">
                  Complete transparency in architecture, pricing, and timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-foreground">Why Partner With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Deep Engineering Roots</h3>
                    <p className="text-muted-foreground text-lg">
                      We go beyond high-level strategy to execute complex, technical implementations. We write the code, configure the environments, and migrate the data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Future-Proof Architecture</h3>
                    <p className="text-muted-foreground text-lg">
                      We build scalable, modular systems designed to handle tomorrow's data loads and computing demands without requiring a total rewrite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Agile & Responsive</h3>
                    <p className="text-muted-foreground text-lg">
                      Free from massive agency overhead, we deliver highly responsive execution, rapid prototyping, and flexible engagement models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-background border border-border rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-sm">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">Global Talent, Local Touch</h3>
                    <p className="text-muted-foreground text-lg">
                      Operating across the UK and Canada, we offer around-the-clock capabilities combined with personalized communication and dedicated project leadership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
