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
          ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
            <div className="flex items-center gap-3">
              <img src={cohbyLogo} alt="Cohby Consulting Services" className="h-12 w-12 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              <span className="text-xl font-bold hidden sm:inline text-white">Cohby Consulting</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary ${
                        isActive("/") ? "text-primary" : "text-white/90"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary ${
                        isActive("/about") ? "text-primary" : "text-white/90"
                      }`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white/90 hover:text-primary hover:bg-white/5 data-[state=open]:bg-white/10">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background border border-white/10 shadow-xl rounded-xl">
                      <li className="mb-2">
                        <div className="text-sm font-medium text-primary mb-1">Our Services</div>
                        <p className="text-xs text-muted-foreground">Comprehensive digital transformation.</p>
                      </li>
                      {solutionsLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white/90 hover:text-primary hover:bg-white/5 data-[state=open]:bg-white/10">
                    AI & Automation
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background border border-white/10 shadow-xl rounded-xl">
                      <li>
                        <Link to="/ai-automation">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                            <div className="text-sm font-medium leading-none">AI & Automation Overview</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                              Intelligent solutions for modern businesses
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <div className="h-px bg-white/10 my-1"></div>
                      {aiAutomationLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                              <div className="text-sm font-medium leading-none">{link.title}</div>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-white/90 hover:text-primary hover:bg-white/5 data-[state=open]:bg-white/10">
                    Non-Profits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-background border border-white/10 shadow-xl rounded-xl">
                      <li>
                        <Link to="/non-profits">
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                            <div className="text-sm font-medium leading-none">Non-Profits Overview</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                              Salesforce solutions for non-profit organisations
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <div className="h-px bg-white/10 my-1"></div>
                      {nonprofitLinks.map((link) => (
                        <li key={link.href}>
                          <Link to={link.href}>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary/20 hover:text-primary">
                              <div className="text-sm font-medium leading-none">{link.title}</div>
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
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 hover:text-primary ${
                        isActive("/contact") ? "text-primary" : "text-white/90"
                      }`}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/book-consultation">
              <Button className="ml-4 glow-button bg-primary text-white hover:bg-primary border border-primary/50 shadow-[0_0_15px_rgba(43,158,255,0.4)]">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 animate-fade-in bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl mt-2 p-4 shadow-2xl absolute left-4 right-4 max-h-[80vh] overflow-y-auto">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-md transition-colors ${isActive('/') ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-white/90'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-3 rounded-md transition-colors ${isActive('/about') ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-white/90'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="px-4 py-2 border-t border-white/10 mt-2">
              <div className="font-medium mb-2 text-primary">Solutions</div>
              <div className="ml-4 space-y-1">
                {solutionsLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-sm text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-white/10 mt-2">
              <div className="font-medium mb-2 text-primary">AI & Automation</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/ai-automation"
                  className="block py-2 text-sm text-white/80 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                {aiAutomationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-sm text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-t border-white/10 mt-2">
              <div className="font-medium mb-2 text-primary">Non-Profits</div>
              <div className="ml-4 space-y-1">
                <Link
                  to="/non-profits"
                  className="block py-2 text-sm text-white/80 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Overview
                </Link>
                {nonprofitLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-sm text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-2 pt-2">
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-md transition-colors ${isActive('/contact') ? 'bg-primary/20 text-primary' : 'hover:bg-white/5 text-white/90'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            
            <div className="pt-4 pb-2 px-2">
              <Link
                to="/book-consultation"
                className="block w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full glow-button bg-primary hover:bg-primary text-white shadow-lg">
                  Book Free Consultation
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

