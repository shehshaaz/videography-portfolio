import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Weddings', 'Commercials', 'Reels', 'Travel'];

    const projects = [
        {
            id: 1,
            title: 'Rameeza',
            category: 'Weddings',
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
            videoUrl: '/video/rameeza.mov',
            description: 'A cinematic wedding film.'
        },
        {
            id: 2,
            title: 'Kappil Kodi',
            category: 'Commercials',
            image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80',
            videoUrl: '/video/mac%20edit%20.mp4',
            description: 'Creative edit showcasing Mac capabilities.'
        },
        {
            id: 3,
            title: 'Friends',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1469474932334-9a25690d0cc1?auto=format&fit=crop&q=80',
            videoUrl: '/video/0213.mp4',
            description: 'Travel diary captured on 0213.'
        },
        {
            id: 4,
            title: 'Emotional',
            category: 'Reels',
            image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
            videoUrl: '/video/0213(1).mp4',
            description: 'Highlight reel version 1.'
        },
        {
            id: 5,
            title: 'NANDI HILLS',
            category: 'Travel',
            image: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9804?auto=format&fit=crop&q=80',
            videoUrl: '/video/0213(2).mp4',
            description: 'Highlight reel version 2.'
        },
        {
            id: 6,
            title: 'Birthday',
            category: 'Reels',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
            videoUrl: '/video/IMG_7789.MP4',
            description: 'Raw footage edit from 7789.'
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="bg-chaos-dark py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h4 className="text-chaos-gold uppercase tracking-widest text-sm font-bold mb-2">My Work</h4>
                    <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-8">FEATURED PROJECTS</h2>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat
                                    ? 'bg-chaos-gold text-chaos-black border-chaos-gold'
                                    : 'bg-transparent text-gray-400 border-white/10 hover:border-chaos-gold/50 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group relative aspect-video overflow-hidden rounded-xl bg-chaos-black border border-white/5"
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

                                {/* Overlay Information - Hidden when controls are active/playing usually, but with native controls, z-index fights happen. 
                                    However, since we want "play video ONLY", simply showing the video with controls is the most robust interpretation.
                                    If we keep the overlay, it blocks clicks to the video controls.
                                    Let's adding a simple caption below or keeping it minimal.
                                    But the design had a nice overlay.
                                    To keep the design: "pointer-events-none" on the overlay allows clicking through to the video? 
                                    No, native controls intercept.
                                    Let's put the title/category in a small bar at the bottom that doesn't cover the controls? 
                                    Or just rely on the video.
                                    Let's stick to the user's request: "play video only... cover image as in the video".
                                    I will add the title/category as a footer inside the card, or just overlay it with pointer-events-none but controls might be tricky.
                                    Actually, if I just render the video with controls, the user can play it.
                                    I will add a gradient overlay that fades out on hover so the user can see it's a video, but then disappear to let them click play?
                                    No, "play video only" implies simplicity.
                                */}
                                <div className="absolute top-0 left-0 p-4 pointer-events-none bg-gradient-to-b from-black/60 to-transparent w-full">
                                    <h3 className="text-white font-syne font-bold text-lg">{project.title}</h3>
                                    <span className="text-chaos-gold text-xs uppercase tracking-wider font-bold">{project.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <a
                        href="https://www.instagram.com/shaaz_muhammed?igsh=eGF6NXd1ZzN0MTJv"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-chaos-gold text-chaos-gold hover:bg-chaos-gold hover:text-chaos-black transition-all duration-300 uppercase text-xs tracking-widest font-bold rounded-full"
                    >
                        View All Projects <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

