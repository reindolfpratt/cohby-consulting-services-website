import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-hero border-b border-white/5">
         <div className="absolute inset-0 data-rain-bg opacity-30"></div>
         <div className="absolute inset-0 hero-grid-pattern opacity-10"></div>
         <div className="absolute top-[20%] right-[15%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-cloud-glow"></div>
         <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-cloud-glow" style={{ animationDelay: '1.5s' }}></div>
        
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
      <section className="py-32 relative z-10 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center text-white">Our Mission</h2>
            <div className="glass-card p-10 md:p-14 rounded-3xl border-primary/20 shadow-blue-glow text-lg text-muted-foreground space-y-6 leading-relaxed">
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
      <section className="py-32 bg-card/40 relative overflow-hidden border-b border-white/5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Core Values</h2>
             <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="group glass-card card-hover-glow transition-all duration-500 text-center border-white/5">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-8 relative">
                   <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                   <div className="relative p-6 glass rounded-full border border-primary/30 group-hover:border-primary shadow-blue-glow transition-all duration-500 group-hover:scale-110">
                     <Target className="h-8 w-8 text-primary" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Impact-Obsessed</h3>
                <p className="text-muted-foreground text-lg">
                  We engineer for quantifiable performance, speed, and business scale.
                </p>
              </CardContent>
            </Card>

            <Card className="group glass-card card-hover-glow transition-all duration-500 text-center border-white/5">
               <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-8 relative">
                   <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                   <div className="relative p-6 glass rounded-full border border-primary/30 group-hover:border-primary shadow-blue-glow transition-all duration-500 group-hover:scale-110">
                     <Users className="h-8 w-8 text-primary" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Collaborative</h3>
                <p className="text-muted-foreground text-lg">
                  We integrate seamlessly with your teams, accelerating delivery and execution.
                </p>
              </CardContent>
            </Card>

            <Card className="group glass-card card-hover-glow transition-all duration-500 text-center border-white/5">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-8 relative">
                   <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                   <div className="relative p-6 glass rounded-full border border-primary/30 group-hover:border-primary shadow-blue-glow transition-all duration-500 group-hover:scale-110">
                     <Award className="h-8 w-8 text-primary" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Elite Expertise</h3>
                <p className="text-muted-foreground text-lg">
                  Top-tier cloud architects, data engineers, and certified specialists.
                </p>
              </CardContent>
            </Card>

            <Card className="group glass-card card-hover-glow transition-all duration-500 text-center border-white/5">
              <CardContent className="p-10 flex flex-col items-center">
                 <div className="mb-8 relative">
                   <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 group-hover:scale-150 transition-all duration-500"></div>
                   <div className="relative p-6 glass rounded-full border border-primary/30 group-hover:border-primary shadow-blue-glow transition-all duration-500 group-hover:scale-110">
                     <Heart className="h-8 w-8 text-primary" />
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Zero BS</h3>
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
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white">Why Partner With Us?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold text-2xl border border-primary/30 shadow-blue-glow">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Deep Engineering Roots</h3>
                    <p className="text-muted-foreground text-lg">
                      We go beyond high-level strategy to execute complex, technical implementations. We write the code, configure the environments, and migrate the data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold text-2xl border border-primary/30 shadow-blue-glow">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Future-Proof Architecture</h3>
                    <p className="text-muted-foreground text-lg">
                      We build scalable, modular systems designed to handle tomorrow's data loads and computing demands without requiring a total rewrite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold text-2xl border border-primary/30 shadow-blue-glow">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Agile & Responsive</h3>
                    <p className="text-muted-foreground text-lg">
                      Free from massive agency overhead, we deliver highly responsive execution, rapid prototyping, and flexible engagement models.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 glass rounded-full flex items-center justify-center text-primary font-bold text-2xl border border-primary/30 shadow-blue-glow">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Global Talent, Local Touch</h3>
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
