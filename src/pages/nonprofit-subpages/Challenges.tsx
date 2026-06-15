import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Challenges = () => {
  const challenges = [
    {
      num: "01",
      title: "Fragmented Donor & Constituent Data",
      problem: "Spreadsheets here, email lists there, sticky notes everywhere. When your donor and volunteer info is scattered across different places, it's easy to miss opportunities and hard to keep communications personal.",
      solution: "Salesforce brings all your data together in one place. You get a 360-degree view of every supporter - donors, volunteers, beneficiaries, all in a single, searchable database. Suddenly, you can see who's engaged, personalise your outreach, and build stronger relationships.",
    },
    {
      num: "02",
      title: "Tracking Campaigns & Donations",
      problem: "You're running multiple campaigns - online appeals, events, grant applications - and trying to track who gave what, when, and why. Without a clear system, it's nearly impossible to know what's working.",
      solution: "Salesforce's campaign and donation tracking tools let you see exactly where every pound or dollar came from, which campaigns are hitting targets, and which donors need a thank-you call. Automated workflows can even send receipts and follow-ups instantly.",
    },
    {
      num: "03",
      title: "Demonstrating Impact to Stakeholders",
      problem: "Funders want proof: How many people did you help? What outcomes did you achieve? When your data is messy or incomplete, creating compelling reports feels like pulling teeth.",
      solution: "With Salesforce, you can track program outcomes, beneficiary progress, and key metrics in real-time. Dashboards and reports are built in, so you can generate beautiful, data-driven stories for grant applications and board meetings clearly and confidently.",
    },
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
      <section className="relative min-h-[50vh] flex items-center overflow-hidden z-10 border-b border-white/10">
        <LiquidGlassBackground variant="hero" />
        
        <div className="container relative mx-auto px-4 md:px-8 z-10 max-w-7xl pt-36 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-2 hidden lg:block"></div>
            <div className="lg:col-span-10 animate-fade-in">
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// RESEARCH & INSIGHTS</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">Impact <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">challenges</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                Top 3 challenges non-profits face, and how Salesforce solves them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 relative z-10 bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-left">
          <p className="text-lg leading-relaxed text-white/80 mb-6">
            Running a non-profit is a labour of love, but it's not always smooth 
            sailing. You're juggling big missions, tight budgets, and a million moving parts. If 
            you've ever felt like you're herding cats when it comes to your data, fundraising, or 
            reporting, you're definitely not alone.
          </p>
          <p className="text-sm leading-relaxed text-white/50">
            Here are the top three non-profit challenges we see all the time and how Salesforce 
            can help you turn chaos into clarity.
          </p>
        </div>
      </section>

      {/* Challenges Section - Asymmetric Columns Split */}
      <section className="py-24 relative z-10 bg-background/50 border-t border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="space-y-20">
            {challenges.map((challenge, index) => (
              <div key={index} className="border-t border-white/10 pt-12 first:border-t-0 first:pt-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Category Tag */}
                  <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0">
                    // CHALLENGE {challenge.num}
                  </div>
                  
                  {/* Headline */}
                  <div className="lg:col-span-9">
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase mb-8 group-hover:text-rose transition-colors">
                      {challenge.title}
                    </h2>
                    
                    {/* Problem and Solution Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
                      <div>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-3">// The Obstacle</span>
                        <p className="text-sm text-white/50 leading-relaxed">{challenge.problem}</p>
                      </div>
                      <div className="border-l border-white/5 pl-8 md:pl-12">
                        <span className="text-[10px] font-mono text-rose/50 uppercase tracking-widest block mb-3">// Salesforce Resolution</span>
                        <p className="text-sm text-white/70 leading-relaxed">{challenge.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-24 relative z-10 bg-ash/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="border border-white/10 p-8 md:p-12 rounded-3xl bg-white/[0.01] space-y-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight text-center">The Bottom Line</h2>
            <p className="text-sm text-white/50 leading-relaxed text-center">
              Non-profits face unique challenges, but you don't have to tackle them alone. 
              Salesforce is built to handle exactly these pain points. We'll show you how Salesforce can 
              solve these challenges for your organisation, with zero jargon and total transparency.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden border-t border-white/10 bg-background">
        <LiquidGlassBackground variant="cta" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10 max-w-7xl">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white relative z-10 uppercase tracking-tighter">
              Ready to Solve These Challenges?
            </h3>
            <p className="text-base mb-10 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how Salesforce can transform your non-profit operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/book-consultation">
                <Button size="lg" className="glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full shadow-lg">
                  Book Free Consultation →
                </Button>
              </Link>
              <Link to="/non-profits">
                <Button size="lg" variant="outline" className="font-mono text-xs uppercase tracking-wider px-8 py-6 rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                  Back to Non-Profits
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
