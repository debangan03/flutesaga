'use client';

import { motion } from 'framer-motion';
import { useState, useCallback, useMemo } from 'react';

// Optimized VideoPlayer Component
function VideoPlayer({ src, title, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Memoize video processing
  const videoData = useMemo(() => {
    const getVideoId = (url) => {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(src);
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return { videoId, embedUrl, thumbnailUrl, fallbackThumbnail };
  }, [src]);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.src = videoData.fallbackThumbnail;
  }, [videoData.fallbackThumbnail]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1
      }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-amber-100/50"
    >
      <div className="relative p-6 md:p-8">
        {title && (
          <h3 className="text-lg md:text-xl font-serif mb-4 text-amber-900 group-hover:text-orange-700 transition-colors duration-300">
            {title}
          </h3>
        )}
        
        <div 
          className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-amber-200/30"
          style={{ paddingBottom: '56.25%' }}
        >
          {/* Simple loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-200 to-amber-100 animate-pulse rounded-2xl" />
          )}
          
          {/* Thumbnail with play button */}
          {!isPlaying && (
            <div className="absolute inset-0 cursor-pointer" onClick={handlePlay}>
              <img
                src={videoData.thumbnailUrl}
                alt={title || 'Performance Video'}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              
              {/* Simple overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-amber-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              {/* Simple play badge */}
              <div className="absolute bottom-3 right-3 bg-amber-900/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ▶ Play
              </div>
            </div>
          )}
          
          {/* Iframe - only loads when playing */}
          {isPlaying && (
            <iframe
              src={`${videoData.embedUrl}&autoplay=1`}
              title={title || 'Performance Video'}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
        
        {/* Simple bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </motion.div>
  );
}

export default function OptimizedVideoSection() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Memoize videos data
  const videos = useMemo(() => [
    { 
      src: 'https://www.youtube.com/embed/6Hu6tEBW72I', 
      title: 'Classical Live Concerts by the Flute Saga Band' 
    },
    { 
      src: 'https://www.youtube.com/watch?v=zFvvE_DQ1uI', 
      title: "'Sound of Unity' a patriotic rendition by The Flute Saga Academy" 
    },
    { 
      src: 'https://www.youtube.com/embed/8PdUgfK1104', 
      title: 'News24( Rising star) interview with. flutist Bharat Raj' 
    },
    { 
      src: 'https://www.youtube.com/embed/BSeXDpl4jY0', 
      title: '"Symphony of India | Flute Performance by Bharat Raj | The flute saga' 
    },
  ], []);

  // Defer heavy animations
  useState(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="videos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 relative bg-gradient-to-l from-amber-50/20 via-orange-50/30 to-amber-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Simplified Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent mb-6">
            Performance Videos
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-100/50">
            Experience the soul-stirring melodies and masterful performances
          </p>
        </motion.div>

        {/* Optimized Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {videos.map((video, index) => (
            <VideoPlayer
              key={index} 
              src={video.src} 
              title={video.title} 
              index={index}
            />
          ))}
        </div>
        
        {/* Simplified floating elements - only after initial load */}
        {!isInitialLoad && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-amber-300/20 text-lg pointer-events-none hidden lg:block"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${25 + (i % 2) * 30}%`,
                }}
              >
                {['🎵', '🎶', '♫', '♪'][i]}
              </motion.div>
            ))}
          </>
        )}

        {/* YouTube Channel Info */}
        <motion.div
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-serif text-amber-900 mb-4">
            ✨ Featured on YouTube Channel "Flutist Bharat Raj"
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Millions of views and a devoted fan base worldwide, showcasing the beauty of Indian Classical Music
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}