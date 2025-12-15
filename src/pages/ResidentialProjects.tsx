import { Layout } from '@/components/layout/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import project1 from '@/assets/project-1.jpg';
import heroImage from '@/assets/hero-living-room.jpg';

const residentialProjects = [
    {
        title: 'Modern Family Residence',
        client: 'Mr. Somesh & Priyanka',
        location: 'Koregaon Park, Pune',
        image: project1,
        description: 'A contemporary home featuring open-plan living spaces with warm, neutral tones.',
    },
    {
        title: 'Serene Apartment',
        client: 'Rahul & Nisha',
        location: 'Baner, Pune',
        image: heroImage,
        description: 'Minimalist design focused on creating calm, functional living spaces.',
    },
];

const ResidentialProjects = () => {
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
                        src={project1}
                        alt="Residential Projects Hero"
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
                            Residential Projects
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
                            Crafting personalized homes that reflect your unique lifestyle and taste.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding bg-background" ref={ref}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                        {residentialProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className={cn(
                                    "group card-hover transition-all duration-700",
                                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                )}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className={cn(
                                    "aspect-[16/12] img-scale-reveal mb-8",
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
                            Ready to build your dream home?
                        </p>
                        <Button variant="elegant" size="xl" asChild>
                            <Link to="/contact">Start Your Residential Project</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ResidentialProjects;
