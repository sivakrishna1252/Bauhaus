import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import heroImage from '@/assets/project-1.jpg';
import { useState } from 'react';

const faqs = [
    {
        question: 'How can I get in touch with Bau Haus Spaces?',
        answer:
            'You can reach us at info@bauhauspaces.com or call us at +91 8085010847. Our designer will contact you to understand your requirements and schedule a detailed consultation.',
    },
    {
        question: 'How much does it cost to design a 1BHK, 2BHK, or 3BHK?',
        answer:
            'The cost depends on your requirements, materials, and scope of work. Please contact our team for an exact quotation.',
    },
    {
        question: 'What services does Bau Haus Spaces offer?',
        answer:
            'We offer turnkey home interiors, modular kitchens, wardrobes, civil work, furniture design, and complete interior solutions.',
    },
    {
        question: 'What types of interior projects do you specialize in?',
        answer:
            'We specialize in modern, luxury, and functional residential interior projects.',
    },
    {
        question: 'How many days does it take to complete the interior work?',
        answer:
            'Typically 45–60 days for 2BHK and up to 90 days for 3BHK projects.',
    },
    {
        question: 'What is your refund policy?',
        answer:
            'A full refund is applicable only within 48 hours of advance payment, provided the design phase has not started.',
    },
    {
        question: 'What is the design process at Bau Haus Spaces?',
        answer:
            'Consultation → Concept Design → Approvals → Execution → Final Handover.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Layout>
            {/* HERO SECTION (UNCHANGED) */}
            <section className="relative hero-padding bg-charcoal overflow-hidden">
                <img
                    src={heroImage}
                    alt="FAQ"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="container-custom relative z-10">
                    <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
                        Frequently Asked Questions
                    </p>
                    <h1 className="font-serif text-5xl md:text-6xl text-background">
                        FAQ
                    </h1>
                </div>
            </section>

            {/* FAQ LIST */}
            <section className="bg-white py-20">
                <div className="container-custom max-w-4xl space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                layout
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="
                    w-full
                    flex
                    justify-between
                    items-center
                    px-6
                    py-5
                    rounded-lg
                    bg-charcoal
                    text-white
                    text-left
                    font-medium
                  "
                                >
                                    {faq.question}
                                    <span className="text-2xl font-light">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {/* ANSWER (SMOOTH ANIMATION) */}
                                <motion.div
                                    layout
                                    initial={false}
                                    animate={{
                                        opacity: isOpen ? 1 : 0,
                                        height: isOpen ? 'auto' : 0,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                    overflow-hidden
                    bg-[#f4efe9]
                    rounded-b-lg
                    text-gray-700
                    text-sm
                  "
                                >
                                    <div className="px-6 py-4 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}
