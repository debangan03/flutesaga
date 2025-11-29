'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Download, ChevronRight, Music, Wind, Sparkles, Disc } from 'lucide-react'; // Added icons
import Image from 'next/image';
import hero_guru from "../../../public/images/bharat-performance2.jpg"
import hero_concert from "../../../public/images/bharat-performance5.jpg"
import hero_collab from "../../../public/images/collab.png"


// --- Slideshow Data ---
const heroSlides = [
  {
    id: 1,
    image: hero_guru, 
    label: "Legacy",
    description: "Seeking blessings from Pt. Hariprasad Chaurasia"
  },
  {
    id: 2,
    image: hero_concert, 
    label: "Performance",
    description: "Live at Shanmukhananda Auditorium"
  },
  {
    id: 3,
    image: hero_collab, 
    label: "Collaboration",
    description: "Fusion session with industry legends"
  }
];

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
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-[#FDFBF7]">
      
      {/* 1. Background Texture (Subtle Mandala Pattern) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* 2. Ambient Light Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT COLUMN (Text) - Span 5 cols --- */}
          <motion.div 
            className="lg:col-span-5 text-center lg:text-left space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Tagline */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-amber-200 rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-amber-900 uppercase">
                  Indian Classical Flautist
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp}>
              <h1 className="text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1]">
                Bharat
                <span className=" text-amber-700 ml-4">Raj</span>
              </h1>
            </motion.div>

            {/* Description with Vertical Line Accent */}
            <motion.div variants={fadeUp} className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="hidden lg:block w-1 h-16 bg-gradient-to-b from-amber-400 to-transparent mt-1" />
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                A disciple of the legendary <strong>Pt. Hariprasad Chaurasia</strong>. 
                Carrying the torch of the <strong>Maihar Gharana</strong> to global stages. 
                Experience the soulful resonance of the Bansuri.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="px-8 py-4 bg-amber-700 text-white rounded-lg font-medium shadow-xl shadow-amber-900/10 hover:bg-amber-800 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" />
                Book Performance
              </button>

              <button className="px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-lg font-medium hover:border-amber-600 hover:text-amber-700 transition-all duration-300 flex items-center justify-center gap-3">
                <Download className="w-5 h-5" />
                Press Kit
              </button>
            </motion.div>
            
            {/* Minimal Stats */}
            <motion.div variants={fadeUp} className="pt-8 border-t border-amber-100/50 flex justify-center lg:justify-between max-w-sm text-stone-500 text-sm tracking-wide">
              <span>500+ Concerts</span>
              <span>•</span>
              <span>15+ Awards</span>
              <span>•</span>
              <span>Global Tours</span>
            </motion.div>
          </motion.div>


          {/* --- RIGHT COLUMN (Slideshow) - Span 7 cols --- */}
          <motion.div 
            className="lg:col-span-7 relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* THE GOLD FRAME (Offset Background) - UPDATED WIDTH */}
            <div className="absolute top-8 right-0 lg:-right-6 w-full max-w-2xl h-[600px] border-[1.5px] border-amber-400/30 rounded-t-full rounded-b-3xl hidden lg:block z-0" />

            {/* MAIN IMAGE CONTAINER - UPDATED WIDTH */}
            <div className="relative w-full max-w-2xl h-[600px] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl shadow-stone-900/20 z-10 bg-stone-200">
              
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
                  {/* Subtle Dark Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-90" />
                </motion.div>
              </AnimatePresence>

              {/* SLIDE TEXT OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-20">
                <motion.div
                  key={`text-${currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="h-px w-8 bg-amber-400" />
                    <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">
                      {heroSlides[currentSlide].label}
                    </span>
                  </div>
                  <p className="text-xl font-serif leading-snug text-stone-100">
                    {heroSlides[currentSlide].description}
                  </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="flex gap-1 mt-6">
                  {heroSlides.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === currentSlide ? 'w-12 bg-amber-500' : 'w-3 bg-white/20'
                      }`}
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-900/30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >

        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronRight className="w-4 h-4 rotate-90" />
      </motion.div>

    </section>
  );
}