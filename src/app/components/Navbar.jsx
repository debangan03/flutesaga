'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import logoImg from "../../../public/images/logo1.png";
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /* AUDIO */
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/audio/bg_audio.mp3');
    audio.loop = true;
    audio.volume = 0;              // Start SILENT (Chrome only allows this)
    audioRef.current = audio;

    // Autoplay allowed because volume is 0
    audio.play().then(() => {
      console.log("Muted autoplay started — Chrome approved.");
    }).catch(() => console.log("Muted autoplay blocked — fallback will handle."));

    // Fade in audio on FIRST interaction ONLY
    const unmuteAndFade = () => {
      let v = 0;
      const fade = setInterval(() => {
        if (v < 0.5) {             // Target volume = 0.5 (change if needed)
          v += 0.05;
          audio.volume = v;
        } else clearInterval(fade);
      }, 120);

      setIsPlaying(true);

      window.removeEventListener("click", unmuteAndFade);
      window.removeEventListener("scroll", unmuteAndFade);
      window.removeEventListener("touchstart", unmuteAndFade);
    };

    window.addEventListener("click", unmuteAndFade, { once: true });
    window.addEventListener("scroll", unmuteAndFade, { once: true });
    window.addEventListener("touchstart", unmuteAndFade, { once: true });

    return () => {
      audio.pause();
      window.removeEventListener("click", unmuteAndFade);
      window.removeEventListener("scroll", unmuteAndFade);
      window.removeEventListener("touchstart", unmuteAndFade);
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

  /* SCROLL BEHAVIOUR */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'videos', label: 'Videos' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-sm border-b" : "bg-transparent"}
      `}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* LOGO */}
          <Link href="/" className="relative flex items-center">
            <Image src={logoImg} alt="Flute Saga Logo" width={240} height={50} priority />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className={`px-4 py-2 uppercase text-[13px] tracking-wider rounded-lg transition-all
                  ${isScrolled ? "text-stone-800 hover:bg-amber-50 hover:text-amber-700" : "text-black hover:bg-white/40"}
                `}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* DESKTOP: AUDIO + CONTACT */}
          <div className="hidden lg:flex items-center gap-5">
            <motion.button
              onClick={toggleAudio}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full border bg-white/60 hover:bg-white shadow-sm"
            >
              {isPlaying ? <Volume2 size={20}/> : <VolumeX size={20}/>}
            </motion.button>

            <Button asChild className="bg-amber-700 hover:bg-amber-800 text-white px-6 rounded-full font-semibold">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={toggleAudio} className="p-2">
              {isPlaying ? <Volume2 size={26}/> : <VolumeX size={26}/>}
            </button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost"><Menu size={28}/></Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:w-80 bg-[#FAF7F2]">
                <SheetTitle className="sr-only">Menu</SheetTitle>

                <div className="mt-12 space-y-4">
                  {navItems.map(item => (
                    <a key={item.id}
                      href={`#${item.id}`}
                      className="block text-lg uppercase tracking-wider py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-10 border-t pt-6">
                  <Button asChild className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-full">
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
