import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import heroImage1 from '@/assets/hero-living-room.jpg';
import heroImage2 from '@/assets/kitchen-service.jpg';
import heroImage3 from '@/assets/bedroom-service.jpg';

const slides = [
  {
    image: heroImage1,
    subtitle: "Premium Interior Design Studio",
    title: "Transform Your Space Into Something",
    highlight: "Extraordinary",
    description: "End-to-end interior solutions with 10-year warranty. From concept to completion, we bring your dream home to life."
  },
  {
    image: heroImage2,
    subtitle: "Modern Modular Kitchens",
    title: "Culinary Havens Crafted For Your",
    highlight: "Lifestyle",
    description: "Experience the perfect blend of functionality and aesthetics with our custom-designed modular kitchens."
  },
  {
    image: heroImage3,
    subtitle: "Luxury Bedroom Design",
    title: "Sanctuaries of Comfort and",
    highlight: "Elegance",
    description: "Create your personal retreat with our bespoke bedroom designs, tailored to your unique style and needs."
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider with Cross-fade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src={slides[currentImageIndex].image}
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-gold text-sm tracking-[0.4em] uppercase mb-8 font-semibold"
              >
                {slides[currentImageIndex].subtitle}
              </motion.p>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-8"
              >
                {slides[currentImageIndex].title}{' '}
                <span className="italic text-gold-light">{slides[currentImageIndex].highlight}</span>
              </motion.h1>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-24 h-px bg-gold origin-left mb-8"
              />

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
              >
                {slides[currentImageIndex].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="elegant-light" size="xl" asChild>
                  <Link to="/portfolio">
                    View Portfolio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="gold" size="xl" asChild>
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-1 transition-all duration-300 rounded-full",
              index === currentImageIndex
                ? "w-8 bg-gold"
                : "w-4 bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}