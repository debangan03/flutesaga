'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { Menu, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import logoImg from "../../../public/images/logo3.png";
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* AUDIO SETUP */
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize Audio
    const audio = new Audio('/audio/bg_audio.mp3');
    audio.loop = true;
    audio.volume = 0; // Start silent for autoplay permission
    audioRef.current = audio;

    audio.play()
      .then(() => console.log("Audio initialized"))
      .catch(() => console.log("Autoplay blocked - waiting for interaction"));

    const unmuteAndFade = () => {
      let v = 0;
      const fade = setInterval(() => {
        if (v < 0.5) {
          v += 0.05;
          if (audioRef.current) audioRef.current.volume = v;
        } else clearInterval(fade);
      }, 120);

      setIsPlaying(true);
      ['click', 'scroll', 'touchstart'].forEach(evt =>
        window.removeEventListener(evt, unmuteAndFade)
      );
    };

    ['click', 'scroll', 'touchstart'].forEach(evt =>
      window.addEventListener(evt, unmuteAndFade, { once: true })
    );

    return () => {
      audio.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  /* SCROLL LISTENER */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'videos', label: 'Videos' }
  ];

  // Mobile Menu Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent
        ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-stone-200 py-2"
          : "bg-transparent py-4"}
      `}
    >
      {/* Standard padding is px-4, but reduced to px-3 for mobile to 
         push logo closer to the 'extreme' left as requested.
      */}
      <div className="w-full mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* --- LOGO --- */}
          <Link href="/" className="relative z-50 flex items-center shrink-0">
            {/* Responsive sizing: w-32 on mobile, w-48 on desktop */}
            <div className="relative w-48 sm:w-64 md:w-80 h-12 sm:h-16 transition-all">
              <Image
                src={"https://res.cloudinary.com/dift5ej6p/image/upload/v1765016108/logo3_cgzyva.png"}
                alt="Flute Saga Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 uppercase text-[12px] font-medium tracking-widest rounded-full transition-all duration-300
                  ${isScrolled
                    ? "text-stone-600 hover:text-amber-800 hover:bg-amber-50"
                    : "text-stone-900 hover:bg-white/50"}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* --- DESKTOP ACTIONS --- */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full transition-all duration-300 border
                ${isScrolled ? "border-stone-200 text-stone-600" : "border-white/20 bg-white/40 text-stone-800"}
                hover:scale-105 active:scale-95
              `}
            >
              {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white rounded-full px-6 shadow-lg shadow-amber-700/20">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* --- MOBILE ACTIONS --- */}
          <div className="lg:hidden flex items-center gap-2">

            {/* Mobile Audio Toggle */}
            <button
              onClick={toggleAudio}
              className="p-2 text-stone-700 bg-white/50 backdrop-blur-sm rounded-full border border-stone-200/50"
            >
              {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-stone-800 hover:bg-stone-100/50">
                  <Menu size={28} strokeWidth={1.5} />
                </Button>
              </SheetTrigger>

              {/* Mobile Menu Content */}
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] bg-[#FAF7F2]/95 backdrop-blur-xl border-l border-stone-200 p-0 overflow-y-auto h-[100dvh]"
              >
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

                <div className="flex flex-col h-full relative">

                  {/* Menu Header with Logo */}
                  <div className="p-6 pt-8 flex justify-between items-center border-b border-stone-200/50">
                    <div className="relative w-32 h-10 opacity-90">
                      <Image src={logoImg} alt="Logo" fill className="object-contain object-left" />
                    </div>
                    {/* Close button is auto-rendered by Sheet, but we can customize spacing via padding */}
                  </div>

                  {/* Menu Links */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex-1 flex flex-col justify-center items-center gap-6 p-6"
                  >
                    {navItems.map((item) => (
                      <motion.a
                        key={item.id}
                        variants={itemVariants}
                        href={`#${item.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center gap-3 text-2xl font-light uppercase tracking-widest text-stone-800"
                      >
                        <span className="w-0 group-hover:w-4 h-[1px] bg-amber-600 transition-all duration-300"></span>
                        {item.label}
                        <span className="w-0 group-hover:w-4 h-[1px] bg-amber-600 transition-all duration-300"></span>
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Menu Footer */}
                  <div className="p-8 pb-12 border-t border-stone-200/50 bg-white/30">
                    <Button asChild className="w-full bg-amber-800 hover:bg-amber-900 text-white py-6 text-lg rounded-xl shadow-xl shadow-amber-900/10">
                      <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                        Get In Touch <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-center text-stone-400 text-xs mt-6 uppercase tracking-widest">
                      © Flute Saga 2025
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}