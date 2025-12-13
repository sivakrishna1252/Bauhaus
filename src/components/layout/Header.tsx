import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

import logo from '@/assets/logo.png';

const leftLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Our Projects' },
  { href: '/modular-kitchens', label: 'Offerings' },
  { href: '/how-it-works', label: 'How it works' },
];

const rightLinks = [
  { href: '/about', label: 'About Us' },
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
  const hasDarkHero = ['/', '/modular-kitchens', '/bathrooms', '/how-it-works'].includes(location.pathname);
  // Always show light text on dark hero unless scrolled, BUT user wanted visible bg on scroll so text might need to flip
  // If background becomes opaque (light/dark theme dependent), text needs to contrast.
  // Assuming default theme is light but hero is dark? Or dark mode?
  // Let's stick to the existing logic but ensure background opacity works.

  // Refined Logic based on request: "header bg visible ga vundali" (header bg should be visible).
  // When scrolled, we use a solid background. The text color should adapt to that background.

  const isTransparent = !isScrolled && hasDarkHero;

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
                // Logo should be white on dark hero (isTransparent) AND on dark scroll (!isTransparent)
                // If logo is natively black/colored, use invert brightness-0 invert to make it white.
                // Assuming logo is natively white? Or check if it needs inversion?
                // If logo works on dark hero (isTransparent), it's probably white or inverted to white.
                // Let's assume we always want it WHITE since background is always dark now.
                "brightness-0 invert"
              )}
            />
          </Link>
        </div>

        {/* Navigation (Right Aligned) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-end">
          {[...leftLinks, ...rightLinks, { href: '/contact', label: 'Contact Us', isButton: true }].map((link: { href: string; label: string; isButton?: boolean }) => (
            link.isButton ? (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className={cn(
                  "ml-4 rounded-full border-2 px-6 tracking-[0.1em] uppercase text-xs font-bold h-10 transition-all duration-300",
                  // Always white text/border since background is always dark (transparent or neutral-900)
                  "border-white text-white hover:bg-white hover:text-black",
                  location.pathname === link.href && "bg-white text-black border-white"
                )}
              >
                <Link to={link.href}>{link.label}</Link>
              </Button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-[15px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 relative group py-1",
                  // Always white text since background is always dark
                  "text-white/90 hover:text-white",
                  location.pathname === link.href && "text-white"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[3px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100",
                  // Always white underline
                  "bg-white",
                  location.pathname === link.href && "scale-x-100" // Active indicator
                )} />
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle (Visible only on mobile) */}
        <div className="lg:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 transition-colors duration-300",
              "text-white" // Always white since background is dark
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
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-[15px] font-bold tracking-[0.1em] uppercase py-2 transition-colors duration-300",
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="lg" asChild className="mt-4 mx-auto w-fit">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}