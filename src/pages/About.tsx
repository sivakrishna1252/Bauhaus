import { useEffect, useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
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

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 4000); // Scroll every 4 seconds

        return () => clearInterval(intervalId);
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
                            About Us
                        </motion.h1>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="w-16 h-px bg-gold origin-left mb-8"
                        />
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
                            <p>
                                At Bauhaus Spaces, we believe that design is not just about aesthetics but about creating environments that enhance the way you live. Our approach is rooted in the principles of functionality, simplicity, and elegance.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <p>
                                We specialize in transforming residential and commercial spaces into personalized sanctuaries. With a keen eye for detail and a passion for innovation, our team ensures every project is a masterpiece of comfort and style.
                            </p>
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.4 }}
                        >
                            <p>
                                From concept to execution, we handle everything with precision. Our commitment to quality and client satisfaction drives us to push boundaries and deliver exceptional results that stand the test of time.
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
                            className="bg-white/5 p-10 rounded-sm hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <CircleDollarSign className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Best Price Guaranteed</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                We offer transparent pricing and value-driven solutions, ensuring you get the best design for your budget without compromising on quality.
                            </p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white/5 p-10 rounded-sm hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Finance Analysis</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Our experts assist with detailed cost breakdown and financial planning to keep your renovation project on track and stress-free.
                            </p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-white/5 p-10 rounded-sm hover:bg-white/10 transition-colors border border-white/10 group"
                        >
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="font-serif text-xl mb-3">Professional Team</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Work with a dedicated team of architects, designers, and project managers who are passionate about bringing your vision to life.
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
                        <h2 className="font-serif text-4xl md:text-5xl">Meet The Team</h2>
                    </div>

                    <div className="px-4 md:px-12">
                        <div className="relative">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                setApi={setApi}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-6 py-4">
                                    {teamMembers.map((member, index) => (
                                        <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="group relative"
                                            >
                                                <div className="relative overflow-hidden rounded-xl mb-6 shadow-md aspect-[3/4]">
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
