import React from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const skills = [
        'Cinematic Storytelling',
        'Color Grading',
        'Reels Editing',
        'Commercial Ads'
    ];

    return (
        <section id="about" className="bg-chaos-dark py-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16">

                {/* Text Content */}
                <div ref={ref} className="md:w-1/2">
                    <motion.h4
                        className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        About The Creator
                    </motion.h4>
                    <motion.h2
                        className="text-4xl md:text-5xl font-syne font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        NOT JUST A CAMERA,<br />
                        BUT A <span className="text-chaos-red">VISION</span>.
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        I am a passionate freelance videographer dedicated to transforming raw moments into cinematic masterpieces. Whether it's a wedding, a fast-paced commercial, or a viral Instagram reel, my goal is to tell your story with intense visuals and emotional depth.
                    </motion.p>

                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 bg-white/5 backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Image Placeholder */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        className="relative z-10 aspect-[3/4] overflow-hidden rounded-lg shadow-2xl shadow-chaos-gold/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-chaos-black/80 via-transparent to-transparent z-20" />
                        <img
                            src="/photo/aboutme.jpeg"
                            alt="Videographer"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </motion.div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-chaos-gold/10 rounded-full blur-3xl z-0" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-chaos-red/10 rounded-full blur-3xl z-0" />
                </div>
            </div>
        </section>
    );
};

export default About;
