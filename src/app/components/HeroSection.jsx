'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, ChevronRight, Music, Wind, Sparkles, Disc, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { heroSlides } from '../data/heroAttributes';

// --- Animations ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideAnimation = {
  enter: { opacity: 0, scale: 1.1 },
  center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.8 } }
};

// --- Floating Icons Configuration ---
const floatingIcons = [
  { Icon: Music, size: 40, top: "15%", left: "5%", delay: 0, duration: 6, color: "text-amber-800" },
  { Icon: Wind, size: 50, top: "25%", right: "10%", delay: 1, duration: 8, color: "text-orange-300" },
  { Icon: Sparkles, size: 30, bottom: "20%", left: "10%", delay: 2, duration: 5, color: "text-amber-600" },
  { Icon: Disc, size: 35, top: "10%", right: "30%", delay: 1.5, duration: 7, color: "text-stone-400" },
  { Icon: Music, size: 25, bottom: "30%", right: "5%", delay: 0.5, duration: 9, color: "text-orange-400" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-12 overflow-hidden bg-[#FDFBF7]">

      {/* 1. Background Texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* 2. Ambient Light Glows */}
      <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-amber-200/20 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-orange-100/30 rounded-full blur-[80px] lg:blur-[100px] pointer-events-none" />

      {/* 3. --- FLOATING ICONS LAYER --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} opacity-20`}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            <item.Icon size={item.size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* --- LEFT COLUMN (Text) - Span 5 cols --- */}
          <motion.div
            className="lg:col-span-5 text-center lg:text-left space-y-6 lg:space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Tagline */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-50 to-white border border-amber-200/60 rounded-full shadow-sm mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-amber-900 uppercase">
                  Indian Classical Flautist
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif text-stone-900 leading-[0.95] tracking-tight">
                Bharat
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-600 to-orange-800 ml-2 lg:ml-3">Raj</span>
              </h1>
            </motion.div>

            {/* Description / Sub-headline */}
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-5">
              <div className="hidden lg:block w-1 h-20 bg-gradient-to-b from-amber-400 to-transparent mt-2 rounded-full" />
              <div className="space-y-3 lg:space-y-4 px-2 lg:px-0">
                <p className="text-lg lg:text-2xl text-stone-800 font-serif italic">
                  " Carrying the torch of the Maihar Gharana "
                </p>
                <p className="text-base lg:text-lg text-stone-600 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                  A disciple of the legendary <strong className="text-amber-800 font-medium">Pt. Hariprasad Chaurasia</strong>.
                  Blending the purity of Indian Classical Music with contemporary global sounds.
                </p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-4 lg:pt-6 w-full max-w-md mx-auto lg:max-w-none">
              <Link
                href="#contact"
                className="group w-full sm:w-auto px-6 lg:px-8 py-3.5 lg:py-4 bg-amber-800 text-white rounded-full font-medium shadow-xl shadow-amber-900/20 hover:bg-amber-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5" />
                Book Performance
              </Link>

              <Link
                href="#about"
                className="group w-full sm:w-auto px-6 lg:px-8 py-3.5 lg:py-4 bg-white text-stone-800 border border-stone-200 rounded-full font-medium shadow-sm hover:border-amber-300 hover:text-amber-800 hover:bg-amber-50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <PlayCircle className="w-4 h-4 lg:w-5 lg:h-5 group-hover:text-amber-600 transition-colors" />
                See Profile
              </Link>
            </motion.div>

            {/* Minimal Stats */}
            <motion.div variants={fadeUp} className="pt-6 lg:pt-8 border-t border-amber-100/50 flex justify-center lg:justify-start gap-4 sm:gap-8 text-stone-500 text-xs sm:text-sm tracking-widest uppercase">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl lg:text-2xl font-serif text-amber-700">500+</span>
                <span>Concerts</span>
              </div>
              <div className="w-px h-8 lg:h-10 bg-amber-200/50" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl lg:text-2xl font-serif text-amber-700">Millions</span>
                <span>Views</span>
              </div>
              <div className="w-px h-8 lg:h-10 bg-amber-200/50" />
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl lg:text-2xl font-serif text-amber-700">Global</span>
                <span>Presence</span>
              </div>
            </motion.div>
          </motion.div>


          {/* --- RIGHT COLUMN (Slideshow) - Span 7 cols --- */}
          <motion.div
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* THE GOLD FRAME */}
            <div className="absolute top-4 lg:top-6 right-0 lg:-right-6 w-full max-w-xs sm:max-w-xl lg:max-w-2xl h-[350px] sm:h-[450px] lg:h-[650px] border-[1.5px] border-amber-400/30 rounded-[2rem] hidden sm:block z-0 rotate-3" />

            {/* MAIN IMAGE CONTAINER */}
            <div className="relative w-full max-w-sm sm:max-w-xl lg:max-w-2xl h-[400px] sm:h-[500px] lg:h-[650px] rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/20 z-10 bg-stone-200">

              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  className="absolute inset-0"
                  variants={slideAnimation}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <Image
                    src={heroSlides[currentSlide]?.image}
                    alt={heroSlides[currentSlide]?.label || "Slide Image"}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              {/* SLIDE TEXT OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 text-white z-20">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2 lg:mb-3">
                    <span className="h-px w-6 lg:w-10 bg-amber-400" />
                    <span className="text-amber-300 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">
                      {heroSlides[currentSlide].label}
                    </span>
                  </div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-serif leading-tight text-stone-100 max-w-lg">
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>

                {/* Progress Indicators */}
                <div className="flex gap-2 mt-6 lg:mt-8">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1 lg:h-1.5 rounded-full transition-all duration-500 ${idx === currentSlide ? 'w-8 lg:w-12 bg-amber-500' : 'w-2 lg:w-3 bg-white/30 hover:bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-900/30 cursor-pointer hover:text-amber-700 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          const nextSection = document.getElementById('about');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to Discover</span>
        <ChevronRight className="w-4 h-4 rotate-90" />
      </motion.div>

    </section>
  );
}