import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Headset } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-living-room.jpg';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black/40 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <img src={heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-4 tracking-wide"
          >
            CONTACT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.2em] uppercase"
          >
            Home &gt; Contact
          </motion.p>
        </div>
      </section>

      {/* LOCATION SECTION – UPDATED */}
      <section className="py-20 bg-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container-custom max-w-5xl text-center"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-black mb-8">LOCATION</p>
          <br>
          </br>

          {/* MAP */}
          {/* FULL WIDTH MAP */}
          <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-20">
            <div
              className="w-full h-[600px] overflow-hidden cursor-pointer"
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/search/?api=1&query=Hermes+Vishal+Koregaon+Park+Pune',
                  '_blank'
                )
              }
            >
              <iframe
                src="https://www.google.com/maps?q=Hermes%20Vishal%20Koregaon%20Park%20Pune&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>


          {/* ADDRESS */}
          <p className="max-w-3xl mx-auto font-medium text-lg md:text-xl text-foreground leading-snug mb-8">
            C-4, 2nd Floor, Hermes Vishal, Lane No. 7, Koregaon Park, Pune <span className="whitespace-nowrap">411001</span>
          </p>

          <Button
            className="bg-black text-white hover:bg-zinc-800 rounded-full px-10 py-6 text-xs tracking-widest uppercase"
            onClick={() =>
              window.open(
                'https://www.google.com/maps/search/?api=1&query=Hermes+Vishal+Koregaon+Park+Pune',
                '_blank'
              )
            }
          >
            Find Us On Map
          </Button>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-background border-t border-b border-border/40">
        <div className="container-custom grid grid-cols-1 md:grid-cols-3">
          {[{
            icon: <Phone className="w-8 h-8" />,
            title: 'Make a Call',
            desc: 'For general enquiries',
            value: '+91 808 5010 847',
          }, {
            icon: <Mail className="w-8 h-8" />,
            title: 'Send a Mail',
            desc: 'For general enquiries',
            value: 'info@bauhauspaces.com',
          }, {
            icon: <Headset className="w-8 h-8" />,
            title: 'Support',
            desc: 'Existing clients',
            value: '1800-123-4567',
          }].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-serif text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
              <p className="font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form – UNCHANGED */}
      <section className="py-24 bg-secondary/30">
        <div className="container-custom max-w-5xl">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 shadow-sm text-center"
          >
            <p className="font-cursive text-gold text-2xl mb-2">Drop A Line</p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">
              SEND YOUR MESSAGE
            </h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" />

              <Input placeholder="Mobile Number" />
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Configuration of Property ?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1bhk">1BHK</SelectItem>
                  <SelectItem value="2bhk">2BHK</SelectItem>
                  <SelectItem value="3bhk">3BHK</SelectItem>
                  <SelectItem value="4bhk">4BHK+</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Budget ?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1bhk">10 -12 L</SelectItem>
                  <SelectItem value="2bhk">12 -15 L</SelectItem>
                  <SelectItem value="3bhk">15 -20 L</SelectItem>
                  <SelectItem value="4bhk">20 -25 L</SelectItem>
                  <SelectItem value="commercial">25 -30 L</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Message..."
                className="md:col-span-2 resize-none"
              />
              <div className="md:col-span-2">
                <Button className="bg-black text-white rounded-full px-10 py-6 text-xs tracking-widest uppercase">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
