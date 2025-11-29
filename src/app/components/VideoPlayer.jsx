'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

function VideoPlayer({ src, title, index }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(src);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        damping: 20,
        stiffness: 100
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100/50"
    >
      {/* Enhanced Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
        <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl" />
      </div>
      
      <div className="relative p-6 md:p-8">
        {title && (
          <motion.h3 
            className="text-lg md:text-xl font-serif mb-4 text-amber-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-700 group-hover:to-orange-700 group-hover:bg-clip-text transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {title}
          </motion.h3>
        )}
        
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border border-amber-200/30 group-hover:border-amber-400/50"
          style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
        >
          {/* Enhanced Loading Overlay */}
          {!isLoaded && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-200 to-amber-100 animate-pulse rounded-2xl"
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoaded ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Thumbnail with enhanced play button */}
          {!isPlaying && (
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title || 'Performance Video'}
                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onLoad={() => setIsLoaded(true)}
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-orange-800/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border-2 border-amber-300/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(251, 191, 36, 0.4)",
                      "0 0 0 10px rgba(251, 191, 36, 0)",
                      "0 0 0 0 rgba(251, 191, 36, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-8 h-8 text-amber-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>
              </div>
              
              {/* Video duration badge (optional) */}
              <div className="absolute bottom-3 right-3 bg-amber-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>▶ Play Video</span>
              </div>
            </div>
          )}
          
          {/* Actual iframe (only loaded when playing) */}
          {isPlaying && (
            <iframe
              src={`${embedUrl}&autoplay=1`}
              title={title || 'Performance Video'}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            />
          )}
          
          {/* Enhanced Corner Accent */}
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-300/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg" />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Enhanced Bottom Glow Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
          style={{ borderRadius: '0 0 24px 24px' }}
        />
        
        {/* Video stats overlay */}
        <motion.div
          className="absolute top-6 left-6 bg-amber-900/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
          initial={{ y: -10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span>HD Video</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default VideoPlayer;