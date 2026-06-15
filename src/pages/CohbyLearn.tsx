import { Button } from "@/components/ui/button";
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
  Rocket
} from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const CohbyLearn = () => {
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
                // PRODUCTS . LEARNING . 2026
              </span>
            </div>

            {/* Main Typographic Headline */}
            <div className="lg:col-span-6 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-6 block">// COHBY ACADEMY SYSTEM</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-white uppercase mb-8">
                Cohby <br />
                Learn <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">platform</span>.
              </h1>
              <p className="text-lg text-white/50 leading-relaxed max-w-[32ch] mb-8">
                The AI-driven, multi-tenant LMS built for creators, corporations, and educators.
              </p>
            </div>

            {/* Right Explainer & CTA */}
            <div className="lg:col-span-4 lg:pt-16 flex flex-col space-y-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex flex-col space-y-4 items-start">
                <a href="http://www.cohbylearn.com/" target="_blank" rel="noopener noreferrer">
                  <Button className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg transition-all">
                    Start Free Trial →
                  </Button>
                </a>
                
                <Button variant="ghost" className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 hover:text-rose transition-colors pt-2">
                  // WATCH DEMO VIDEO
                </Button>
              </div>
            </div>

          </div>

          {/* Platform Mockup Preview */}
          <div className="mt-20 w-full relative z-10">
             <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden p-4">
                <div className="aspect-[16/9] md:aspect-[21/9] bg-ash/50 rounded-[1.5rem] flex items-center justify-center border border-white/5 relative group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-rose/5 to-transparent pointer-events-none"></div>
                   <div className="flex flex-col items-center gap-4 opacity-40 group-hover:opacity-80 transition-all duration-300">
                      <LayoutGrid size={48} className="text-rose" />
                      <span className="font-mono tracking-widest uppercase text-[10px] text-white">// PLATFORM DASHBOARD PREVIEW</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Feature Grid - Row Stack Blueprint style */}
      <section className="py-32 relative z-10 border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="mb-24 text-left max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// SYSTEM FEATURES</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              Why Cohby Learn?
            </h2>
          </div>

          {/* Row Stack List */}
          <div className="border-b border-white/10">
            
            {/* Row 1: The AI Architect */}
            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // AGENTIC BUILDER
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                  The AI "Architect"
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Reduce course creation time by 90%. Our AI builds structure, modules, and quizzes directly into your database from a single prompt.
                </p>
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-white/40 lg:pt-1">
                <span className="inline-block px-3 py-1.5 rounded-full bg-rose/5 border border-rose/15 text-rose font-bold mb-3">Agentic Loop Enabled</span>
                <p>Generates rich curriculum structures in under 30 seconds.</p>
              </div>
              <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                  <Zap className="h-4 w-4 text-white/40 group-hover:text-rose" />
                </div>
              </div>
            </div>

            {/* Row 2: Enterprise Standards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // COMPLIANCE
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                  Enterprise Standards
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Full SCORM 1.2 and 2004 compliance. Upload your Articulate or Captivate files and track grades instantly.
                </p>
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-white/40 lg:pt-1">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold mb-3">SCORM 1.2 & 2004</span>
                <p>Grade tracking is built natively into standard database queries.</p>
              </div>
              <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                  <FileCheck className="h-4 w-4 text-white/40 group-hover:text-rose" />
                </div>
              </div>
            </div>

            {/* Row 3: Live Learning Engine */}
            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // STREAMING
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                  Live Learning Engine
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Zoom-style conferencing built natively into the platform. No installs, just high-performance online learning.
                </p>
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-white/40 lg:pt-1">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold mb-3">Up to 100k Participants</span>
                <p>Features browser-to-browser screen sharing and chat.</p>
              </div>
              <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                  <Video className="h-4 w-4 text-white/40 group-hover:text-rose" />
                </div>
              </div>
            </div>

            {/* Row 4: Communication Hub */}
            <div className="grid grid-cols-1 lg:grid-cols-12 py-12 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group">
              <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                // MARKETING
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-rose transition-colors mb-3">
                  Communication Hub
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                  Replace Mailchimp with targeted internal announcements. Reach everyone or specific cohorts with precise read tracking.
                </p>
              </div>
              <div className="lg:col-span-4 text-xs font-mono text-white/40 lg:pt-1">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-bold mb-3">Built-in Read Receipts</span>
                <p>Ensure mandatory updates are reviewed and logged by users.</p>
              </div>
              <div className="lg:col-span-1 flex lg:justify-end lg:pt-2">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose/50 group-hover:translate-x-2 transition-all duration-300">
                  <Megaphone className="h-4 w-4 text-white/40 group-hover:text-rose" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Modular Course Building Blocks */}
      <section className="py-32 bg-ash relative overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-rose/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.25em] block">
                // COMPONENT STRUCTURE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">
                Modular Course <br/> <span className="text-rose">Building Blocks</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed max-w-xl">
                 Courses are more than just text. Cohby Learn uses a modular "Block" system that allows for rich, interactive curriculum design.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                 {[
                    { label: "Interactive Quizzes" },
                    { label: "External Embeds" },
                    { label: "SCORM Uploads" },
                    { label: "Reflective Tasks" },
                    { label: "Content Accordions" },
                    { label: "Resource Downloads" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                       <span className="w-1.5 h-1.5 rounded-full bg-rose"></span>
                       <span className="font-mono text-xs text-white/80">{item.label}</span>
                    </div>
                 ))}
              </div>
            </div>

            {/* Right side visual */}
            <div className="lg:col-span-6 w-full max-w-xl mx-auto">
               <div className="relative">
                  <div className="absolute -inset-4 bg-rose/10 blur-3xl rounded-full pointer-events-none"></div>
                  <div className="relative rounded-[2rem] bg-background/80 p-6 border border-white/10 shadow-2xl">
                     <div className="space-y-4">
                        {[
                          { num: "01", label: "Introductory Video Lecture", duration: "12m" },
                          { num: "02", label: "SCORM Course Package", duration: "File" },
                          { num: "03", label: "Self-Reflection Questionnaire", duration: "Task" }
                        ].map((item, idx) => (
                           <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-grab">
                              <div className="flex items-center gap-4">
                                 <div className="w-8 h-8 rounded-lg bg-rose/5 border border-rose/20 flex items-center justify-center font-mono text-xs text-rose">{item.num}</div>
                                 <div className="space-y-1">
                                    <div className="h-3 w-40 bg-white/10 rounded-full"></div>
                                    <div className="h-2 w-16 bg-white/5 rounded-full"></div>
                                 </div>
                              </div>
                              <LayoutGrid size={14} className="text-white/20" />
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
      <section className="py-32 relative overflow-hidden bg-background/30 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative">
          
          <div className="mb-20 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// DATA ISOLATION</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">Bank-Level Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 mt-16 border-t border-b border-white/10">
            {[
              { title: "RLS Policies", desc: "Hardware-level data isolation for every database query utilizing PostgreSQL Row Level Security." },
              { title: "Role-Based Access", desc: "Granular administrative layers supporting Learners, Managers, and Super Admins." },
              { title: "AES Encryption", desc: "All sensitive database columns and file attachments are securely encrypted at rest." }
            ].map((step, index) => (
              <div
                key={index}
                className="p-8 lg:p-12 group hover:bg-white/[0.01] transition-all duration-300"
              >
                <span className="text-xs font-mono text-rose/50 block mb-6">// SECURITY LAYER 0{index + 1}</span>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-rose transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
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
              Build Your <br />
              <span className="text-rose font-serif italic lowercase tracking-wide">academy</span>.
            </h2>
            <p className="text-base md:text-lg mb-12 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Start creating courses today with the AI Architect. No credit card required for trial organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <a href="http://www.cohbylearn.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-10 py-7 rounded-full shadow-lg"
                >
                  Launch Free Trial →
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

export default CohbyLearn;
