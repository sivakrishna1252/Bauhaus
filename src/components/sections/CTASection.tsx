import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className={cn(
          "relative bg-secondary p-12 md:p-20 lg:p-28 text-center transition-all duration-1000",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/30" />

          <p className={cn(
            "text-gold text-sm tracking-[0.4em] uppercase mb-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )} style={{ transitionDelay: '100ms' }}>
            Start Your Journey
          </p>
          
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8 max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )} style={{ transitionDelay: '200ms' }}>
            Ready to Transform Your Space?
          </h2>
          
          <div className={cn(
            "w-16 h-px bg-gold mx-auto mb-8 transition-transform duration-1000 origin-center",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} style={{ transitionDelay: '300ms' }} />
          
          <p className={cn(
            "text-muted-foreground text-lg max-w-xl mx-auto mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )} style={{ transitionDelay: '400ms' }}>
            Book a free consultation with our designers and take the first step 
            towards your dream home.
          </p>
          
          <div className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )} style={{ transitionDelay: '500ms' }}>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="elegant-outline" size="xl" asChild>
              <a href="tel:+918085010847">Call +91 808 5010 847</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}