import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Showreel', nameAr: 'الأعمال', href: '#hero' },
        { name: 'About', nameAr: 'عني', href: '#about' },
        { name: 'Portfolio', nameAr: 'معرضي', href: '#portfolio' },
        { name: 'Services', nameAr: 'خدماتي', href: '#services' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? 'py-3 border-b border-chaos-gold/10'
                : 'py-6'
                }`}
            style={{
                background: scrolled
                    ? 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 100%)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* ── Logo ── */}
                <a href="#" className="flex flex-col leading-none group">
                    <span className="font-syne font-bold text-xl tracking-tighter text-white group-hover:text-chaos-gold transition-colors duration-300">
                        SH<span className="text-chaos-gold">AAZ</span>
                    </span>
                    <span
                        className="text-chaos-gold/45 text-[10px] tracking-[0.2em] group-hover:text-chaos-gold/70 transition-colors duration-300"
                        style={{ fontFamily: '"Scheherazade New", serif', fontSize: '11px' }}
                    >
                        مصور ومبدع محتوى
                    </span>
                </a>

                {/* ── Desktop Menu ── */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group flex flex-col items-center text-gray-400 hover:text-chaos-gold transition-colors duration-300"
                        >
                            <span className="text-xs uppercase tracking-widest">{link.name}</span>
                            <span
                                className="text-[10px] text-chaos-gold/30 group-hover:text-chaos-gold/60 transition-colors"
                                style={{ fontFamily: '"Scheherazade New", serif' }}
                            >
                                {link.nameAr}
                            </span>
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="btn-luxury text-[11px] px-5 py-2"
                    >
                        Book a Shoot
                    </a>
                </div>

                {/* ── Mobile Menu Button ── */}
                <button
                    className="md:hidden text-white hover:text-chaos-gold transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full border-t border-chaos-gold/10 p-8 md:hidden"
                        style={{
                            background: 'linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(17,16,16,0.98) 100%)',
                            backdropFilter: 'blur(20px)',
                        }}
                    >
                        {/* Arabic phrase in mobile menu */}
                        <p
                            className="ar text-chaos-gold/30 text-xl text-center mb-8"
                            style={{ fontFamily: '"Scheherazade New", serif' }}
                        >
                            الفخامة في أبسط تفاصيلها
                        </p>

                        <div className="flex flex-col space-y-5 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg uppercase tracking-widest text-gray-300 hover:text-chaos-gold transition-colors flex items-center gap-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-chaos-gold/30 text-sm" style={{ fontFamily: '"Scheherazade New", serif' }}>
                                        {link.nameAr}
                                    </span>
                                    {link.name}
                                </a>
                            ))}

                            <div className="w-full h-px bg-gradient-to-r from-transparent via-chaos-gold/20 to-transparent my-2" />

                            <a
                                href="#contact"
                                className="btn-luxury w-full text-center"
                                onClick={() => setIsOpen(false)}
                            >
                                Book a Shoot
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
