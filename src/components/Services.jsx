import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Film, Instagram, MonitorPlay, Zap, Aperture } from 'lucide-react';

const Services = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const services = [
        {
            icon: <Film size={32} />,
            title: 'Event Videography',
            desc: 'High-quality coverage for weddings, birthdays, and corporate events.'
        },
        {
            icon: <Zap size={32} />,
            title: 'Product Ads',
            desc: 'Dynamic commercials that grab attention and drive sales.'
        },
        {
            icon: <Instagram size={32} />,
            title: 'Social Content',
            desc: 'Trending reels and shorts optimized for engagement.'
        },
        {
            icon: <MonitorPlay size={32} />,
            title: 'Corporate Videos',
            desc: 'Professional brand stories, interviews, and internal comms.'
        },
        {
            icon: <Aperture size={32} />,
            title: 'Drone Videography',
            desc: 'Breathtaking aerial shots to add scale to your projects.'
        },
        {
            icon: <Camera size={32} />,
            title: 'Photography',
            desc: 'Complementary still photography for your events.'
        }
    ];

    return (
        <section id="services" className="bg-chaos-black py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-2">What I Do</h4>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white">MY SERVICES</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="p-8 border border-white/5 bg-white/5 backdrop-blur-sm rounded-xl hover:border-chaos-gold/50 transition-all group"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="text-chaos-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-syne text-white mb-3 group-hover:text-chaos-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
