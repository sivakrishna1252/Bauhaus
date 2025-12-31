import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import heroImage from '@/assets/project-1.jpg';
import { useState } from 'react';

const faqs = [
    {
        question: 'Do you provide turnkey interior services in Pune?',
        answer:
            'Yes, we offer comprehensive turnkey solutions, covering everything from design and material selection to execution and final handover. Our services include civil work, carpentry, lighting, painting, and furniture installation.',
    },
    {
        question: 'What is the estimated cost for interior design?',
        answer:
            'The cost depends on material selection, customization, and the scope of work. We provide transparent pricing and customized packages tailored to your budget and lifestyle requirements.',
    },
    {
        question: 'How long does it take to complete a project?',
        answer:
            'A standard residential interior project typically takes 45 to 60 days for completion, depending on the size and complexity. We ensure timely delivery with a structured project management plan.',
    },
    {
        question: 'Do you offer a warranty on your interiors?',
        answer:
            'Yes, we provide a 10-year warranty on modular furniture and finishes, ensuring long-lasting quality and peace of mind for our clients.',
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
