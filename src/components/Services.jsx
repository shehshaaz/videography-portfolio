import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Film, Instagram, MonitorPlay, Zap, Aperture, Pen } from 'lucide-react';

const Services = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const services = [
        {
            icon: <Film size={28} />,
            title: 'Event Videography',
            titleAr: 'تصوير الفعاليات',
            desc: 'High-quality cinematic coverage for weddings, birthdays, and corporate events.',
        },
        {
            icon: <Pen size={28} />,
            title: 'Content Creation',
            titleAr: 'صناعة المحتوى',
            desc: 'End-to-end content creation — ideation, scripting, shooting, and editing tailored for brands & creators.',
        },
        {
            icon: <Zap size={28} />,
            title: 'Product Ads',
            titleAr: 'الإعلانات التجارية',
            desc: 'Dynamic commercials that grab attention and drive results.',
        },
        {
            icon: <Instagram size={28} />,
            title: 'Social Media Content',
            titleAr: 'محتوى منصات التواصل',
            desc: 'Trending reels, shorts & social-first content engineered for maximum reach and engagement.',
        },
        {
            icon: <MonitorPlay size={28} />,
            title: 'Corporate Videos',
            titleAr: 'الفيديو المؤسسي',
            desc: 'Professional brand stories, interviews, and internal communications.',
        },
        {
            icon: <Aperture size={28} />,
            title: 'Drone Videography',
            titleAr: 'التصوير الجوي',
            desc: 'Breathtaking aerial cinematography to add grand scale to your projects.',
        },
        {
            icon: <Camera size={28} />,
            title: 'Photography',
            titleAr: 'التصوير الفوتوغرافي',
            desc: 'Complementary still photography that tells the story between each frame.',
        },
    ];

    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            {/* Subtle arabesque background */}
            <div className="absolute inset-0 pattern-arabesque opacity-100 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chaos-gold/20 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl text-chaos-gold/40 mb-2"
                        style={{ fontFamily: '"Scheherazade New", serif' }}
                    >
                        خدماتي
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="arabesque-divider mb-4"
                    >
                        <span className="section-label">What I Do</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-syne font-bold text-white"
                    >
                        MY <span className="gold-shimmer">SERVICES</span>
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass-gold p-8 rounded-xl group cursor-default relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-chaos-gold/20 rounded-tr-xl" />

                            {/* Icon */}
                            <div className="text-chaos-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title bilingual */}
                            <h3 className="text-lg font-bold font-syne text-white mb-1 group-hover:text-chaos-gold transition-colors">
                                {service.title}
                            </h3>
                            <p
                                className="text-chaos-gold/35 text-sm mb-3 group-hover:text-chaos-gold/55 transition-colors"
                                style={{ fontFamily: '"Scheherazade New", serif', direction: 'rtl', textAlign: 'right' }}
                            >
                                {service.titleAr}
                            </p>

                            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                {service.desc}
                            </p>

                            {/* Bottom gold line reveal */}
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-chaos-gold/60 to-transparent group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chaos-gold/20 to-transparent" />
        </section>
    );
};

export default Services;
