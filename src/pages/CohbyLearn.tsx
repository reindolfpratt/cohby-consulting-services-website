import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Video, 
  Megaphone, 
  Zap, 
  FileCheck, 
  Lock, 
  LayoutGrid, 
  Share2,
  ArrowRight,
  Play,
  Settings,
  Users,
  CheckCircle2,
  AlertTriangle,
  Rocket
} from "lucide-react";

const CohbyLearn = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 relative">
      {/* Dynamic Background Blend */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background z-0"></div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy z-10 pt-20">
        <div className="absolute inset-0 data-rain-bg opacity-10"></div>
        <div className="absolute inset-0 hero-grid-pattern opacity-20"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-cloud-glow"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-cloud-glow" style={{ animationDelay: '2s' }}></div>

        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary-foreground mb-8 backdrop-blur-xl animate-fade-in shadow-xl">
              <span className="text-sm font-bold tracking-widest uppercase">The Next Generation of LMS</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 text-white tracking-tighter leading-[0.9] animate-slide-up">
              Cohby
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/70 font-medium max-w-3xl mb-12 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              The AI-Driven, Multi-Tenant LMS built for Creators, Corporations, and Educators.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="http://www.cohbylearn.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glow-button bg-primary text-white hover:bg-secondary h-16 px-12 rounded-full text-xl font-black shadow-blue-glow">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-full text-xl font-bold bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                Watch Demo
                <Play className="ml-2 h-6 w-6 fill-white" />
              </Button>
            </div>

            {/* Platform Mockup Preview */}
            <div className="mt-20 w-full max-w-6xl relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
               <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-t from-navy via-transparent to-transparent z-20"></div>
               <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl p-4">
                  <div className="aspect-[16/9] bg-navy/80 rounded-2xl flex items-center justify-center border border-white/5">
                     <div className="flex flex-col items-center gap-4 opacity-40">
                        <LayoutGrid size={60} className="text-primary" />
                        <span className="font-bold tracking-widest uppercase text-xs">Platform Dashboard Preview</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Bento Style */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Why Cohby?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to build, deliver, and scale your learning experiences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
            
            {/* AI Architect */}
            <Card className="md:col-span-8 group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10 p-10 pb-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Zap className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-4xl font-black text-foreground">The AI "Architect"</CardTitle>
                 <p className="text-xl text-muted-foreground pt-4 leading-relaxed max-w-lg">
                    Reduce course creation time by 90%. Our AI builds structure, modules, and quizzes directly into your database from a single prompt.
                 </p>
              </CardHeader>
              <CardContent className="relative z-10 p-10 pt-0">
                 <div className="mt-8 flex gap-4">
                    <span className="px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-bold border border-primary/20">Agentic Loop</span>
                 </div>
              </CardContent>
              {/* Visual Element */}
              <div className="absolute right-0 bottom-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                   <Rocket size={240} className="text-primary" />
              </div>
            </Card>

            {/* SCORM Compliance */}
            <Card className="md:col-span-4 group bg-navy text-white border-white/5 hover:border-primary/50 transition-all duration-500 overflow-hidden relative flex flex-col">
              <CardHeader className="p-10 pb-4">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                    <FileCheck className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-3xl font-black">Enterprise Standards</CardTitle>
                 <p className="text-lg text-white/60 pt-4 leading-relaxed">
                    Full SCORM 1.2 and 2004 compliance. Upload your Articulate or Captivate files and track grades instantly.
                 </p>
              </CardHeader>
              <div className="mt-auto p-10 pt-0">
                 <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 animate-pulse"></div>
                 </div>
                 <span className="text-[10px] uppercase tracking-widest font-black text-white/40 mt-2 block">Grade Tracking Active</span>
              </div>
            </Card>

            {/* Live Learning Engine */}
            <Card className="md:col-span-4 group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative flex flex-col">
              <CardHeader className="p-10 pb-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Video className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-3xl font-black">Live Learning Engine</CardTitle>
                 <p className="text-lg text-muted-foreground pt-4 leading-relaxed">
                     Zoom-style conferencing built natively into the platform. No installs, just learning.
                 </p>
              </CardHeader>
              <CardContent className="mt-auto p-10">
                 <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                       <CheckCircle2 className="h-4 w-4 text-primary" /> Up to 100k Participants
                    </li>
                    <li className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                       <CheckCircle2 className="h-4 w-4 text-primary" /> Screen Sharing & Chat
                    </li>
                 </ul>
              </CardContent>
            </Card>

            {/* Communication Hub */}
            <Card className="md:col-span-8 group bg-ash/50 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative min-h-[400px]">
              <CardHeader className="p-10 pb-4">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Megaphone className="text-primary h-6 w-6" />
                 </div>
                 <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                       <CardTitle className="text-4xl font-black text-foreground">Communication Hub</CardTitle>
                       <p className="text-xl text-muted-foreground pt-4 leading-relaxed max-w-lg">
                          Replace Mailchimp with targeted internal announcements. Reach everyone or specific groups with precise read tracking.
                       </p>
                    </div>
                    <div className="bg-white p-6 rounded-[2rem] border border-border shadow-lg flex-shrink-0">
                       <div className="flex gap-2 items-center mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Urgent Alert</span>
                       </div>
                       <div className="space-y-2">
                          <div className="h-2 w-32 bg-ash rounded-full"></div>
                          <div className="h-2 w-24 bg-ash rounded-full"></div>
                       </div>
                    </div>
                 </div>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* Interactive Elements / Blocks */}
      <section className="py-32 relative z-10 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 hero-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-none">Modular Course <br/> <span className="text-primary">Building Blocks</span></h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                 Courses are more than just text. Cohby uses a modular "Block" system that allows for rich, interactive curriculum design.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {[
                    { icon: <Zap size={20}/>, label: "Quizzes" },
                    { icon: <Video size={20}/>, label: "Embeds" },
                    { icon: <FileCheck size={20}/>, label: "SCORM" },
                    { icon: <Settings size={20}/>, label: "Reflective Tasks" },
                    { icon: <LayoutGrid size={20}/>, label: "Accordions" },
                    { icon: <Share2 size={20}/>, label: "Resources" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                       <div className="text-primary">{item.icon}</div>
                       <span className="font-bold text-sm">{item.label}</span>
                    </div>
                 ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
               <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                  <div className="relative rounded-[2.5rem] bg-card p-4 border border-white/10 shadow-2xl">
                     <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                           <div key={i} className="bg-ash/10 p-6 rounded-3xl border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors cursor-grab active:cursor-grabbing">
                              <div className="flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center font-black text-primary">{i}</div>
                                 <div className="space-y-1">
                                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                                    <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                                 </div>
                              </div>
                              <LayoutGrid size={16} className="text-white/20" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Multi-Tenancy */}
      <section className="py-32 relative z-10">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
               <div className="w-20 h-20 rounded-[2rem] bg-navy flex items-center justify-center mx-auto mb-10 shadow-xl border border-white/10">
                  <Lock className="text-primary h-10 w-10" />
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight">Bank-Level Security <br/> & Data Isolation</h2>
               <p className="text-xl text-muted-foreground leading-relaxed">
                  Engineered with a strict Multi-Tenant architecture. Your students' data is cryptographically isolated from other organizations using Supabase Row Level Security (RLS).
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { title: "RLS Policies", desc: "Hardware-level data isolation for every query." },
                  { title: "Role-Based Access", desc: "Leaners, Managers, and Super Admins with granular permissions." },
                  { title: "AES Encryption", desc: "All sensitive data and file attachments are encrypted at rest." }
               ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                     <h3 className="text-xl font-black text-primary mb-3">{item.title}</h3>
                     <p className="text-muted-foreground font-medium">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative z-10 overflow-hidden">
         <div className="absolute inset-0 bg-navy"></div>
         <div className="absolute inset-0 data-rain-bg opacity-10"></div>
         <div className="container relative mx-auto px-4 text-center z-10">
            <div className="max-w-4xl mx-auto">
               <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                  Ready to Build Your <br/> <span className="text-transparent bg-clip-text bg-gradient-primary uppercase tracking-tighter italic">Academy?</span>
               </h2>
               <p className="text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
                  Start creating courses today with the AI Architect. No credit card required for trial organizations.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <a href="http://www.cohbylearn.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="glow-button bg-primary text-white h-20 px-16 rounded-full text-2xl font-black shadow-blue-glow">
                       Launch Free Trial
                    </Button>
                  </a>
                  <Link to="/contact">
                     <Button size="lg" variant="outline" className="h-20 px-16 rounded-full text-2xl font-black bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                        Contact Sales
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default CohbyLearn;
