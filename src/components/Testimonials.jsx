import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: 'Sarah & Mike',
            role: 'Wedding Clients',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
            text: 'ChaosTude captured our wedding day perfectly. The cinematic style made us feel like movie stars!'
        },
        {
            id: 2,
            name: 'Alex Johnson',
            role: 'Marketing Director',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
            text: 'Professional, creative, and fast. The promotional video exceeded our expectations.'
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Content Creator',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
            text: 'The reels you edited for my Instagram blew up! Amazing color grading and transitions.'
        },
        {
            id: 4,
            name: 'David Chen',
            role: 'Event Organizer',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
            text: 'Captured the energy of our event flawlessly. Highly recommend for any corporate coverage.'
        }
    ];

    return (
        <section id="testimonials" className="bg-chaos-dark py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-2">Client Love</h4>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white">TESTIMONIALS</h2>
                </div>

                {/* Horizontal Scroll / Grid */}
                <div className="flex flex-wrap md:flex-nowrap gap-6 md:overflow-x-auto pb-8 snap-x">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className="md:min-w-[400px] w-full bg-chaos-black p-8 rounded-2xl border border-white/5 relative snap-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-chaos-gold/50"
                                />
                                <div>
                                    <h3 className="font-bold text-white font-syne text-lg">{testimonial.name}</h3>
                                    <p className="text-chaos-gold text-xs uppercase tracking-wider">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#C9A227" stroke="none" />
                                ))}
                            </div>

                            <p className="text-gray-400 italic leading-relaxed">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
