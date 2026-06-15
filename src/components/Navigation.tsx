import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-2xl" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <div className="flex items-center gap-3">
              <img src={cohbyLogo} alt="Cohby Consulting Services" className="h-10 w-10 object-contain" />
              <span className={`text-sm font-mono tracking-[0.2em] uppercase hidden sm:inline transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>Cohby Consulting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                        isActive("/") 
                          ? "text-rose" 
                          : "text-white/60 hover:text-rose"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                        isActive("/about") 
                          ? "text-rose" 
                          : "text-white/60 hover:text-rose"
                      }`}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/60 hover:text-rose data-[state=open]:text-rose data-[state=open]:bg-transparent"
                  >
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-6 bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl">
                      <li className="mb-3">
                        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-rose/80">Our Services</div>
                        <p className="text-[11px] text-white/40 mt-1 font-mono">// Enterprise digital engineering.</p>
                      </li>
                      {solutionsLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 group-hover:text-rose transition-colors">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/60 hover:text-rose data-[state=open]:text-rose data-[state=open]:bg-transparent"
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-6 bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl">
                      {productsLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 group-hover:text-rose transition-colors">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/60 hover:text-rose data-[state=open]:text-rose data-[state=open]:bg-transparent"
                  >
                    AI & Automation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-6 bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl">
                      <li>
                        <Link to="/ai-automation">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                            <div className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-rose">Overview</div>
                            <p className="line-clamp-2 text-[10px] leading-snug text-white/40 mt-1 font-mono">
                              // Intelligent systems for scale.
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <div className="h-px bg-white/5 my-2"></div>
                      {aiAutomationLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 group-hover:text-rose transition-colors">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-[11px] font-mono uppercase tracking-[0.2em] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent text-white/60 hover:text-rose data-[state=open]:text-rose data-[state=open]:bg-transparent"
                  >
                    Non-Profits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-6 bg-background/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl">
                      <li>
                        <Link to="/non-profits">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                            <div className="text-[11px] font-mono uppercase tracking-wider text-white group-hover:text-rose">Overview</div>
                            <p className="line-clamp-2 text-[10px] leading-snug text-white/40 mt-1 font-mono">
                              // Salesforce for non-profit organizations.
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <div className="h-px bg-white/5 my-2"></div>
                      {nonprofitLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-white/[0.03] group">
                              <div className="text-[11px] font-mono uppercase tracking-wider text-white/80 group-hover:text-rose transition-colors">{link.title}</div>
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
                      className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-[0.2em] transition-colors ${
                        isActive("/contact") 
                          ? "text-rose" 
                          : "text-white/60 hover:text-rose"
                      }`}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/book-consultation">
              <Button className="ml-4 glow-button bg-rose text-black hover:bg-white font-mono text-[10px] uppercase tracking-[0.15em] px-6 py-5 rounded-full shadow-lg transition-all duration-300">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-white hover:text-rose' : 'text-white hover:text-rose'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl mt-2 p-6 shadow-2xl absolute left-4 right-4 max-h-[80vh] overflow-y-auto font-mono">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider ${isActive('/') ? 'bg-rose/10 text-rose' : 'hover:bg-white/5 text-white/80'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider ${isActive('/about') ? 'bg-rose/10 text-rose' : 'hover:bg-white/5 text-white/80'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="px-4 py-2 border-t border-white/5 mt-2">
              <div className="text-[10px] tracking-widest text-rose uppercase mb-2">// Solutions</div>
              <div className="ml-4 space-y-1">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-white/5 mt-2">
              <div className="text-[10px] tracking-widest text-rose uppercase mb-2">// Products</div>
              <div className="ml-4 space-y-1">
                {productsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-white/5 mt-2">
              <div className="text-[10px] tracking-widest text-rose uppercase mb-2">// AI & Automation</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/ai-automation"
                  className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                {aiAutomationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-white/5 mt-2">
              <div className="text-[10px] tracking-widest text-rose uppercase mb-2">// Non-Profits</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/non-profits"
                  className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                {nonprofitLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-xs text-white/60 hover:text-rose uppercase tracking-wider"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/5 mt-2 pt-2">
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-xl transition-colors text-xs uppercase tracking-wider ${isActive('/contact') ? 'bg-rose/10 text-rose' : 'hover:bg-white/5 text-white/80'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            <div className="pt-4 pb-2 px-2">
              <Link
                to="/book-consultation"
                className="block w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full glow-button bg-rose text-black hover:bg-white font-mono text-xs uppercase tracking-wider py-6 rounded-full shadow-lg">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

