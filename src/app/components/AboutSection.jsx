import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import Image from 'next/image';

// CV Data
const achievements = [
  {
    year: '2019',
    title: 'Visharad Purna',
    organization: 'Akhil Bhartiya Gandharva Mahavidyalaya Mandal, Mumbai',
    icon: '🏆',
    desc: 'Highest level proficiency certification in Indian Classical Music'
  },
  {
    year: '2017',
    title: 'Udiyamaan Kalakaar',
    organization: 'Bhartiya Sanskriti Sansad, Kolkata',
    icon: '🎭',
    desc: 'Recognized as a prominent rising artist in the classical sphere'
  },
  {
    year: '2017',
    title: 'Govt. Recognition',
    organization: 'Government of Rajasthan',
    icon: '📜',
    desc: 'Certificate of Appreciation for performance at Deepavali Mela'
  }
];

const collaborations = [
  { name: 'Shaan', role: 'Bollywood Icon', venue: 'SAREGAMA Music Label', type: 'Studio Session' },
  { name: 'Shantanu Moitra', role: 'Music Director', venue: 'SAREGAMA Music Label', type: 'Film Project' },
  { name: 'Roop Kumar Rathod', role: 'Vocal Maestro', venue: 'Shanmukhananda Auditorium', type: 'Live Concert' },
  { name: 'Noor Sisters', role: 'Sufi Artists', venue: 'Zee Music Label', type: 'Fusion Recording' },
  { name: 'Neeti Mohan', role: 'Playback Singer', venue: 'MTV Flip', type: 'TV Performance' }
];

const highlights = [
  { label: 'Bollywood', value: 'Andhadhun', desc: 'Flute Background Score', icon: '🎬' },
  { label: 'Royal Wedding', value: 'Antilia', desc: 'Performed at Ambani Residence', icon: '💒' },
  { label: 'Broadcast', value: 'All India Radio', desc: 'Live Classical Show', icon: '📻' },
  { label: 'Digital', value: 'YouTube', desc: 'Millions of Views', icon: '📺' }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-24 relative overflow-hidden"
      onAnimationComplete={() => setIsLoaded(true)}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">The Artist</span>
          <h2 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">
            About Bharat <span className="text-amber-700">Raj</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* --- MAIN BIO COLUMN (Left - 7 cols) --- */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-12">

            {/* 1. Identity & Roots */}
            <div className="prose prose-lg text-stone-600 leading-relaxed">
              <p className="text-2xl font-serif text-stone-800 italic mb-6">
                "Music is not just an art, it is a spiritual journey from the soul to the divine."
              </p>
              <p className="mb-6">
                Born as <strong>Bhupendra Panwar</strong> in the royal city of <strong>Jodhpur, Rajasthan</strong>,
                he is celebrated on stage as <strong className="text-amber-800">Bharat Raj</strong>.
                His musical voyage is a testament to dedication, carrying the rich cultural heritage of Rajasthan
                to the modern world.
              </p>

              <div className="bg-amber-50/50 border-l-4 border-amber-600 p-6 rounded-r-xl my-8">
                <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🕉️</span> The Gurukul Legacy
                </h3>
                <p className="text-stone-700 text-base">
                  His artistry was sculpted at the prestigious <strong>Vrindavan Gurukul, Mumbai</strong> under the
                  direct tutelage of the legend <strong>Padma Vibhushan Pt. Hariprasad Chaurasia</strong>.
                  Immersed in the ancient <em>Guru-Shishya Parampara</em>, his training was rigorous, hands-on,
                  and deeply rooted in the <strong>Maihar Gharana</strong>.
                </p>
              </div>

              <p>
                Today, Bharat stands as a versatile <strong>Performer, Composer, and Mentor</strong>.
                From the classical purity of <em>Raags</em> to the contemporary charm of Bollywood,
                his flute creates a bridge between eras, earning him millions of hearts online and offline.
              </p>
            </div>

            {/* 2. Key Highlights Grid */}
            <div>
              <h3 className="text-2xl font-serif text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm">✨</span>
                Career Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                    <span className="text-3xl bg-stone-50 p-2 rounded-lg">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-stone-800">{item.value}</h4>
                      <p className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-1">{item.label}</p>
                      <p className="text-sm text-stone-500 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>


          {/* --- SIDEBAR COLUMN (Right - 5 cols) --- */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-10">

            {/* Collaborations Card */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-amber-500/10 rounded-full blur-3xl" />

              <h3 className="text-2xl font-serif mb-8 flex items-center gap-3 relative z-10">
                <span className="text-amber-400">🤝</span> Notable Collaborations
              </h3>

              <div className="space-y-5 relative z-10">
                {collaborations.map((collab, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-amber-400 text-sm border border-white/10 group-hover:scale-110 transition-transform">
                      {collab.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white group-hover:text-amber-300 transition-colors">{collab.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-white/60">
                        <span>{collab.role}</span>
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        <span className="text-amber-200/80">{collab.venue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <h3 className="text-2xl font-serif text-stone-900 mb-6 flex items-center gap-3">
                <span className="text-yellow-500">🏆</span> Awards & Honors
              </h3>
              <div className="space-y-6">
                {achievements.map((item, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-stone-200 hover:border-amber-500 transition-colors duration-300">
                    <span className="text-xs font-bold text-amber-600 mb-1 block">{item.year}</span>
                    <h4 className="font-bold text-stone-800 text-lg leading-tight mb-1">{item.title}</h4>
                    <p className="text-sm text-stone-600 mb-1 italic">{item.organization}</p>
                    <p className="text-xs text-stone-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}