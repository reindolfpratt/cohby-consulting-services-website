import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Contact = () => {
  // Jotform effect removed. Form is now Salesforce Web-to-Lead.

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you. Let's discuss how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Contact Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Phone</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-sm">UK: +44 7424 742415</p>
                  <p className="text-sm">Canada: +1 343 883 2087</p>
                  <p className="text-sm mt-2">WhatsApp available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Email</h3>
                <a
                  href="mailto:info@cohbyconsultingservices.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@cohbyconsultingservices.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p className="text-sm">Monday - Thursday</p>
                  <p className="text-sm">10:00 AM - 3:00 PM</p>
                  <p className="text-sm mt-2">(UK & Canada Time)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                <form 
                  action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000GzkH" 
                  method="POST" 
                  className="space-y-6 w-full"
                >
                  <input type="hidden" name="oid" value="00DgD000000GzkH" />
                  <input type="hidden" name="retURL" value="https://cohbyconsultingservices.com/thank-you" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first_name" className="text-sm font-medium">First Name</label>
                      <input id="first_name" maxLength={40} name="first_name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="last_name" className="text-sm font-medium">Last Name</label>
                      <input id="last_name" maxLength={80} name="last_name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input id="email" maxLength={80} name="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-sm font-medium">Mobile</label>
                      <input id="mobile" maxLength={40} name="mobile" type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <input id="company" maxLength={40} name="company" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-medium">City</label>
                      <input id="city" maxLength={40} name="city" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="00NSj000002VLgX" className="text-sm font-medium">Country of Operation</label>
                    <select id="00NSj000002VLgX" name="00NSj000002VLgX" title="Country of Operation" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">--None--</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2 border-t border-border pt-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">Project Details</h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="00NgD000000x7rt" className="text-sm font-medium text-muted-foreground tracking-wide">WHAT SERVICE ARE YOU INTERESTED IN?</label>
                        <select id="00NgD000000x7rt" multiple={true} name="00NgD000000x7rt" title="What service are you interested in?" className="flex p-2 w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-sm">
                          <option value="Salesforce Implementation &amp; Customization">Salesforce Implementation &amp; Customization</option>
                          <option value="Data Migration &amp; Integration">Data Migration &amp; Integration</option>
                          <option value="Analytics &amp; Reporting">Analytics &amp; Reporting</option>
                          <option value="Ongoing Support &amp; Training">Ongoing Support &amp; Training</option>
                          <option value="Other">Other</option>
                        </select>
                        <p className="text-xs text-muted-foreground mt-1 text-right">Hold Cmd/Ctrl to select multiple</p>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="00NgD000000x7tV" className="text-sm font-medium text-muted-foreground tracking-wide mt-2 block">CURRENT SALESFORCE USAGE</label>
                        <select id="00NgD000000x7tV" name="00NgD000000x7tV" title="Current Salesforce Usage" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">--None--</option>
                          <option value="Not using Salesforce yet">Not using Salesforce yet</option>
                          <option value="Using Salesforce but need improvements">Using Salesforce but need improvements</option>
                          <option value="Other CRM system">Other CRM system</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="00NgD000000x7qH" className="text-sm font-medium text-muted-foreground tracking-wide mt-2 block">ESTIMATED PROJECT TIMELINE</label>
                        <select id="00NgD000000x7qH" name="00NgD000000x7qH" title="Estimated Project Timeline" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">--None--</option>
                          <option value="immediate (within 1 month">immediate (within 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3+ months">3+ months</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="00NSj000002VM4j" className="text-sm font-medium text-muted-foreground tracking-wide mt-2 block">PROJECT DESCRIPTION</label>
                        <textarea id="00NSj000002VM4j" name="00NSj000002VM4j" rows={4} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" wrap="soft" placeholder="Tell us more about your challenges or goals..."></textarea>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="00NSj000002VLjl" className="text-sm font-medium text-muted-foreground tracking-wide mt-2 block">HOW DID YOU HEAR ABOUT US?</label>
                        <select id="00NSj000002VLjl" name="00NSj000002VLjl" title="How Did You Hear About Us" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                          <option value="">--None--</option>
                          <option value="Referral">Referral</option>
                          <option value="Google_Search">Google Search</option>
                          <option value="Social_Media">Social Media</option>
                          <option value="Flyer">Flyer</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" name="submit" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-secondary glow-button shadow-md">
                      Send Message
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Serving Areas */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Proudly serving clients in the UK and Canada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
