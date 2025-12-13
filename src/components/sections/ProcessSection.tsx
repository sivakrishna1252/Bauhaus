import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import consultationImage from '@/assets/consultation.jpg';

const steps = [
  {
    number: '01',
    title: 'Meet Our Designer',
    description: "Share your vision, floor plans, and budget. We will guide you through the possibilities.",
  },
  {
    number: '02',
    title: 'Book Us',
    description: 'Start with 10% payment and welcome us as your design partners.',
  },
  {
    number: '03',
    title: 'Finalize Design',
    description: 'Approve layouts, 3D visuals, materials, and fabrications.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Our expert team brings your design to life with precision.',
  },
  {
    number: '05',
    title: 'Move In',
    description: 'Your dream space is ready. Welcome home!',
  },
];

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={cn(
            "relative transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="aspect-square overflow-hidden">
              <img
                src={consultationImage}
                alt="Interior design consultation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden lg:block" />
          </div>

          {/* Content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Process</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              5 Steps to Your Dream Space
            </h2>

            <div className="space-y-6 mb-10">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={cn(
                    "flex gap-6 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <span className="text-gold font-serif text-2xl shrink-0 w-12">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-serif text-xl text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="elegant" size="lg" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
