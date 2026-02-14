import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Zap, DollarSign } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Zap size={32} />,
            title: '4K Cinematic Quality',
            desc: 'Crystal clear footage with professional color grading.'
        },
        {
            icon: <Clock size={32} />,
            title: 'Fast Delivery',
            desc: 'Quick turnaround times without compromising quality.'
        },
        {
            icon: <CheckCircle2 size={32} />,
            title: 'Creative Direction',
            desc: 'Expert guidance on poses, scenes, and storytelling.'
        },
        {
            icon: <DollarSign size={32} />,
            title: 'Affordable Packages',
            desc: 'Premium plans tailored to fit your budget.'
        }
    ];

    return (
        <section className="bg-chaos-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-2">My Promise</h4>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white">WHY CHOOSE ME?</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-chaos-red/40 transition-all duration-300 group"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-gray-400 mb-6 group-hover:text-chaos-red transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold font-syne text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
