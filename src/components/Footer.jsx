import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-chaos-black border-t border-white/10 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

                <a href="#" className="font-syne font-bold text-3xl tracking-tighter text-white mb-6 block">
                    SHAAZ
                </a>

                <div className="flex gap-8 mb-8 flex-wrap justify-center">
                    <a href="#hero" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors">Home</a>
                    <a href="#about" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors">About</a>
                    <a href="#portfolio" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors">Portfolio</a>
                    <a href="#services" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors">Services</a>
                    <a href="#contact" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-colors">Contact</a>
                </div>

                <p className="text-gray-600 text-sm mb-2">
                    &copy; {new Date().getFullYear()} Abdul Hanvas Shehshaaz. All rights reserved.
                </p>
                <p className="text-gray-700 text-xs">
                    Designed By <span className="text-chaos-red">SHAAZ</span> 
                </p>

            </div>
        </footer>
    );
};

export default Footer;
