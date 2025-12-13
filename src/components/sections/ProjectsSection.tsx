import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const projects = [
  {
    title: 'Modern Family Residence',
    client: 'Mr. Somesh & Priyanka',
    location: 'Koregaon Park, Pune',
    image: project1,
  },
  {
    title: 'Contemporary Villa',
    client: 'Mr. Prashant & Mrs. Vatika',
    location: 'Kalyani Nagar, Pune',
    image: project2,
  },
  {
    title: 'Luxury Penthouse',
    client: 'Mr. Upendra',
    location: 'Viman Nagar, Pune',
    image: project3,
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div className={cn(
          "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <div>
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Featured Work</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Our Projects
            </h2>
            <div className={cn(
              "w-16 h-px bg-gold mt-6 transition-transform duration-1000 origin-left",
              isVisible ? "scale-x-100" : "scale-x-0"
            )} style={{ transitionDelay: '200ms' }} />
          </div>
          <Button variant="elegant-outline" size="lg" asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Featured Large Project */}
          <Link
            to="/portfolio"
            className={cn(
              "group relative lg:row-span-2 card-hover transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: '150ms' }}
          >
            <div className={cn(
              "aspect-[4/5] lg:aspect-auto lg:h-full img-scale-reveal",
              isVisible && "is-visible"
            )}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <p className="text-gold-light text-sm tracking-widest uppercase mb-3">{projects[0].location}</p>
              <h3 className="font-serif text-2xl lg:text-4xl text-background mb-3 group-hover:translate-x-2 transition-transform duration-500">{projects[0].title}</h3>
              <p className="text-background/70">{projects[0].client}</p>
            </div>
          </Link>

          {/* Smaller Projects */}
          {projects.slice(1).map((project, index) => (
            <Link
              key={project.title}
              to="/portfolio"
              className={cn(
                "group relative card-hover transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${(index + 2) * 150}ms` }}
            >
              <div className={cn(
                "aspect-[16/10] img-scale-reveal",
                isVisible && "is-visible"
              )}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-gold-light text-xs tracking-widest uppercase mb-2">{project.location}</p>
                <h3 className="font-serif text-xl lg:text-2xl text-background mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                <p className="text-background/70 text-sm">{project.client}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}