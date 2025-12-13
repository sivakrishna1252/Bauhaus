import { Layout } from '@/components/layout/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import consultationImage from '@/assets/consultation.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const steps = [
  {
    number: '01',
    title: 'Meet Our Designer',
    subtitle: 'Know Your Goals',
    description: 'Bring in your floor plan and be specific about your needs. We will tackle the problem solving head on and arrive at your desired end goal.',
    details: 'Get a tentative quote - Knowing what budget you have or what you are comfortable spending can be a key piece of information that will help us guide you through this process.',
  },
  {
    number: '02',
    title: 'Book Us',
    subtitle: '10% Payment on Preliminary Quote',
    description: 'Book us with 10% of the preliminary quote. Welcome us onboard as your design partners!',
    details: 'Sign the mutual contract - This is an assurance between the firm and the client that work will be done in a timely and disciplined manner.',
  },
  {
    number: '03',
    title: 'Finalize Design',
    subtitle: 'Design Sign Off',
    description: 'Discuss your preferences in detail, then finalize the layout and 3D visuals. We can now move on to selection of materials and fabrications.',
    details: 'All design details, materials, and fabrications that have been chosen so far in the process will be approved by the client.',
  },
  {
    number: '04',
    title: 'Execution',
    subtitle: '50% Payment, Then 40% on Completion',
    description: 'Vendors are selected according to expertise, craftsmanship, and certification. We guarantee nothing but the best and most professional team.',
    details: 'Our project manager and designers will be in charge of supervising the ongoing work to ensure that everything is carried out correctly and smoothly.',
  },
  {
    number: '05',
    title: 'Handover',
    subtitle: 'Move In',
    description: 'Your space is ready! Move in to your beautifully designed new home and enjoy the transformation.',
    details: 'Get your snag closure report and enjoy your new space with complete peace of mind.',
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative hero-padding bg-charcoal overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={heroImage}
            alt="Interior design process"
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
            >
              Our Process
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-8"
            >
              How It Works
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-px bg-gold origin-left mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-background/80 text-lg leading-relaxed"
            >
              5 simple steps to make your space an ace space. Our structured approach 
              ensures a smooth journey from concept to completion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  "relative pl-24 pb-20 last:pb-0 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className={cn(
                    "absolute left-[27px] top-20 bottom-0 w-px bg-border transition-all duration-1000",
                    isVisible ? "scale-y-100" : "scale-y-0"
                  )} style={{ transitionDelay: `${index * 150 + 200}ms`, transformOrigin: 'top' }} />
                )}

                {/* Number */}
                <div className={cn(
                  "absolute left-0 top-0 w-14 h-14 bg-gold text-background font-serif text-xl flex items-center justify-center transition-all duration-500",
                  isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                )} style={{ transitionDelay: `${index * 150}ms` }}>
                  {step.number}
                </div>

                {/* Content */}
                <div className="group">
                  <h3 className="font-serif text-3xl lg:text-4xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{step.title}</h3>
                  <p className="text-gold text-sm tracking-widest uppercase mb-6">{step.subtitle}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{step.description}</p>
                  <p className="text-muted-foreground/70 leading-relaxed">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary" ref={ctaRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className={cn(
              "aspect-square img-scale-reveal transition-all duration-1000",
              ctaVisible ? "opacity-100 translate-x-0 is-visible" : "opacity-0 -translate-x-12"
            )}>
              <img
                src={consultationImage}
                alt="Design consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className={cn(
              "transition-all duration-1000",
              ctaVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )} style={{ transitionDelay: '200ms' }}>
              <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Ready to Start?</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Your Dream Space Awaits
              </h2>
              <div className={cn(
                "w-16 h-px bg-gold mb-8 transition-transform duration-1000 origin-left",
                ctaVisible ? "scale-x-100" : "scale-x-0"
              )} style={{ transitionDelay: '400ms' }} />
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                We are here to guide you through every step of the process. 
                Book your free consultation today and let us bring your vision to life.
              </p>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;