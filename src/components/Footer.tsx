import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import cohbyLogo from "@/assets/cohby-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 text-white overflow-hidden relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={cohbyLogo} alt="Cohby Consulting Services" className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Cohby Consulting</span>
            </div>
            <p className="text-muted-foreground leading-relaxed pr-4">
              Your trusted partner for Salesforce, Cloud Solutions, AI Engineering, and Data Analysis. Empowering digital transformation worldwide.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-pointer text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-pointer text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-pointer text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-pointer text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Solutions & Tech */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Salesforce Consulting
                </Link>
              </li>
              <li>
                <Link to="/cloud-solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/ai-automation" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  AI Engineering
                </Link>
              </li>
              <li>
                <Link to="/data-analysis" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/non-profits" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Non-Profit Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book-consultation" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-primary" />
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>UK: +44 7424 742415</div>
                  <div>Canada: +1 343 883 2087</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-primary" />
                </div>
                <a href="mailto:info@cohbyconsultingservices.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-words">
                  info@<br className="hidden sm:block xl:hidden"/>cohbyconsulting<br className="hidden lg:block xl:hidden"/>services.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Mon-Thu: 10am – 3pm</div>
                  <div>Global Remote Service</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Cohby Consulting Services. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
   </footer>
  );
};

export default Footer;
