import { Mail, Phone, MapPin, Clock } from "lucide-react";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-rose/30 relative grid-blueprint font-sans">
      
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
              <span className="text-xs uppercase tracking-[0.2em] text-rose font-mono mb-4 block">// INQUIRIES & DEPLOYMENT</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight uppercase leading-[0.95]">Get In <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">touch</span></h1>
              <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl">
                Let's discuss how we can help your business thrive. We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 relative z-10 bg-background/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left side: Contact info */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <span className="text-xs font-mono text-rose/50 uppercase tracking-[0.2em] block mb-6">// DIRECT CONTACT</span>
                <div className="space-y-8">
                  
                  {/* Phone */}
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-rose/50 transition-colors">
                        <Phone className="h-4 w-4 text-rose" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">Phone</h4>
                        <p className="text-sm text-white/80 font-mono">UK: +44 7424 742415</p>
                        <p className="text-sm text-white/80 font-mono">Canada: +1 343 883 2087</p>
                        <span className="text-[10px] text-white/30 font-mono block mt-1">// WhatsApp available</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-rose/50 transition-colors">
                        <Mail className="h-4 w-4 text-rose" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">Email</h4>
                        <a
                          href="mailto:info@cohbyconsultingservices.com"
                          className="text-sm text-white/80 hover:text-rose transition-colors font-mono block break-all"
                        >
                          info@cohbyconsultingservices.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="group">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-rose/50 transition-colors">
                        <Clock className="h-4 w-4 text-rose" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider">Business Hours</h4>
                        <p className="text-sm text-white/80">Monday - Thursday</p>
                        <p className="text-sm text-white/80">10:00 AM - 3:00 PM</p>
                        <span className="text-[10px] text-white/30 font-mono block mt-1">// UK & Canada Time</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Map/Location */}
              <div className="border-t border-white/5 pt-8">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full text-xs text-white/60 font-mono">
                  <MapPin className="h-4 w-4 text-rose" />
                  <span>Serving Clients in the UK & Canada</span>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-rose/5 blur-3xl rounded-full pointer-events-none"></div>
                <div className="relative rounded-[2rem] bg-white/[0.02] backdrop-blur-md p-8 md:p-12 border border-white/10 shadow-2xl">
                  <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-tight">Send Us a Message</h3>
                  
                  <form 
                    action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000GzkH" 
                    method="POST" 
                    className="space-y-8"
                  >
                    <input type="hidden" name="oid" value="00DgD000000GzkH" />
                    <input type="hidden" name="retURL" value="https://cohbyconsultingservices.com/thank-you" />

                    {/* Form Fields - Sleek Underline Styling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="first_name" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">First Name</label>
                        <input id="first_name" maxLength={40} name="first_name" type="text" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" required />
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="last_name" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">Last Name</label>
                        <input id="last_name" maxLength={80} name="last_name" type="text" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">Email Address</label>
                        <input id="email" maxLength={80} name="email" type="email" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" required />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="mobile" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">Mobile Phone</label>
                        <input id="mobile" maxLength={40} name="mobile" type="tel" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="company" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">Company / Organisation</label>
                        <input id="company" maxLength={40} name="company" type="text" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" required />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="city" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">City</label>
                        <input id="city" maxLength={40} name="city" type="text" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000002VLgX" className="text-[10px] font-mono text-rose/50 uppercase tracking-[0.2em]">Country of Operation</label>
                      <select id="00NSj000002VLgX" name="00NSj000002VLgX" title="Country of Operation" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none">
                        <option value="" className="bg-background text-white/50">--None--</option>
                        <option value="UK" className="bg-background text-white">UK</option>
                        <option value="Canada" className="bg-background text-white">Canada</option>
                        <option value="Other" className="bg-background text-white">Other</option>
                      </select>
                    </div>

                    <div className="border-t border-white/5 pt-8 space-y-6">
                      <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-rose">// Project Scope</h4>
                      
                      <div className="space-y-6">
                        <div className="flex flex-col space-y-2">
                          <label htmlFor="00NgD000000x7rt" className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">What service are you interested in?</label>
                          <select id="00NgD000000x7rt" multiple={true} name="00NgD000000x7rt" title="What service are you interested in?" className="bg-white/[0.02] border border-white/10 rounded-xl p-3 text-sm text-white min-h-[140px] focus:border-rose focus:outline-none">
                            <option value="Salesforce Implementation &amp; Customization" className="bg-background text-white p-1">Salesforce Implementation &amp; Customization</option>
                            <option value="Data Migration &amp; Integration" className="bg-background text-white p-1">Data Migration &amp; Integration</option>
                            <option value="Analytics &amp; Reporting" className="bg-background text-white p-1">Analytics &amp; Reporting</option>
                            <option value="Ongoing Support &amp; Training" className="bg-background text-white p-1">Ongoing Support &amp; Training</option>
                            <option value="Other" className="bg-background text-white p-1">Other</option>
                          </select>
                          <span className="text-[9px] text-white/30 font-mono text-right mt-1">// Hold Cmd/Ctrl to select multiple</span>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <label htmlFor="00NgD000000x7tV" className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Current Salesforce Usage</label>
                          <select id="00NgD000000x7tV" name="00NgD000000x7tV" title="Current Salesforce Usage" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none">
                            <option value="" className="bg-background text-white/50">--None--</option>
                            <option value="Not using Salesforce yet" className="bg-background text-white">Not using Salesforce yet</option>
                            <option value="Using Salesforce but need improvements" className="bg-background text-white">Using Salesforce but need improvements</option>
                            <option value="Other CRM system" className="bg-background text-white">Other CRM system</option>
                          </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <label htmlFor="00NgD000000x7qH" className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Estimated Project Timeline</label>
                          <select id="00NgD000000x7qH" name="00NgD000000x7qH" title="Estimated Project Timeline" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none">
                            <option value="" className="bg-background text-white/50">--None--</option>
                            <option value="immediate (within 1 month" className="bg-background text-white">Immediate (within 1 month)</option>
                            <option value="1-3 months" className="bg-background text-white">1-3 months</option>
                            <option value="3+ months" className="bg-background text-white">3+ months</option>
                          </select>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <label htmlFor="00NSj000002VM4j" className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">Project Description</label>
                          <textarea id="00NSj000002VM4j" name="00NSj000002VM4j" rows={4} className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none placeholder:text-white/20" placeholder="Tell us more about your challenges or goals..."></textarea>
                        </div>

                        <div className="flex flex-col space-y-2">
                          <label htmlFor="00NSj000002VLjl" className="text-[10px] font-mono text-white/40 uppercase tracking-[0.15em]">How did you hear about us?</label>
                          <select id="00NSj000002VLjl" name="00NSj000002VLjl" title="How Did You Hear About Us" className="bg-transparent border-b border-white/10 focus:border-rose focus:outline-none py-2 text-sm text-white transition-colors rounded-none">
                            <option value="" className="bg-background text-white/50">--None--</option>
                            <option value="Referral" className="bg-background text-white">Referral</option>
                            <option value="Google_Search" className="bg-background text-white">Google Search</option>
                            <option value="Social_Media" className="bg-background text-white">Social Media</option>
                            <option value="Flyer" className="bg-background text-white">Flyer</option>
                            <option value="Other" className="bg-background text-white">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button type="submit" name="submit" className="w-full inline-flex items-center justify-center whitespace-nowrap text-xs font-mono uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-14 px-8 bg-rose text-black hover:bg-white glow-button shadow-lg rounded-full">
                        Send Message →
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
