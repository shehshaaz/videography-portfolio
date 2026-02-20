import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-chaos-black border-t border-chaos-gold/10 pt-16 pb-10 px-6 relative overflow-hidden">
            {/* Subtle ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-chaos-gold/30 to-transparent" />
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-chaos-gold/3 blur-[80px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">

                {/* Arabic Calligraphy Statement */}
                <p
                    className="text-chaos-gold/25 text-4xl mb-3"
                    style={{ fontFamily: '"Scheherazade New", serif' }}
                >
                    الفخامة في أبسط تفاصيلها
                </p>

                {/* Ornamental divider */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-chaos-gold/30" />
                    <div className="w-1.5 h-1.5 bg-chaos-gold/50 rotate-45" />
                    <a href="#" className="font-syne font-bold text-3xl tracking-tighter text-white hover:text-chaos-gold transition-colors duration-300">
                        SHAAZ
                    </a>
                    <div className="w-1.5 h-1.5 bg-chaos-gold/50 rotate-45" />
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-chaos-gold/30" />
                </div>

                {/* Nav Links */}
                <div className="flex gap-6 md:gap-10 mb-10 flex-wrap justify-center">
                    {[
                        { en: 'Home', ar: 'الرئيسية', href: '#hero' },
                        { en: 'About', ar: 'عني', href: '#about' },
                        { en: 'Portfolio', ar: 'معرضي', href: '#portfolio' },
                        { en: 'Services', ar: 'خدماتي', href: '#services' },
                        { en: 'Contact', ar: 'تواصل', href: '#contact' },
                    ].map((link) => (
                        <a key={link.en} href={link.href} className="group flex flex-col items-center">
                            <span className="text-gray-500 hover:text-white uppercase text-xs tracking-widest transition-colors">
                                {link.en}
                            </span>
                            <span
                                className="text-chaos-gold/20 group-hover:text-chaos-gold/50 text-xs transition-colors"
                                style={{ fontFamily: '"Scheherazade New", serif' }}
                            >
                                {link.ar}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Bottom line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

                <p className="text-gray-700 text-xs mb-1">
                    © {new Date().getFullYear()} Abdul Hanvas Shehshaaz — All rights reserved.
                </p>
                <p className="text-gray-800 text-xs" style={{ fontFamily: '"Scheherazade New", serif' }}>
                    صُنع بشغف ◆ <span className="text-chaos-gold/30">شهشاز</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
