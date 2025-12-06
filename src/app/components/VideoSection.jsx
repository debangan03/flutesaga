'use client';

import { motion } from 'framer-motion';

// Cloudinary Video Data (Direct links)
const performanceVideos = [
  {
    src: "https://res.cloudinary.com/dift5ej6p/video/upload/v1765019097/IMG_3580_u3iqll.mp4",
    title: "Devine Music",
    desc: "An original divine composition dedicated to Mahadev"
  },
  {
    src: "https://res.cloudinary.com/dift5ej6p/video/upload/v1765015788/IMG_8746_s31wou.mp4", // Placeholder - user needs to replace
    title: "Live performance",
    desc: "A mesmerizing Live performance"
  },
  {
    src: "https://res.cloudinary.com/dift5ej6p/video/upload/v1765015822/IMG_8088_uzq0l4.mov", // Placeholder
    title: "Fusion with The Band",
    desc: "Blending classical roots with modern beats"
  }

];

export default function VideoSection() {
  return (
    <section className="py-24 relative bg-stone-900 text-white overflow-hidden" id="videos">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-2 block">Live Performances</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-400">Flute Saga</span> experience
          </h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light">
            Witness the magic unfold on stage. High-definition captures of our most memorable concerts.
          </p>
        </motion.div>


        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performanceVideos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              {/* Video Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] md:aspect-[4/5] bg-stone-800 shadow-2xl border border-white/10 group-hover:border-amber-500/50 transition-colors duration-300">

                {/* Check if src is valid, else show placeholder text */}
                {video.src ? (
                  <video
                    src={video.src}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    controls
                    preload="metadata"
                    poster={video.src.replace('.mp4', '.jpg')} // Assumption for poster
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="flex items-center justify-center h-full text-stone-500">
                    Video Unavailable
                  </div>
                )}

                {/* Overlay only visible when NOT playing (handled by native controls) or custom overlay?
                    For simplicity, using native controls details below.
                 */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-sm text-stone-300">{video.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}