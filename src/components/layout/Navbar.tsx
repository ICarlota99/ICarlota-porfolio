import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ isScrolled, setIsScrolled ] = useState(false);
  const [ activeSection, setActiveSection ] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "";
      navItems.forEach(item => {
        if (item.href.startsWith("/#")) {
          const sectionId = item.href.substring(2);
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sectionId;
            }
          }
        }
      });
      if (window.scrollY < 50 && !currentSection) {
        currentSection = "hero";
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={ cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out",
        "bg-slate-900/80",
        (isScrolled || isOpen) &&
        "bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-700/60",
        !(isScrolled || isOpen) &&
        "border-b border-transparent"
      ) }
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <a
              href="/#hero"
              onClick={ (e) => handleLinkClick(e, "/#hero") }
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
            >
              {/* {"<Carlota />"} */}
              {/* $ <span className="text-white">carlota_dev</span>
              <span className="text-purple-400">(</span>
              <span className="text-green-400">main</span>
              <span className="text-purple-400">) </span>
              <span className="text-yellow-200">λ carlota</span> */}
              <span className="text-purple-400">{"{"}</span>
              <span className="text-amber-300 mx-1">"dev"</span>
              <span className="text-gray-400">: </span>
              <span className="text-emerald-400">"Carlota"</span>
              <span className="text-purple-400">{"}"}</span>
            </a>
          </div>

          {/* Desktop Menu */ }
          <div className="hidden md:flex items-center space-x-2">
            { navItems.map((item) => (
              <a
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                  activeSection === item.href.substring(2)
                    ? "text-teal-300 bg-teal-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                ) }
              >
                { item.label }
              </a>
            )) }
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center w-12 h-12 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {/* Animated Hamburger Lines */}
              <span className={`
                absolute block w-6 h-0.5 bg-current rounded-full
                transform transition duration-300
                ${isOpen ? 
                  "rotate-45 -translate-y-1/2" : 
                  "-translate-y-1.5"}
              `}></span>
              <span className={`
                absolute block w-6 h-0.5 bg-current rounded-full
                transform transition duration-300
                ${isOpen ? 
                  "-rotate-45 -translate-y-1/2" : 
                  "translate-y-1.5"}
              `}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */ }
      { isOpen && (
        <div
          className={ cn(
            "md:hidden absolute top-full left-0 w-full shadow-lg",
            "bg-slate-900/90 backdrop-blur-xl border-t border-slate-700/60"
          ) }
        >
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
            { navItems.map((item) => (
              <a
                key={ item.label }
                href={ item.href }
                onClick={ (e) => handleLinkClick(e, item.href) }
                className={ cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  activeSection === item.href.substring(2)
                    ? "bg-teal-500/20 text-teal-300"
                    : "text-slate-200 hover:text-white hover:bg-slate-700/50"
                ) }
              >
                { item.label }
              </a>
            )) }
          </div>
        </div>
      ) }
    </nav>
  );
}