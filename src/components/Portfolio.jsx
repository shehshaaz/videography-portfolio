import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Weddings', 'Commercials', 'Reels', 'Travel', 'Car'];

    const projects = [
        {
            id: 7,
            title: 'Jumeirah',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
            videoUrl: '/video/jumeirah.mov',
            description: 'A cinematic journey through the iconic Jumeirah coastline in Dubai.'
        },
        {
            id: 8,
            title: 'Dubai After Dark',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?auto=format&fit=crop&q=80',
            videoUrl: '/video/dubai-afterdark.mov',
            description: "Dubai's dazzling nightlife and skyline captured after dark."
        },
        {
            id: 9,
            title: 'JBR',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80',
            videoUrl: '/video/jbr.mp4',
            description: 'A vibrant walk along JBR – the beating heart of Dubai\'s waterfront.'
        },

        {
            id: 11,
            title: 'Rubicon',
            category: 'Car',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
            videoUrl: '/video/rubicon.mp4',
            description: 'A cinematic showcase of the iconic Jeep Rubicon – raw power meets stunning visuals.'
        },
        {
            id: 12,
            title: 'Interior',
            category: 'Commercials',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
            videoUrl: '/video/interior.mp4',
            description: 'An elegant commercial capturing the beauty of modern interior design.'
        },
        {
            id: 13,
            title: 'Kashmir',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80',
            videoUrl: '/video/kashmir.mp4',
            description: 'Paradise on earth – a cinematic journey through the valleys of Kashmir.'
        },
        {
            id: 1,
            title: 'Rameeza',
            category: 'Weddings',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/wedding_rameeza.mov',
            description: 'A cinematic wedding film.'
        },
        {
            id: 2,
            title: 'Kappil Kodi',
            category: 'Commercials',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/mac_edit.mp4',
            description: 'Creative edit showcasing Mac capabilities.'
        },
        {
            id: 3,
            title: 'Friends',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1469474932334-9a25690d0cc1?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/project_0213_main.mp4',
            description: 'Travel diary captured on 0213.'
        },
        {
            id: 4,
            title: 'Emotional',
            category: 'Reels',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/project_0213_1.mp4',
            description: 'Highlight reel version 1.'
        },
        {
            id: 5,
            title: 'NANDI HILLS',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9804?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/project_0213_2.mp4',
            description: 'Highlight reel version 2.'
        },
        {
            id: 6,
            title: 'Birthday',
            category: 'Reels',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
            videoUrl: 'https://hi9yxa6jxacfmjkj.public.blob.vercel-storage.com/birthday_7789.mp4',
            description: 'Raw footage edit from 7789.'
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="bg-chaos-dark py-24 px-6 relative overflow-hidden">
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-chaos-gold/20 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    {/* Arabic sub-label */}
                    <p
                        className="text-chaos-gold/35 text-3xl mb-2"
                        style={{ fontFamily: '"Scheherazade New", serif' }}
                    >
                        معرض أعمالي
                    </p>

                    <div className="arabesque-divider mb-4">
                        <span className="section-label">My Work</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-10">
                        FEATURED <span className="gold-shimmer">PROJECTS</span>
                    </h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-1.5 text-xs font-medium uppercase tracking-widest transition-all duration-300 ${filter === cat
                                    ? 'bg-chaos-gold text-chaos-black shadow-[0_0_20px_rgba(201,162,39,0.3)]'
                                    : 'text-gray-400 border border-white/10 hover:border-chaos-gold/40 hover:text-chaos-gold bg-transparent'
                                    }`}
                                style={{ letterSpacing: '0.15em' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92 }}
                                className="group relative aspect-video overflow-hidden bg-chaos-black"
                                style={{ border: '1px solid rgba(201,162,39,0.12)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                                whileHover={{ borderColor: 'rgba(201,162,39,0.35)', boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(201,162,39,0.06)' }}
                            >
                                <video
                                    src={project.videoUrl}
                                    className="w-full h-full object-cover"
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>

                                {/* Gold corner accents */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-chaos-gold/40 pointer-events-none z-10" />
                                <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-chaos-gold/40 pointer-events-none z-10" />

                                <div className="absolute top-0 left-0 p-3 pointer-events-none bg-gradient-to-b from-black/70 to-transparent w-full z-10">
                                    <h3 className="text-white font-syne font-bold text-base leading-tight">{project.title}</h3>
                                    <span
                                        className="text-chaos-gold text-[10px] uppercase tracking-[0.2em] font-bold"
                                        style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}
                                    >
                                        {project.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <div className="mt-14 text-center">
                    <a
                        href="https://www.instagram.com/shaaz_muhammed?igsh=eGF6NXd1ZzN0MTJv"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline-luxury inline-flex items-center gap-3"
                    >
                        <span
                            className="text-chaos-gold/50"
                            style={{ fontFamily: '"Scheherazade New", serif', fontSize: '14px' }}
                        >شاهد الكل</span>
                        View All Projects <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

