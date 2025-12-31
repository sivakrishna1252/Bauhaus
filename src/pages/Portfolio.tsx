import { Layout } from '@/components/layout/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const projects = [
  {
    title: 'Modern Family Residence',
    client: 'Mr. Somesh & Priyanka',
    location: 'Koregaon Park, Pune',
    image: project1,
    description: 'A contemporary residential interior in Koregaon Park, Pune, featuring open-plan living spaces, warm neutral tones, and a functional layout designed for modern family living. This home blends style and comfort, creating a personalized sanctuary that reflects the client’s taste while maximizing space and natural light.',
  },
  {
    title: 'Contemporary Villa',
    client: 'Mr. Prashant & Mrs. Vatika',
    location: 'Kalyani Nagar, Pune',
    image: project2,
    description: 'A contemporary residential villa interior in Kalyani Nagar, Pune, designed to seamlessly blend modern aesthetics with traditional comfort. The space features elegant layouts, premium finishes, and thoughtfully curated design details, creating a luxurious yet functional environment tailored to the client’s lifestyle.',
  },
  {
    title: 'Luxury Penthouse',
    client: 'Mr. Upendra',
    location: 'Viman Nagar, Pune',
    image: project3,
    description: 'A luxury penthouse interior in Viman Nagar, Pune, designed as a sophisticated urban retreat. The space features panoramic city views, premium finishes, and contemporary design elements, creating a refined and functional living experience tailored to modern lifestyles.',
  },
  {
    title: 'Serene Apartment',
    client: 'Rahul & Nisha',
    location: 'Baner, Pune',
    image: heroImage,
    description: 'A minimalist residential interior in Baner, Pune, designed to create calm, functional, and uncluttered living spaces. This apartment combines clean lines, neutral tones, and thoughtful layouts, offering a serene sanctuary that reflects the client’s lifestyle while maximizing comfort and practicality.',
  },
  {
    title: 'Urban Office Space',
    client: 'Tech Solutions Inc.',
    location: 'Hinjewadi, Pune',
    image: project2,
    description: 'A modern commercial interior in Hinjewadi, Pune, designed as an open-plan office that fosters collaboration and productivity. The workspace combines functional layouts, contemporary design elements, and premium finishes, creating a professional and inspiring environment tailored to the client’s business needs.',
  },
  {
    title: 'Minimalist Studio',
    client: 'Ms. Ananya',
    location: 'Aundh, Pune',
    image: project3,
    description: 'A compact studio apartment in Aundh, Pune, designed with a focus on smart usage of space. The interior features multi-functional furniture, a light color palette, and clever storage solutions, creating a spacious and airy feel within a limited footprint.',
  },
  {
    title: 'Taiken The Pan Asian',
    client: 'Taiken',
    location: 'Kharadi, Pune',
    image: project1,
    description: 'A bold and atmospheric interior design for a Pan Asian restaurant in Kharadi, Pune. The space blends traditional Asian aesthetics with modern industrial elements, creating an immersive dining experience. Features include warm lighting, textured walls, and bespoke seating arrangements.',
  }
];

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
            src={project3}
            alt="Portfolio Hero"
            className="w-full h-full object-cover opacity-40"
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
              Our Work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-background mb-8"
            >
              Our Portfolio
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
              Explore our portfolio — luxury interiors in Pune that seamlessly blend beauty with functionality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "group card-hover transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={cn(
                  "aspect-[16/12] img-scale-reveal mb-8 rounded-2xl overflow-hidden",
                  isVisible && "is-visible"
                )}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">{project.location}</p>
                <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-2">{project.client}</p>
                <p className="text-muted-foreground/70 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={cn(
            "text-center mt-24 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: '500ms' }}>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to create your own story?
            </p>
            <Button variant="elegant" size="xl" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;