import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const FreeSalesforce = () => {
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
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// STRATEGY & LICENSING</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">Free CRM <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">outcomes</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                Access powerful Salesforce tools at no cost through the Power of Us Programme.
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
              What if you could get powerful CRM software, designed for non-profits, for free? 
              Many charities and non-profit organisations are concerned about technology costs. 
              Salesforce, a global leader in CRM, offers a solution that removes this barrier. 
              Through its commitment to social good, Salesforce provides a free CRM for non-profits 
              through the Power of Us Programme.
            </p>

            <div className="border-t border-b border-white/10 py-10 my-10 space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">What is the Power of Us Programme?</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                The Salesforce Power of Us Programme is a donation scheme that gives eligible 
                non-profits <strong>10 free licences</strong> for either Nonprofit Cloud or Sales 
                Cloud Enterprise Edition.
              </p>
              <p className="text-sm text-white/50 leading-relaxed">
                Nonprofit Cloud is Salesforce's modern CRM solution for non-profits, with tools 
                for donor management, fundraising, grant tracking, and programme delivery. 
                Alternatively, you can use the Nonprofit Success Pack (NPSP), which is a set of 
                features tailored for non-profit needs and can be added to Sales Cloud.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Who Qualifies?</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                To benefit from the Salesforce Power of Us Programme, your organisation must be a 
                registered non-profit or charity and meet certain criteria. This includes being 
                recognised as a charitable organisation in your country and using the CRM for 
                mission-related work.
              </p>
              
              <a
                href="https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/company/p10-eligibility-guidelines-English-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-rose hover:text-white transition-colors"
              >
                View full eligibility guidelines
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                Beyond the Free Licences: Nonprofit Cloud and NPSP
              </h2>
              <p className="text-sm text-white/50 leading-relaxed">
                Once you have your free licences, you gain access to either Nonprofit Cloud or 
                Sales Cloud with the Nonprofit Success Pack (NPSP). Both options are designed to 
                help non-profits manage:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Donors and constituents",
                  "Fundraising campaigns",
                  "Grants and applications",
                  "Programme delivery and outcomes",
                  "Volunteer management",
                  "Impact reporting",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose/60"></span>
                    <span className="text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-b border-white/10 py-10 my-10 space-y-6 bg-white/[0.01] px-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">Getting Started Is Simple</h3>
              <ol className="space-y-4 text-xs font-mono text-white/50">
                <li className="flex gap-3">
                  <span className="text-rose">01.</span>
                  <span>Check your organisation's eligibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose">02.</span>
                  <span>Apply for the Power of Us Programme through Salesforce.org</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose">03.</span>
                  <span>Receive your free licences and start building your CRM</span>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Need Help Getting Started?</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                Setting up Salesforce, even with free licences, can feel overwhelming. That's where 
                we come in. At Cohby Consulting Services, we specialise in helping non-profits get 
                the most out of their Salesforce investment (or in this case, donation!).
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
              Transform Your Non-Profit
            </h3>
            <p className="text-base mb-10 text-white/60 relative z-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help you leverage free Salesforce tools to maximize your impact.
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

export default FreeSalesforce;
