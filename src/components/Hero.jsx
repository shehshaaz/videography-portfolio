import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                {/* Placeholder for video - User should replace src */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
                >
                    <source src="/video/project_0213_1.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-chaos-gold text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
                        Abdul Hanvas Shehshaaz
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-syne font-bold text-white mb-6 leading-tight">
                        CAPTURING STORIES<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
                            THROUGH MOTION
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
                        Reels | Events | Commercials | Weddings
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="#portfolio"
                            className="group relative px-8 py-3 bg-chaos-gold text-chaos-black font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10">Watch Showreel</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 transition-all uppercase tracking-wider font-medium backdrop-blur-sm"
                        >
                            Book a Shoot
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-chaos-gold to-transparent opacity-50" />
            </motion.div>
        </section>
    );
};

export default Hero;
