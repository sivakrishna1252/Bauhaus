import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import kitchenImage from '@/assets/kitchen-service.jpg';
import bathroomImage from '@/assets/bathroom-service.jpg';
import bedroomImage from '@/assets/bedroom-service.jpg';

const services = [
  {
    title: 'Modular Kitchens',
    description: 'Custom-designed kitchens with premium materials and smart storage solutions.',
    image: kitchenImage,
    href: '/modular-kitchens',
  },
  {
    title: 'Bathroom Design',
    description: 'Transform your bathroom into a luxurious spa-like retreat.',
    image: bathroomImage,
    href: '/bathrooms',
  },
  {
    title: 'Complete Interiors',
    description: 'End-to-end turnkey solutions for your entire home transformation.',
    image: bedroomImage,
    href: '/portfolio',
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={cn(
          "text-center max-w-2xl mx-auto mb-20 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Our Expertise</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Crafting Exceptional Spaces
          </h2>
          <div className={cn(
            "w-16 h-px bg-gold mx-auto mb-6 transition-transform duration-1000 origin-center",
            isVisible ? "scale-x-100" : "scale-x-0"
          )} style={{ transitionDelay: '200ms' }} />
          <p className="text-muted-foreground text-lg leading-relaxed">
            From modular kitchens to complete home interiors, we bring expertise
            and attention to detail in every project we undertake.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={cn(
                "group relative bg-card card-hover transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Image with zoom */}
              <div className={cn(
                "aspect-[4/5] img-scale-reveal",
                isVisible && "is-visible"
              )}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}