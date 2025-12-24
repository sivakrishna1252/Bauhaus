import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer
      ref={ref}
      className="bg-charcoal text-background/90"
    >
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div
            className={cn(
              "lg:col-span-1 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "0ms" }}
          >
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="logo" />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Premium interior design solutions in Pune. We transform spaces into extraordinary living experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Thebauhausdesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-charcoal transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/bauhaus.spaces/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-charcoal transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@bauhausspaces"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-charcoal transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <h4 className="font-serif text-xl text-background mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/portfolio', label: 'Our Portfolio' },
                { href: '/modular-kitchens', label: 'Modular Kitchens' },
                { href: '/bathrooms', label: 'Bathrooms' },
                { href: '/how-it-works', label: 'How It Works' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <h4 className="font-serif text-xl text-background mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Full Home Interiors',
                'Modular Kitchens',
                'Bathroom Renovations',
                'Civil Work',
                'Furniture Design',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "450ms" }}
          >
            <h4 className="font-serif text-xl text-background mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-background/60">
                  C-4, 2nd Floor, Hermes Vishal,<br />
                  Lane no. 7, Koregaon Park, Pune
                </span>
              </li>
              <li>
                <a
                  href="tel:+918085010847"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-gold transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  +91 808 5010 847
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bauhauspaces.com"
                  className="flex items-center gap-3 text-sm text-background/60 hover:text-gold transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  info@bauhauspaces.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={cn(
          "border-t border-background/10 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
        style={{ transitionDelay: "600ms" }}
      >
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} BauHaus Spaces. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-background/40">10-Year Warranty</span>
            <span className="text-xs text-background/40">Premium Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
