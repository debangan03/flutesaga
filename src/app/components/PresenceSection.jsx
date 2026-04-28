'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Youtube, Music, ExternalLink, Play } from 'lucide-react';

export default function PresenceSection() {
    // YouTube Data
    const youtubeVideos = useMemo(() => [
        {
            src: 'https://www.youtube.com/embed/6Hu6tEBW72I',
            title: 'Classical Live Concerts',
            views: '1.2M views'
        },
        {
            src: 'https://www.youtube.com/embed/zFvvE_DQ1uI',
            title: 'Sound of Unity',
            views: '850K views'
        },
        {
            src: 'https://www.youtube.com/embed/BSeXDpl4jY0',
            title: 'Symphony of India',
            views: '500K views'
        }
    ], []);

    return (
        <section className="py-24 relative overflow-hidden" id="presence">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#FFFBF5]"></div>
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-50 to-transparent opacity-60" />
            <div className="absolute -right-20 top-40 w-96 h-96 bg-orange-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
            <div className="absolute -left-20 bottom-40 w-96 h-96 bg-amber-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/50 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4 border border-amber-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                        Digital Presence
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-6">
                        Listen & <span className="italic text-amber-700">Watch</span>
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
                        From the concert halls to your screens. Experience the journey through digital platforms.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* --- YouTube Column (7 Cols) --- */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-red-50 rounded-2xl">
                                    <Youtube className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-serif text-stone-800">YouTube Channel</h3>
                            </div>
                            <span className="hidden sm:inline-block px-4 py-1.5 bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                Official Channel
                            </span>
                        </div>

                        <div className="grid gap-8">
                            {/* Featured Video (First one larger) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50 bg-stone-900 aspect-video ring-1 ring-stone-900/5"
                            >
                                <iframe
                                    src={youtubeVideos[0].src}
                                    title={youtubeVideos[0].title}
                                    className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>

                            {/* Sub Videos Grid */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {youtubeVideos.slice(1).map((video, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 group"
                                    >
                                        <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-3">
                                            <iframe
                                                src={video.src}
                                                title={video.title}
                                                className="absolute inset-0 w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                        <div className="px-1">
                                            <h4 className="font-medium text-stone-800 text-sm line-clamp-1 group-hover:text-amber-700 transition-colors">
                                                {video.title}
                                            </h4>
                                            <p className="text-xs text-stone-500 mt-1">{video.views}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://youtube.com/@flutistbharat?si=H4G8WwZ-rOlWF1YE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#FF0000] text-white rounded-full font-medium shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all mx-auto sm:mx-0"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            Visit Channel
                        </motion.a>
                    </div>

                    {/* --- Spotify Column (5 Cols) --- */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-green-50 rounded-2xl">
                                    <Music className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-serif text-stone-800">On Spotify</h3>
                            </div>

                            {/* Spotify Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-green-100/50 to-emerald-50/50 rounded-[2.5rem] blur-xl" />
                                <div className="relative bg-white/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/50 shadow-xl">
                                    <iframe
                                        style={{ borderRadius: '24px' }}
                                        src="https://open.spotify.com/embed/artist/0JcWwqoBu9fbk7dclxLiD4?utm_source=generator&theme=0"
                                        width="100%"
                                        height="352"
                                        frameBorder="0"
                                        allowFullScreen=""
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="shadow-inner"
                                    />

                                    <div className="mt-6 flex flex-col items-center text-center">
                                        <p className="text-stone-600 font-light italic mb-6">
                                            "Let the bamboo flute be your companion in moments of solitude and peace."
                                        </p>
                                        <a
                                            href="https://open.spotify.com/artist/0JcWwqoBu9fbk7dclxLiD4"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full text-sm font-bold tracking-wide shadow-lg shadow-green-500/25 hover:bg-green-600 hover:-translate-y-0.5 transition-all"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            OPEN SPOTIFY
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative background for Spotify column */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-green-100/30 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
