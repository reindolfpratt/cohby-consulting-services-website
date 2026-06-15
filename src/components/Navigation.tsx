import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import cohbyLogo from "@/assets/cohby-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overLight, setOverLight] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Switch to dark solid nav when scrolled into the light clay sections.
      // Hero is ~100vh; use 80% of window height as the threshold.
      setOverLight(y > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset overLight when navigating to a new page
  useEffect(() => {
    setOverLight(false);
    setScrolled(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const solutionsLinks = [
    { title: "Salesforce Consulting", href: "/solutions" },
    { title: "Cloud Solutions", href: "/cloud-solutions" },
    { title: "Data Analysis", href: "/data-analysis" },
  ];

  const productsLinks = [
    { title: "Cohby LMS", href: "/products/cohbylearn" },
    { title: "ATS Resume", href: "/products/ats-resume" },
  ];

  const nonprofitLinks = [
    { title: "Free Salesforce for Non-Profits", href: "/non-profits/free-salesforce" },
    { title: "Nonprofit Success Pack Basics", href: "/non-profits/npsp-basics" },
    { title: "Top 3 Challenges Non-Profits Face", href: "/non-profits/challenges" },
  ];

  const aiAutomationLinks = [
    { title: "AI Engineering", href: "/ai-automation#engineering" },
    { title: "AI & General Automations", href: "/ai-automation#automations" },
    { title: "AI-Powered Websites", href: "/ai-automation#websites" },
    { title: "AI Chatbots", href: "/ai-automation#chatbots" },
    { title: "Social Media Automations", href: "/ai-automation#social" },
  ];

  const dropdownMenuClass =
    "grid w-[400px] gap-1 p-5 bg-[rgba(14,16,38,0.94)] backdrop-blur-[48px] border border-white/10 shadow-2xl rounded-2xl";

  const dropdownLinkClass =
    "block select-none rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.04] group cursor-pointer";

  const dropdownTextClass =
    "text-[11px] font-mono uppercase tracking-wider text-white/85 group-hover:text-rose transition-colors";

  // Derived style tokens based on background context
  const navBg = overLight
    ? "bg-[#0e0e12] border border-white/[0.07] shadow-[0_4px_32px_rgba(0,0,0,0.35)]"
    : scrolled
    ? "liquid-glass-nav"
    : "";

  const linkColor = "text-white/70 hover:text-white";
  const activeLinkColor = "text-rose";
  const logoTextColor = "text-white";
  const mobileButtonColor = "text-white/80 hover:text-rose";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Floating glass pill */}
      <div className="px-4 pt-4">
        <div
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${navBg}`}
        >
          <div className="px-4 md:px-6 flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80 flex-shrink-0"
            >
              <img
                src={cohbyLogo}
                alt="Cohby Consulting Services"
                className="h-9 w-9 object-contain"
              />
              <span className={`text-sm font-mono tracking-[0.2em] uppercase hidden sm:inline ${logoTextColor}`}>
                Cohby Consulting
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                          isActive("/") ? activeLinkColor : linkColor
                        }`}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/about">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                          isActive("/about") ? activeLinkColor : linkColor
                        }`}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/70 hover:text-white data-[state=open]:text-rose data-[state=open]:bg-transparent cursor-pointer">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={dropdownMenuClass}>
                        <li className="mb-2 px-3">
                          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-rose/80">
                            Our Services
                          </div>
                          <p className="text-[10px] text-white/45 mt-1 font-mono">
                            Enterprise digital engineering.
                          </p>
                        </li>
                        {solutionsLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>
                              <NavigationMenuLink className={dropdownLinkClass}>
                                <div className={dropdownTextClass}>{link.title}</div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/70 hover:text-white data-[state=open]:text-rose data-[state=open]:bg-transparent cursor-pointer">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={dropdownMenuClass}>
                        {productsLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>
                              <NavigationMenuLink className={dropdownLinkClass}>
                                <div className={dropdownTextClass}>{link.title}</div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/70 hover:text-white data-[state=open]:text-rose data-[state=open]:bg-transparent cursor-pointer">
                      AI &amp; Automation
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={dropdownMenuClass}>
                        <li>
                          <Link to="/ai-automation">
                            <NavigationMenuLink className={dropdownLinkClass}>
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-rose transition-colors">
                                Overview
                              </div>
                              <p className="text-[10px] leading-snug text-white/45 mt-1 font-mono">
                                Intelligent systems for scale.
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <div className="h-px bg-white/5 my-2 mx-3" />
                        {aiAutomationLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>
                              <NavigationMenuLink className={dropdownLinkClass}>
                                <div className={dropdownTextClass}>{link.title}</div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/70 hover:text-white data-[state=open]:text-rose data-[state=open]:bg-transparent cursor-pointer">
                      Non-Profits
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={dropdownMenuClass}>
                        <li>
                          <Link to="/non-profits">
                            <NavigationMenuLink className={dropdownLinkClass}>
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-rose transition-colors">
                                Overview
                              </div>
                              <p className="text-[10px] leading-snug text-white/45 mt-1 font-mono">
                                Salesforce for non-profit organizations.
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <div className="h-px bg-white/5 my-2 mx-3" />
                        {nonprofitLinks.map((link) => (
                          <li key={link.href}>
                            <Link to={link.href}>
                              <NavigationMenuLink className={dropdownLinkClass}>
                                <div className={dropdownTextClass}>{link.title}</div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/contact">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                          isActive("/contact") ? activeLinkColor : linkColor
                        }`}
                      >
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/book-consultation">
                <Button className="ml-4 glow-button bg-rose text-black hover:bg-white font-mono text-[10px] uppercase tracking-[0.15em] px-6 py-5 rounded-full shadow-lg transition-all duration-300 cursor-pointer">
                  Book Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 transition-colors cursor-pointer ${mobileButtonColor}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - expands inside the pill */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-white/[0.08] py-4 px-4 pb-6 font-mono animate-fade-in max-h-[72vh] overflow-y-auto space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider cursor-pointer ${
                  isActive("/") ? "bg-rose/10 text-rose" : "hover:bg-white/5 text-white/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider cursor-pointer ${
                  isActive("/about") ? "bg-rose/10 text-rose" : "hover:bg-white/5 text-white/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="px-4 pt-4 pb-2 border-t border-white/5 mt-2">
                <div className="text-[10px] tracking-widest text-rose uppercase mb-3">
                  Solutions
                </div>
                <div className="ml-2 space-y-1">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-4 pb-2 border-t border-white/5">
                <div className="text-[10px] tracking-widest text-rose uppercase mb-3">
                  Products
                </div>
                <div className="ml-2 space-y-1">
                  {productsLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-4 pb-2 border-t border-white/5">
                <div className="text-[10px] tracking-widest text-rose uppercase mb-3">
                  AI &amp; Automation
                </div>
                <div className="ml-2 space-y-1">
                  <Link
                    to="/ai-automation"
                    className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {aiAutomationLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-4 pb-2 border-t border-white/5">
                <div className="text-[10px] tracking-widest text-rose uppercase mb-3">
                  Non-Profits
                </div>
                <div className="ml-2 space-y-1">
                  <Link
                    to="/non-profits"
                    className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  {nonprofitLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block py-2 px-2 text-xs text-white/65 hover:text-rose uppercase tracking-wider cursor-pointer transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-3">
                <Link
                  to="/contact"
                  className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider cursor-pointer ${
                    isActive("/contact")
                      ? "bg-rose/10 text-rose"
                      : "hover:bg-white/5 text-white/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <div className="pt-4 pb-2 px-2 border-t border-white/5">
                <Link
                  to="/book-consultation"
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider py-6 rounded-full shadow-lg cursor-pointer">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
