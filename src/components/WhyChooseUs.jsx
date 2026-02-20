import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, CheckCircle2, Star } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Zap size={28} />,
            title: '4K Cinematic Quality',
            titleAr: 'جودة سينمائية 4K',
            desc: 'Crystal-clear footage with professional color grading that makes every frame a masterpiece.',
        },
        {
            icon: <Clock size={28} />,
            title: 'Fast Delivery',
            titleAr: 'تسليم سريع',
            desc: 'Quick turnaround without ever compromising on the quality you deserve.',
        },
        {
            icon: <CheckCircle2 size={28} />,
            title: 'Creative Direction',
            titleAr: 'إخراج إبداعي',
            desc: 'Expert guidance on compositions, storytelling, and visual narrative.',
        },
        {
            icon: <Star size={28} />,
            title: 'Premium Excellence',
            titleAr: 'التميز الفاخر',
            desc: 'A luxury approach to every project — because you deserve the best.',
        },
    ];

    return (
        <section className="bg-chaos-black py-24 px-6 relative overflow-hidden">
            {/* Gold radial accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chaos-gold/3 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chaos-gold/15 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-chaos-gold/30 text-3xl mb-2"
                        style={{ fontFamily: '"Scheherazade New", serif' }}
                    >
                        وعدي لك
                    </motion.p>

                    <div className="arabesque-divider mb-4">
                        <span className="section-label">My Promise</span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-syne font-bold text-white"
                    >
                        WHY <span className="gold-shimmer">CHOOSE ME?</span>
                    </motion.h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group p-8 relative overflow-hidden cursor-default"
                            style={{
                                background: 'linear-gradient(135deg, rgba(201,162,39,0.04) 0%, transparent 60%)',
                                border: '1px solid rgba(201,162,39,0.1)',
                            }}
                            whileHover={{ y: -8, borderColor: 'rgba(201,162,39,0.3)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {/* Corner ornament */}
                            <div className="absolute top-0 right-0 w-10 h-10 border-r border-t border-chaos-gold/20 group-hover:border-chaos-gold/40 transition-colors" />

                            <div className="text-chaos-gold/50 mb-5 group-hover:text-chaos-gold group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-base font-bold font-syne text-white mb-1 group-hover:text-chaos-gold transition-colors">
                                {feature.title}
                            </h3>
                            <p
                                className="text-chaos-gold/25 text-xs mb-3 group-hover:text-chaos-gold/45 transition-colors"
                                style={{ fontFamily: '"Scheherazade New", serif', direction: 'rtl', textAlign: 'right' }}
                            >
                                {feature.titleAr}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                                {feature.desc}
                            </p>

                            {/* Bottom shimmer line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-chaos-gold/60 to-transparent group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
