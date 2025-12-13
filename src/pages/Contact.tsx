import { Layout } from '@/components/layout/Layout';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['C-4, 2nd Floor, Hermes Vishal,', 'Lane no. 7, Koregaon Park, Pune'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 808 5010 847'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@bauhauspaces.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 10:00 AM - 7:00 PM'],
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-gold text-sm tracking-[0.4em] uppercase mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-8"
            >
              Contact Us
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
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Ready to transform your space? Reach out to us for a free consultation 
              and let us bring your vision to life.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                Send Us a Message
              </h2>
              <div className={cn(
                "w-12 h-px bg-gold mb-10 transition-transform duration-1000 origin-left",
                isVisible ? "scale-x-100" : "scale-x-0"
              )} style={{ transitionDelay: '200ms' }} />
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '100ms' }}>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-border focus:border-gold h-14 text-base"
                    placeholder="Your name"
                  />
                </div>
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '200ms' }}>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border focus:border-gold h-14 text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-secondary border-border focus:border-gold h-14 text-base"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
                <div className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '300ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3 tracking-wide">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary border-border focus:border-gold resize-none text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className={cn(
                  "transition-all duration-700",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )} style={{ transitionDelay: '400ms' }}>
                  <Button variant="elegant" size="xl" type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
            style={{ transitionDelay: '200ms' }}
            >
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">
                Contact Information
              </h2>
              <div className={cn(
                "w-12 h-px bg-gold mb-10 transition-transform duration-1000 origin-left",
                isVisible ? "scale-x-100" : "scale-x-0"
              )} style={{ transitionDelay: '400ms' }} />
              
              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <div 
                    key={info.title} 
                    className={cn(
                      "flex gap-6 group transition-all duration-700",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <info.icon className="w-6 h-6 text-gold group-hover:text-background transition-colors duration-500" />
                    </div>
                    <div className="pt-1">
                      <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className={cn(
                "mt-14 aspect-video bg-secondary flex items-center justify-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )} style={{ transitionDelay: '700ms' }}>
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
                  <p className="text-muted-foreground">Koregaon Park, Pune</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;