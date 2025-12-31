import { useEffect, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { CircleDollarSign, TrendingUp, Users, Linkedin, Twitter, Instagram } from 'lucide-react';
import heroImage from '@/assets/hero-living-room.jpg';
import project1 from '@/assets/project-1.jpg'; // Placeholder for team/collage

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const teamMembers = [
    { name: "Arjun Mehta", role: "Principal Architect", image: project1 },
    { name: "Sara Ali", role: "Interior Designer", image: project1 },
    { name: "Rohan Das", role: "Project Manager", image: project1 },
    { name: "Priya Sharma", role: "3D Visualizer", image: project1 },
    { name: "Vikram Singh", role: "Site Supervisor", image: project1 },
    { name: "Ananya Roy", role: "Stylist", image: project1 },
];

const About = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    // Autoplay effect
    useEffect(() => {
        if (!api) return;

        let intervalId: NodeJS.Timeout;

        const startAutoplay = () => {
            intervalId = setInterval(() => {
                api.scrollNext();
            }, 4000); // Scroll every 4 seconds
        };

        const stopAutoplay = () => {
            clearInterval(intervalId);
        };

        startAutoplay();

        // Pause on hover
        const carouselElement = api.rootNode();
        if (carouselElement) {
            carouselElement.addEventListener('mouseenter', stopAutoplay);
            carouselElement.addEventListener('mouseleave', startAutoplay);
        }

        return () => {
            stopAutoplay();
            if (carouselElement) {
                carouselElement.removeEventListener('mouseenter', stopAutoplay);
                carouselElement.removeEventListener('mouseleave', startAutoplay);
            }
        };
    }, [api]);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative hero-padding bg-charcoal overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img
                        src={heroImage}
                        alt="About Hero"
                        className="w-full h-full object-cover opacity-30"
                    />
                </motion.div>

                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
                        >
                            Who We Are
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-8"
                        >
                            Designing Spaces with Purpose
                        </motion.h1>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-16 h-px bg-gold origin-left mb-8"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-white/80 text-lg leading-relaxed mb-8"
                        >
                            At Bauhaus-Spaces, we believe interiors should feel intuitive, elegant, and enduring. From modern homes to commercial spaces, our work combines clean aesthetics with practical solutions, tailored to each client’s lifestyle and vision.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-foreground"
                        >
                            Introduction To <span className="text-gold italic">Bauhaus Spaces</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-muted-foreground leading-relaxed">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <p style={{ background: "#ffffff", padding: "16px 20px", border: "1px solid #e5e7eb", borderRadius: "8px", lineHeight: "1.9", textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                                At Bauhaus Spaces, we redefine interior design in Pune by creating spaces that are functional,  elegant, minimalistic and timeless. Design for us is more than aesthetics — it’s about enhancing how you live, work, and interact with your surroundings projects are extractly from the acceptable.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <p style={{ background: "#ffffff", padding: "16px 20px", border: "1px solid #e5e7eb", borderRadius: "8px", lineHeight: "1.9", textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                                We specialize in residential and commercial interiors, transforming homes, offices, and retail spaces into personalized sanctuaries that reflect your style and lifestyle. Every project combines innovative solutions, premium materials, and thoughtful detailing, ensuring a perfect balance of beauty and functionality.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <p style={{ background: "#ffffff", padding: "16px 20px", border: "1px solid #e5e7eb", borderRadius: "8px", lineHeight: "1.9", textAlign: "justify", textJustify: "inter-word", hyphens: "auto" }}>
                                From initial concept to flawless execution, our team manages every stage with precision. With over a decade of experience serving clients across Pune, Baner, Aundh, Kalyani Nagar, Hinjewadi, Koregaon Park, and PCMC, we deliver exceptional interiors that stand the test of time.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-zinc-900 text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 p-10 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <CircleDollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Best Price Guaranteed</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Luxury interiors within your budget — transparent pricing, value-driven solutions, and uncompromised quality across Pune.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/5 p-10 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Finance Analysis</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Smart financial planning for interiors — transparent budgets, detailed cost analysis, and stress-free execution across Pune.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/5 p-10 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Professional Team</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Your vision, our expertise — a dedicated team of architects and designers crafting interiors with precision and style across Pune.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Carousel Section */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">Our Experts</p>
                        <h2 className="font-serif text-4xl md:text-5xl">Work with Our Expert Team</h2>
                    </div>

                    <div className="px-4 md:px-12">
                        <div className="relative">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                setApi={setApi}
                                className="w-full relative px-12 lg:px-20"
                            >
                                <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8 py-4">
                                    {teamMembers.map((member, index) => (
                                        <CarouselItem key={index} className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3">

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="group relative"
                                            >
                                                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md aspect-[3/4]">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-serif text-xl group-hover:text-gold transition-colors">{member.name}</h3>
                                                    <span className="inline-block mt-2 mb-4 px-3 py-1 bg-secondary/50 text-xs uppercase tracking-widest rounded-full text-muted-foreground border border-border/50">{member.role}</span>

                                                    {/* Social Icons */}
                                                    <div className="flex items-center justify-center gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                                        <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Linkedin className="w-4 h-4" /></a>
                                                        <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Twitter className="w-4 h-4" /></a>
                                                        <a href="#" className="text-muted-foreground hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Navigation Arrows - High Visibility */}
                                <CarouselPrevious
                                    className="absolute -left-6 lg:-left-10 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border-2 border-gold/40 shadow-xl text-gold hover:bg-gold hover:text-white rounded-full transition-all duration-300 z-10"
                                />
                                <CarouselNext
                                    className="absolute -right-6 lg:-right-10 top-1/2 -translate-y-1/2 h-12 w-12 bg-white border-2 border-gold/40 shadow-xl text-gold hover:bg-gold hover:text-white rounded-full transition-all duration-300 z-10"
                                />
                            </Carousel>

                            {/* Dots Navigation */}
                            <div className="flex justify-center gap-2 mt-12">
                                {Array.from({ length: count }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${current === index + 1 ? "w-8 bg-gold" : "w-2 bg-neutral-300 hover:bg-gold/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default About;
