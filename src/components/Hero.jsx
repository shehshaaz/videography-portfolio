import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* ── Video Background ── */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-chaos-black z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105"
                    poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
                >
                    <source src="/video/jbr.mov" type="video/mp4" />
                </video>
            </div>

            {/* ── Arabesque Vignette Corners ── */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {/* Top corner ornaments */}
                <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-chaos-gold/20" />
                <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-chaos-gold/20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-chaos-gold/20" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-chaos-gold/20" />
                {/* Ambient gold glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-chaos-gold/5 blur-[100px] rounded-full" />
            </div>

            {/* ── Hero Content ── */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">

                {/* Arabic Calligraphy — Main Statement */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="mb-6"
                >
                    <p
                        className="ar arabic-display arabic-glow text-chaos-gold text-4xl md:text-5xl lg:text-6xl mb-2"
                        style={{ fontFamily: '"Scheherazade New", "Noto Naskh Arabic", serif' }}
                    >
                        الفخامة في أبسط تفاصيلها
                    </p>
                    {/* Thin ornamental line below Arabic */}
                    <div className="flex items-center justify-center gap-3 mt-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-chaos-gold/50" />
                        <div className="w-1.5 h-1.5 bg-chaos-gold rotate-45 opacity-70" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-chaos-gold/50" />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-luxury italic text-chaos-gold/60 text-sm md:text-base tracking-[0.25em] uppercase mb-4"
                >
                    Abdul Hanvas Shehshaaz
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-gray-500 text-[11px] tracking-[0.3em] uppercase mb-4"
                >
                    Videographer &nbsp;·&nbsp; Content Creator
                </motion.p>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl md:text-6xl lg:text-8xl font-syne font-bold text-white mb-4 leading-tight"
                >
                    CREATING &amp;
                    <span className="block gold-shimmer">CAPTURING</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 via-gray-300 to-white/60 text-3xl md:text-4xl lg:text-5xl font-light tracking-widest">
                        YOUR STORY
                    </span>
                </motion.h1>

                {/* Services Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-2 text-gray-400 text-xs md:text-sm uppercase tracking-[0.25em] mb-10"
                >
                    <span>Reels</span>
                    <span className="ornament-diamond" />
                    <span>Content</span>
                    <span className="ornament-diamond" />
                    <span>Events</span>
                    <span className="ornament-diamond" />
                    <span>Commercials</span>
                    <span className="ornament-diamond" />
                    <span>Weddings</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-5"
                >
                    <a href="#portfolio" className="btn-luxury">
                        Watch Showreel
                    </a>
                    <a href="#contact" className="btn-outline-luxury">
                        Book a Shoot
                    </a>
                </motion.div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="font-luxury italic text-chaos-gold/40 text-xs tracking-widest">scroll</span>
                <div className="w-px h-16 bg-gradient-to-b from-chaos-gold/60 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
