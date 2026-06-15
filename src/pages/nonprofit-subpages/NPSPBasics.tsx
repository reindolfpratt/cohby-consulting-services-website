import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const NPSPBasics = () => {
  const features = [
    {
      title: "Constituent Management",
      category: "CONSTITUENTS",
      description: "Keep track of individuals (donors, volunteers, beneficiaries) and organisations (foundations, companies) in one place. No more scattered spreadsheets, just a single, searchable database.",
    },
    {
      title: "Donation & Gift Management",
      category: "FUNDRAISING",
      description: "Record all types of donations: one-off gifts, pledges, recurring donations and track them easily. You can see giving history at a glance and never miss a thank you.",
    },
    {
      title: "Household Management",
      category: "HOUSEHOLDS",
      description: "Link related people into households. This means you can communicate with families or groups together, making your outreach more personal and organised.",
    },
    {
      title: "Campaign Management",
      category: "CAMPAIGNS",
      description: "Track your fundraising campaigns, appeals, and events. See which efforts are bringing in donations and where to focus your energy.",
    },
    {
      title: "Engagement Plans",
      category: "AUTOMATION",
      description: "Automate follow-ups and communications. For example, send a welcome email series to new donors or schedule check-ins with volunteers.",
    },
    {
      title: "Reports & Dashboards",
      category: "REPORTING",
      description: "Get visual snapshots of your fundraising progress, donor retention, and more. No technical expertise needed to create clear, informative reports.",
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
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// SYSTEM BASICS</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">NPSP <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">features</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                Your foundation for nonprofit success on Salesforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-10 bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-12 text-white/70">
            
            <p className="text-lg leading-relaxed text-white/80">
              You've got Salesforce, now meet its nonprofit superpower: the <strong>Nonprofit 
              Success Pack (NPSP)</strong>! If you're a charity or nonprofit just starting out 
              with Salesforce, NPSP is your launchpad for better donor management, fundraising, 
              and more.
            </p>

            <div className="border-t border-b border-white/10 py-10 my-10 space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">What is NPSP?</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                NPSP (Nonprofit Success Pack) is a <strong>free, open source package</strong> built 
                on Salesforce, designed specifically for nonprofits. It comes ready to use, so you 
                don't have to build everything from scratch.
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                NPSP helps you turn Salesforce into a nonprofit CRM that's tailored for your needs.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">Core NPSP Features</h2>
              
              <div className="border-b border-white/10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 lg:grid-cols-12 py-10 items-start border-t border-white/10 hover:bg-white/[0.01] transition-all duration-300 group"
                  >
                    <div className="lg:col-span-3 text-xs font-mono text-rose/50 uppercase tracking-[0.2em] mb-4 lg:mb-0 lg:pt-1">
                      // {feature.category}
                    </div>
                    <div className="lg:col-span-9">
                      <h3 className="text-xl font-bold text-white group-hover:text-rose transition-colors mb-2">{feature.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-b border-white/10 py-10 my-10 space-y-6 bg-white/[0.01] px-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Why Start with NPSP?</h3>
              <ul className="space-y-4 text-sm text-white/50">
                <li className="flex gap-3">
                  <span className="text-rose font-mono">01.</span>
                  <span><strong>It's Free:</strong> NPSP is included with your Salesforce nonprofit account at no extra cost.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose font-mono">02.</span>
                  <span><strong>Built for Nonprofits:</strong> Speaks your language - donors, not customers; campaigns, not sales targets.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose font-mono">03.</span>
                  <span><strong>Room to Grow:</strong> Start simple and add more features as your organisation's needs evolve.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose font-mono">04.</span>
                  <span><strong>Community Support:</strong> Join a massive global community of nonprofits sharing resources.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Getting Started Is Simple</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                If the idea of setting up NPSP feels daunting, don't worry. That's what we're here for. 
                At Cohby Consulting Services, we help nonprofits get up and running with 
                NPSP quickly and painlessly. We'll handle the technical setup, train your team, and make 
                sure you're confident using your new system.
              </p>
            </div>

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
              Get Started with NPSP
            </h3>
            <p className="text-base mb-10 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let us help you set up and optimize your Nonprofit Success Pack for maximum impact.
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

export default NPSPBasics;
