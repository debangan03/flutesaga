'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  {
    src: '/images/bharat-performance5.jpg',
    span: 'col-span-2 row-span-2',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance2.jpg',
    span: 'col-span-1 row-span-1',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance1.jpg',
    span: 'col-span-1 row-span-2',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance4.jpg',
    span: 'col-span-1 row-span-1',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance2.jpg',
    span: 'col-span-2 row-span-2',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance4.jpg',
    span: 'col-span-1 row-span-1',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance1.jpg',
    span: 'col-span-1 row-span-2',
    height: 'h-full'
  },
  {
    src: '/images/bharat-performance3.jpg',
    span: 'col-span-1 row-span-1',
    height: 'h-full'
  }
];

// Simplified animations
const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function OptimizedPhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Memoize photo elements to prevent re-renders
  const photoElements = useMemo(() => photos, []);

  // Optimize image loading
  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1000);
    
    // Preload images
    photoElements.forEach((photo, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, index]));
      };
      img.src = photo.src;
    });

    return () => clearTimeout(timer);
  }, [photoElements]);

  // Memoized handlers
  const handlePhotoClick = useCallback((index) => {
    setSelectedPhoto(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 relative bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40"
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
            Photo Gallery
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-100/50">
            Capturing moments of musical magic and soulful performances
          </p>
        </motion.div>

        {/* Optimized Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {photoElements.map((photo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handlePhotoClick(index)}
              className={`${photo.span} ${photo.height} relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300`}
            >
              {/* Simple loading placeholder */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-orange-200 to-amber-100 animate-pulse" />
              )}

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src={photo.src}
                  alt={`Bharat Raj performance ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Simplified overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Simple border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400/40 transition-colors duration-300 rounded-2xl pointer-events-none" />
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>

              {/* Simple hover badge */}
              <div className="absolute bottom-3 left-3 bg-amber-900/90 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                View
              </div>

              {/* Photo number */}
              <div className="absolute top-3 right-3 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-amber-800 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimized Modal */}
        <AnimatePresence>
          {selectedPhoto !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30"
              >
                <img
                  src={photoElements[selectedPhoto].src}
                  alt={`Bharat Raj performance ${selectedPhoto + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-amber-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-amber-800/90 transition-colors"
                  onClick={handleCloseModal}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 bg-amber-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium">Performance {selectedPhoto + 1}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Simplified floating elements - only after initial load */}
        {!isInitialLoad && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-amber-300/20 text-lg pointer-events-none hidden lg:block"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + (i % 2) * 40}%`,
                }}
              >
                {['🎵', '🎶', '♫', '♪'][i]}
              </motion.div>
            ))}
          </>
        )}
      </div>
    </motion.section>
  );
}