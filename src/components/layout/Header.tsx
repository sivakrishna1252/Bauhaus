import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import logo from '@/assets/logo.png';

interface NavLink {
  href: string;
  label: string;
  isButton?: boolean;
  subLinks?: { href: string; label: string }[];
}

const leftLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    href: '/portfolio',
    label: 'Our Projects',
    subLinks: [
      { href: '/projects/commercial', label: 'Commercial' },
      { href: '/projects/residential', label: 'Residential' },
    ]
  },
  { href: '/modular-kitchens', label: 'Offerings' },
  { href: '/how-it-works', label: 'How it works' },
];

const rightLinks: NavLink[] = [

  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },

];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Determine if we're on a page with a dark hero
  const hasDarkHero = ['/', '/modular-kitchens', '/bathrooms', '/how-it-works'].includes(location.pathname) || location.pathname.startsWith('/projects/');

  const isTransparent = !isScrolled && hasDarkHero;

  const isActive = (link: NavLink) => {
    if (location.pathname === link.href) return true;
    if (link.subLinks) {
      return link.subLinks.some(sub => location.pathname === sub.href);
    }
    return false;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-neutral-900/95 backdrop-blur-md shadow-sm py-4' // Dark background on scroll
          : 'bg-transparent py-6'
      )}
    >
      <div className="w-full px-8 md:px-12 lg:px-16 flex items-center justify-between">

        {/* Logo (Left Aligned) */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center group">
            <img
              src={logo}
              alt="BauHaus"
              className={cn(
                "h-8 w-auto transition-all duration-300",
                "brightness-0 invert"
              )}
            />
          </Link>
        </div>

        {/* Navigation (Right Aligned) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center">
          {[...leftLinks, ...rightLinks, { href: '/contact', label: 'Contact Us', isButton: true }].map((link) => (
            link.isButton ? (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className={cn(
                  "ml-4 rounded-full border-2 px-6 tracking-[0.1em] uppercase text-xs font-bold h-10 transition-all duration-300",
                  "border-white text-white hover:bg-white hover:text-black",
                  isActive(link) && "bg-white text-black border-white"
                )}
              >
                <Link to={link.href}>{link.label}</Link>
              </Button>
            ) : (
              <div key={link.label} className="relative group">
                <Link
                  to={link.href}
                  className={cn(
                    "text-xs font-bold tracking-[0.1em] uppercase transition-colors duration-300 relative py-1 flex items-center gap-1",
                    "text-white/90 hover:text-white",
                    isActive(link) && "text-white"
                  )}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown className="w-4 h-4" />}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-[3px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                    "bg-white",
                    isActive(link) && "scale-x-100" // Active indicator
                  )} />
                </Link>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 min-w-[240px]">
                    <div className="bg-white rounded-lg shadow-2xl py-3 flex flex-col">
                      {link.subLinks.map((subLink, index) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className={cn(
                            "px-6 py-3 text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:text-gold text-start",
                            location.pathname === subLink.href ? "text-gold bg-gold/5" : "text-neutral-600",
                            index !== link.subLinks!.length - 1 && "border-b border-gray-100"
                          )}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle (Visible only on mobile) */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 transition-colors duration-300",
              "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ease-out overflow-hidden shadow-lg",
          isMobileMenuOpen ? "max-h-[600px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav className="container-custom flex flex-col gap-4 text-center">
          {[...leftLinks, ...rightLinks].map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                className={cn(
                  "text-[15px] font-bold tracking-[0.1em] uppercase py-2 transition-colors duration-300 block",
                  isActive(link)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
              {/* Mobile Sublinks */}
              {link.subLinks && (
                <div className="flex flex-col gap-2 mt-2 bg-secondary/30 py-2 rounded-md">
                  {link.subLinks.map(subLink => (
                    <Link
                      key={subLink.href}
                      to={subLink.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-sm font-medium uppercase py-2 transition-colors duration-300",
                        location.pathname === subLink.href ? "text-gold" : "text-muted-foreground"
                      )}
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button variant="default" size="lg" asChild className="mt-4 mx-auto w-fit">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}