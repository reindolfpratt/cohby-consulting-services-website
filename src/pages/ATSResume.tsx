import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Mail, 
  MessageSquare, 
  Zap, 
  Search, 
  Cpu, 
  LayoutGrid, 
  Download,
  ArrowRight,
  Play,
  Rocket,
  CheckCircle2,
  FileSearch,
  UploadCloud
} from "lucide-react";

const ATSResume = () => {
  const tiers = [
    { name: "Free", price: "£0", limits: ["2 CV tailors/day", "1 CV build/month"] },
    { name: "Pro Monthly", price: "£10/mo", limits: ["80 tailors/month"] },
    { name: "Pro Quarterly", price: "£25/3mo", limits: ["Unlimited tailors"] },
    { name: "Pro 8 Months", price: "£50/8mo", limits: ["Unlimited tailors"] },
  ];

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
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-primary-foreground mb-8 backdrop-blur-xl animate-fade-in shadow-xl">
              <Rocket size={18} className="text-primary animate-pulse" />
              <span className="text-sm font-bold tracking-widest uppercase">AI-Powered Job Application Platform</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-8 text-white tracking-tighter leading-[0.9] animate-slide-up">
              ATS Resume <br/> <span className="text-transparent bg-clip-text bg-gradient-primary uppercase">Tailor</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/70 font-medium max-w-3xl mb-12 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Automatically rewrite and package everything you need to land your dream role.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="https://www.atsresumetailor.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glow-button bg-primary text-white hover:bg-secondary h-16 px-12 rounded-full text-xl font-black shadow-blue-glow">
                  Tailor Your CV Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-full text-xl font-bold bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                Watch Demo
                <Play className="ml-2 h-6 w-6 fill-white" />
              </Button>
            </div>

            {/* Preview Mockup */}
            <div className="mt-20 w-full max-w-6xl relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
               <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-t from-navy via-transparent to-transparent z-20"></div>
               <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden shadow-2xl p-4">
                  <div className="aspect-[21/9] bg-navy/80 rounded-2xl flex items-center justify-center border border-white/5">
                     <div className="flex flex-col items-center gap-4 opacity-40">
                        <FileText size={60} className="text-primary" />
                        <span className="font-bold tracking-widest uppercase text-xs">Tailored CV Preview</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Features */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Core AI Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Frontier AI models optimized for the modern job market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Zap className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">CV Tailoring</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Matches keywords, reorders experience reverse-chronologically, and strips redundant language for a target job.
                 </p>
              </CardHeader>
            </Card>

            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Mail className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">Cover Letter</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Writes a professional, bespoke cover letter with zero fluff or AI clichés.
                 </p>
              </CardHeader>
            </Card>

            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <MessageSquare className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">Interview Prep</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Generates technical and behavioural questions with personalised strategies based on your actual CV.
                 </p>
              </CardHeader>
            </Card>

            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <FileSearch className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">Resume Optimiser</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Rewrites sections using action verbs and quantified achievements for maximum impact.
                 </p>
              </CardHeader>
            </Card>

            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Cpu className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">Skill Suggester</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Analyses your history and recommends missing technical, soft, and tool skills.
                 </p>
              </CardHeader>
            </Card>

            <Card className="group bg-card border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden relative">
              <CardHeader className="p-8">
                 <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <LayoutGrid className="text-primary h-6 w-6" />
                 </div>
                 <CardTitle className="text-2xl font-black">Application Email</CardTitle>
                 <p className="text-muted-foreground mt-4 leading-relaxed">
                    Drafts a concise, ready-to-send job application email tailored to the role.
                 </p>
              </CardHeader>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-lg font-bold text-primary italic">"And you always have the final say; full edit capabilities before you download."</p>
          </div>
        </div>
      </section>

      {/* CV Builder & Export */}
      <section className="py-32 relative z-10 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-none">CV Builder <br/> <span className="text-primary">& Export</span></h2>
              <div className="grid grid-cols-1 gap-6">
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                       <LayoutGrid className="text-primary" /> 6 Premium Templates
                    </h3>
                    <p className="text-white/60">Classic, Modern, Minimal, Professional, Elegant, Creative — with customisable accent colours.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                       <UploadCloud className="text-primary" /> Smart Import
                    </h3>
                    <p className="text-white/60">Upload existing PDF or DOCX and it auto-parses into structured JSON instantly.</p>
                 </div>
                 <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="font-bold text-xl mb-2 flex items-center gap-3">
                       <Download className="text-primary" /> Flexible Export
                    </h3>
                    <p className="text-white/60">Export to PDF or DOCX for every document type with just a toggle.</p>
                 </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-xl">
               <div className="relative p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                  <h3 className="text-3xl font-black mb-8 text-center">ATS Scoring Engine</h3>
                  <div className="space-y-6">
                     {[
                        { label: "Contact Info Completeness", score: 100 },
                        { label: "Professional Summary Presence", score: 100 },
                        { label: "Work Experience Depth", score: 85 },
                        { label: "Use of Action Verbs", score: 90 },
                        { label: "Quantified Achievements", score: 75 }
                     ].map((item, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between text-sm font-bold">
                              <span>{item.label}</span>
                              <span className="text-primary">{item.score}/100</span>
                           </div>
                           <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-primary" style={{ width: `${item.score}%` }}></div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <p className="mt-8 text-xs text-center text-white/40 uppercase tracking-widest font-black">Accepts PDF, DOCX, PNG, JPG (via OCR)</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-32 relative z-10">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6">Subscription & Access</h2>
               <p className="text-xl text-muted-foreground">Choose the tier that fits your job search velocity.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
               {tiers.map((tier, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border transition-all duration-300 ${i === 1 ? 'bg-navy text-white border-primary shadow-xl scale-105' : 'bg-card border-border hover:border-primary/50'}`}>
                     <h3 className="text-xl font-black mb-1">{tier.name}</h3>
                     <div className={`text-3xl font-black mb-6 ${i === 1 ? 'text-primary' : 'text-foreground'}`}>{tier.price}</div>
                     <ul className="space-y-3 mb-8">
                        {tier.limits.map((limit, lIdx) => (
                           <li key={lIdx} className="flex items-start gap-2 text-sm font-medium">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className={i === 1 ? 'text-white/80' : 'text-muted-foreground'}>{limit}</span>
                           </li>
                        ))}
                     </ul>
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
               <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
                  Land the Role <br/> <span className="text-transparent bg-clip-text bg-gradient-primary">Instantly</span>
               </h2>
               <p className="text-2xl text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
                  Join hundreds of applicants who have optimized their career search with ATS Resume Tailor.
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <a href="https://www.atsresumetailor.com/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="glow-button bg-primary text-white h-20 px-16 rounded-full text-2xl font-black shadow-blue-glow">
                       Start Tailoring
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

export default ATSResume;
