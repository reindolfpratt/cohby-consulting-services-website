import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import cohbyLogo from "@/assets/cohby-logo.png";
import LiquidGlassBackground from "@/components/LiquidGlassBackground";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.07] text-white overflow-hidden relative">
      <LiquidGlassBackground variant="footer" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={cohbyLogo}
                alt="Cohby Consulting Services"
                className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
              />
              <span className="text-lg font-bold text-white">Cohby Consulting</span>
            </div>
            <p className="text-white/60 leading-relaxed pr-4 text-sm">
              Your trusted partner for Salesforce, Cloud Solutions, AI Engineering, and Data Analysis. Empowering digital transformation worldwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.facebook.com/CohbyConsultingServices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cohby Consulting on Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.08] hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-pointer text-white/70 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/cohby_consulting_service/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cohby Consulting on Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.08] hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-pointer text-white/70 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.462 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/107525374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cohby Consulting on LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/[0.08] hover:bg-primary/20 hover:border-primary/40 transition-all duration-200 cursor-pointer text-white/70 hover:text-white"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-rose mb-6">
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Salesforce Consulting", href: "/solutions" },
                { label: "Cloud Solutions", href: "/cloud-solutions" },
                { label: "AI Engineering", href: "/ai-automation" },
                { label: "Data Analysis", href: "/data-analysis" },
                { label: "Non-Profit Solutions", href: "/non-profits" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-rose mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Book Consultation", href: "/book-consultation" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-[10px] font-mono uppercase tracking-[0.25em] text-rose mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={13} className="text-primary" />
                </div>
                <div className="text-sm text-white/50 space-y-1">
                  <div>UK: +44 7424 742415</div>
                  <div>Canada: +1 343 883 2087</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-primary" />
                </div>
                <a
                  href="mailto:info@cohbyconsultingservices.com"
                  className="text-sm text-white/50 hover:text-primary transition-colors break-all"
                >
                  info@cohbyconsultingservices.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-primary" />
                </div>
                <div className="text-sm text-white/50 space-y-1">
                  <div>Mon-Thu: 10am - 3pm</div>
                  <div>Global Remote Service</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Cohby Consulting Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
