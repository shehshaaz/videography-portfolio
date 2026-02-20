import React from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const skills = [
        { en: 'Cinematic Storytelling', ar: 'السرد السينمائي' },
        { en: 'Color Grading', ar: 'تدرج الألوان' },
        { en: 'Reels & Content', ar: 'ريلز ومحتوى' },
        { en: 'Commercial Ads', ar: 'الإعلانات التجارية' },
        { en: 'Content Strategy', ar: 'استراتيجية المحتوى' },
        { en: 'Brand Storytelling', ar: 'قصص العلامات التجارية' },
    ];

    const stats = [
        { num: '3+', label: 'Years', labelAr: 'سنوات' },
        { num: '80+', label: 'Projects', labelAr: 'مشروع' },
        { num: '40+', label: 'Clients', labelAr: 'عميل' },
    ];

    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                {/* ── Text Content ── */}
                <div ref={ref} className="md:w-1/2">

                    {/* Arabic sub-label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        <p
                            className="text-chaos-gold/50 text-2xl mb-1"
                            style={{ fontFamily: '"Scheherazade New", serif', direction: 'rtl' }}
                        >
                            من أنا
                        </p>
                        <span className="section-label">About The Creator</span>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-syne font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        MORE THAN A LENS —
                        <br />
                        A <span className="gold-shimmer">CREATOR.</span>
                    </motion.h2>

                    <motion.p
                        className="text-gray-400 text-lg leading-relaxed mb-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        I am a passionate <span className="text-white font-medium">Videographer & Content Creator</span> dedicated to transforming raw moments into cinematic masterpieces. Whether it's a high-end wedding film, a viral reel, a brand commercial, or a full content strategy — my goal is to tell your story with intense visuals, emotional depth, and a scroll-stopping edge.
                    </motion.p>

                    {/* Arabic Quote */}
                    <motion.p
                        className="text-chaos-gold/40 text-xl mb-8 font-medium"
                        style={{ fontFamily: '"Scheherazade New", serif', direction: 'rtl', textAlign: 'right' }}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.55, duration: 0.6 }}
                    >
                        "الفخامة في أبسط تفاصيلها"
                    </motion.p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="glass-gold px-4 py-2 rounded-full group cursor-default"
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                            >
                                <span className="text-sm text-gray-300 group-hover:text-chaos-gold transition-colors">{skill.en}</span>
                                <span
                                    className="block text-[10px] text-chaos-gold/40 group-hover:text-chaos-gold/60 transition-colors"
                                    style={{ fontFamily: '"Scheherazade New", serif', direction: 'rtl' }}
                                >
                                    {skill.ar}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                                className="text-center"
                            >
                                <p className="text-3xl font-syne font-bold gold-shimmer">{s.num}</p>
                                <p className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</p>
                                <p
                                    className="text-chaos-gold/30 text-xs"
                                    style={{ fontFamily: '"Scheherazade New", serif' }}
                                >{s.labelAr}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Image ── */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        className="relative z-10 aspect-[3/4] overflow-hidden rounded-lg"
                        style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(201,162,39,0.08)' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.9 }}
                    >
                        {/* Gold corner ornaments on image */}
                        <div className="absolute top-3 left-3 w-8 h-8 border-l border-t border-chaos-gold/50 z-30" />
                        <div className="absolute top-3 right-3 w-8 h-8 border-r border-t border-chaos-gold/50 z-30" />
                        <div className="absolute bottom-3 left-3 w-8 h-8 border-l border-b border-chaos-gold/50 z-30" />
                        <div className="absolute bottom-3 right-3 w-8 h-8 border-r border-b border-chaos-gold/50 z-30" />

                        <div className="absolute inset-0 bg-gradient-to-t from-chaos-black/80 via-transparent to-transparent z-20" />
                        <img
                            src="/photo/aboutme.jpeg"
                            alt="شهشاز — Videographer"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                    </motion.div>

                    {/* Ambient glow blobs */}
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-chaos-gold/8 rounded-full blur-3xl z-0" />
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-chaos-gold/5 rounded-full blur-3xl z-0" />
                </div>
            </div>
        </section>
    );
};

export default About;
