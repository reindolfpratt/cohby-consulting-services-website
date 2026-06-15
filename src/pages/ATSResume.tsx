import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Mail, 
  MessageSquare, 
  Zap, 
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
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const ATSResume = () => {
  const tiers = [
    { name: "Free", price: "£0", limits: ["2 CV tailors/day", "1 CV build/month"] },
    { name: "Pro Monthly", price: "£10/mo", limits: ["80 tailors/month"] },
    { name: "Pro Quarterly", price: "£25/3mo", limits: ["Unlimited tailors"] },
    { name: "Pro 8 Months", price: "£50/8mo", limits: ["Unlimited tailors"] },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30 relative grid-blueprint">
      
      {/* 4-Column Blueprint Vertical Grid Lines Overlay */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none z-0 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="border-r border-white/[0.02] h-full"></div>
        <div className="h-full"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden z-10 border-b border-white/10">
        <LiquidGlassBackground variant="hero" />

        <div className="container relative mx-auto px-4 md:px-8 z-10 pt-36 pb-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Vertical Info */}
            <div className="lg:col-span-2 hidden lg:block pt-12">
              <span className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.3em] block origin-left rotate-90 translate-y-24 whitespace-nowrap">
                // PRODUCTS . CAREER . 2026
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">// COHBY RESUME TOOL</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-white uppercase mb-8">
                ATS Resume <br />
                Tailor <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">system</span>.
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-[32ch] mb-8">
                Automatically rewrite and package everything you need to land your dream role.
              </p>
            </div>

            {/* Right Explainer & CTA */}
            <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col space-y-4 items-start">
                <a href="https://www.atsresumetailor.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all">
                    Tailor Your CV Now →
                  </Button>
                </a>
                
                <Button variant="ghost" className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-rose transition-colors pt-2">
                  // WATCH DEMO VIDEO
                </Button>
              </div>
            </div>

          </div>

          {/* Preview Mockup */}
          <div className="mt-20 w-full relative z-10">
             <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden p-4">
                <div className="aspect-[21/9] bg-ash/50 rounded-[1.5rem] flex items-center justify-center border border-white/5 relative group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-rose/5 to-transparent pointer-events-none"></div>
                   <div className="flex flex-col items-center gap-4 opacity-40 group-hover:opacity-80 transition-all duration-300">
                      <FileText size={48} className="text-rose" />
                      <span className="font-mono tracking-widest uppercase text-[10px] text-white">// TAILORED CV ENGINE PREVIEW</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Core AI Features - Grid layout with thin borders */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-24 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Core AI Features
            </h2>
          </div>

          {/* Grid Layout with Thin Borders */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">
            {[
              {
                icon: <Zap className="text-rose h-5 w-5" />,
                title: "CV Tailoring",
                desc: "Matches keywords, reorders experience reverse-chronologically, and strips redundant language for a target job."
              },
              {
                icon: <Mail className="text-rose h-5 w-5" />,
                title: "Cover Letter",
                desc: "Writes a professional, bespoke cover letter with zero fluff or AI clichés."
              },
              {
                icon: <MessageSquare className="text-rose h-5 w-5" />,
                title: "Interview Prep",
                desc: "Generates technical and behavioural questions with personalised strategies based on your actual CV."
              },
              {
                icon: <FileSearch className="text-rose h-5 w-5" />,
                title: "Resume Optimiser",
                desc: "Rewrites sections using action verbs and quantified achievements for maximum impact."
              },
              {
                icon: <Cpu className="text-rose h-5 w-5" />,
                title: "Skill Suggester",
                desc: "Analyses your history and recommends missing technical, soft, and tool skills."
              },
              {
                icon: <LayoutGrid className="text-rose h-5 w-5" />,
                title: "Application Email",
                desc: "Drafts a concise, ready-to-send job application email tailored to the role."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-12 border-b border-r border-white/10 hover:bg-white/[0.01] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose/5 border border-rose/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-sm font-mono text-rose/80 uppercase tracking-widest">// You always have the final say; full edit capabilities before you download.</p>
          </div>

        </div>
      </section>

      {/* CV Builder & Export */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.25em] block">
                // COMPONENT STRUCTURE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">
                CV Builder <br/> <span className="text-rose">& Export</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-4 pt-4">
                 <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                       <LayoutGrid size={18} className="text-rose" /> 6 Premium Templates
                    </h3>
                    <p className="text-white/50 text-sm">Classic, Modern, Minimal, Professional, Elegant, Creative — with customisable accent colours.</p>
                 </div>
                 <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                       <UploadCloud size={18} className="text-rose" /> Smart Import
                    </h3>
                    <p className="text-white/50 text-sm">Upload existing PDF or DOCX and it auto-parses into structured JSON instantly.</p>
                 </div>
                 <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                    <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                       <Download size={18} className="text-rose" /> Flexible Export
                    </h3>
                    <p className="text-white/50 text-sm">Export to PDF or DOCX for every document type with just a toggle.</p>
                 </div>
              </div>
            </div>

            {/* Right side visual */}
            <div className="lg:col-span-6 w-full max-w-xl mx-auto">
               <div className="relative">
                  <div className="absolute -inset-4 bg-rose/10 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="relative rounded-[2rem] bg-background/85 p-8 border border-white/10 shadow-2xl">
                     <h3 className="text-2xl font-black text-white mb-8 text-center uppercase tracking-tight">ATS Scoring Engine</h3>
                     <div className="space-y-6">
                        {[
                           { label: "Contact Info Completeness", score: 100 },
                           { label: "Professional Summary Presence", score: 100 },
                           { label: "Work Experience Depth", score: 85 },
                           { label: "Use of Action Verbs", score: 90 },
                           { label: "Quantified Achievements", score: 75 }
                        ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-xs font-mono">
                                 <span className="text-white/80">{item.label}</span>
                                 <span className="text-rose">{item.score}/100</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                 <div className="h-full bg-rose transition-all duration-300" style={{ width: `${item.score}%` }}></div>
                              </div>
                           </div>
                        ))}
                     </div>
                     <p className="mt-8 text-[9px] text-center text-white/30 uppercase tracking-widest font-mono">// Accepts PDF, DOCX, PNG, JPG (via OCR)</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subscription Tiers - Minimal columns with vertical borders */}
      <section className="py-32 relative overflow-hidden bg-background/30 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center mb-24">
             <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// FLEXIBLE ACCESS</span>
             <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Subscription Tiers</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10 py-12">
             {tiers.map((tier, i) => (
                <div key={i} className="p-8 group hover:bg-white/[0.01] transition-all duration-300 first:pl-0 last:pr-0">
                   <span className="text-xs font-mono text-rose/60 block mb-6">// TIER 0{i + 1}</span>
                   <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose transition-colors">{tier.name}</h3>
                   <div className="text-3xl font-black text-white mb-6 font-mono tracking-tight">{tier.price}</div>
                   <ul className="space-y-3 mb-8">
                      {tier.limits.map((limit, lIdx) => (
                         <li key={lIdx} className="flex items-start gap-2.5 text-xs text-white/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose/60 mt-1"></span>
                            <span>{limit}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent pointer-events-none"></div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white relative z-10 uppercase tracking-tighter leading-none">
              Land the Role <br />
              <span className="text-rose font-serif italic lowercase tracking-wide">instantly</span>.
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of applicants who have optimized their career search with ATS Resume Tailor.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <a href="https://www.atsresumetailor.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg"
                >
                  Start Tailoring →
                </Button>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
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
