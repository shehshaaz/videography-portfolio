import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Sun, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message } = formData;
        const text = `Hello, my name is ${name}. ${message}`;
        const url = `https://wa.me/971501668871?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="bg-chaos-black py-20 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-chaos-red/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">

                {/* Contact Info */}
                <div className="md:w-1/2">
                    <h4 className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-2">Get In Touch</h4>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-8">LET'S CREATE<br />SOMETHING EPIC.</h2>
                    <p className="text-gray-400 mb-12 max-w-md text-lg">
                        Ready to bring your vision to life? Fill out the form or reach out directly via social media.
                    </p>

                    <div className="space-y-8 mb-12">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-4 bg-white/5 rounded-full group-hover:bg-chaos-gold transition-colors duration-300">
                                <Mail className="text-white group-hover:text-chaos-black" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Email Me</h5>
                                <p className="text-gray-400 group-hover:text-chaos-gold transition-colors">hanvasshehshaaz@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-4 bg-white/5 rounded-full group-hover:bg-chaos-gold transition-colors duration-300">
                                <Phone className="text-white group-hover:text-chaos-black" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Call Me</h5>
                                <p className="text-gray-400 group-hover:text-chaos-gold transition-colors">+971 50 166 8871</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-4 bg-white/5 rounded-full group-hover:bg-chaos-gold transition-colors duration-300">
                                <MapPin className="text-white group-hover:text-chaos-black" size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Location</h5>
                                <p className="text-gray-400 group-hover:text-chaos-gold transition-colors">United Arab Emirates</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/shaaz_muhammed?igsh=eGF6NXd1ZzN0MTJv" target="_blank" rel="noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-chaos-gold hover:text-chaos-black hover:border-chaos-gold transition-all duration-300 text-white">
                            <Instagram size={20} />
                        </a>
                        <a href="https://wa.me/971501668871" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all duration-300 font-bold uppercase text-xs tracking-widest shadow-lg hover:shadow-green-500/20">
                            <span>WhatsApp</span> <MessageCircle size={20} />
                        </a>
                    </div>

                    {/* Map Embed */}
                    <div className="mt-12 rounded-xl overflow-hidden border border-white/10 h-64 grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861056.6190953816!2d52.629257063516256!3d24.35080444336307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1771068870601!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>


                {/* Form */}
                <div className="md:w-1/2 bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Name</label>
                                <input
                                    type="text" name="name" placeholder="shaaz"
                                    className="w-full bg-chaos-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-chaos-gold transition-colors"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Phone</label>
                                <input
                                    type="tel" name="phone" placeholder="+971 ..."
                                    className="w-full bg-chaos-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-chaos-gold transition-colors"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Email</label>
                            <input
                                type="email" name="email" placeholder="shaaz@example.com"
                                className="w-full bg-chaos-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-chaos-gold transition-colors"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-300 uppercase tracking-wider">Message</label>
                            <textarea
                                name="message" rows="4" placeholder="Tell me about your project..."
                                className="w-full bg-chaos-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-chaos-gold transition-colors"
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-chaos-gold text-chaos-black font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </section >
    );
};

export default Contact;
