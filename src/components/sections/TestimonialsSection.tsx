import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "The team at BauHaus Spaces transformed our home beyond our expectations. Their attention to detail and commitment to quality is unmatched.",
    author: "Mr. Neeraj Ojha",
    location: "Pune",
  },
  {
    quote: "Professional, creative, and incredibly responsive. They understood our vision perfectly and delivered a stunning modern kitchen.",
    author: "Rahul & Nisha",
    location: "Koregaon Park",
  },
];

const statsCodes = [
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '', label: 'Year Warranty' },
];

function Counter({ value, suffix, className }: { value: number; suffix: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="section-padding bg-charcoal" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={cn(
          "text-center max-w-2xl mx-auto mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-background">
            What Our Clients Say
          </h2>
          <div className={cn(
            "w-16 h-px bg-gold mx-auto mt-6 transition-transform duration-1000 origin-center",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} style={{ transitionDelay: '200ms' }} />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={cn(
                "relative p-10 lg:p-14 border border-background/10 card-hover transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <Quote className="w-12 h-12 text-gold/30 mb-8" />
              <p className="text-background/85 text-xl leading-relaxed mb-10 italic font-serif">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-background font-medium text-lg">{testimonial.author}</p>
                <p className="text-background/50 text-sm mt-1">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 pt-16 border-t border-background/10 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}
          style={{ transitionDelay: '400ms' }}
        >
          {statsCodes.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              )}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <p className="font-serif text-5xl md:text-6xl text-gold mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-background/60 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}