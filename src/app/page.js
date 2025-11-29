"use client"

import AboutSection from "./components/AboutSection";
import AnimatedPhotoGallery from "./components/AnimatedGallery";
import ContactSection from "./components/ContactSection";
import CVSection from "./components/CVSection";
import EventsSection from "./components/EventSection";
import HeroSection from "./components/HeroSection";
import SpotifySection from "./components/SpotifySection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className=" bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40">
      <AboutSection />
      <AnimatedPhotoGallery />
      <VideoSection />
      {/* <SpotifySection /> */}
      <EventsSection />
      <ContactSection />
      </div>
      {/* <CVSection /> */}
    </div>
  );
}