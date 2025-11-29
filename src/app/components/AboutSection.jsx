import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

const achievements = [
  {
    year: '2019',
    title: 'Visharad Purna Achievement',
    organization: 'Akhil Bhartiya Gandharva Mahavidyalaya Mandal, Mumbai',
    icon: '🏆'
  },
  {
    year: '2017',
    title: 'Udiyamaan Kalakaar Recognition',
    organization: 'Bhartiya Sanskriti Sansad, Kolkata',
    icon: '🎭'
  },
  {
    year: '2017',
    title: 'Certificate of Appreciation',
    organization: 'Government of Rajasthan, Udaipur',
    icon: '📜'
  }
];

const collaborations = [
  { name: 'Shaan', role: 'Playback Singer', venue: 'SAREGAMA Music Label' },
  { name: 'Shantanu Moitra', role: 'Music Director', venue: 'SAREGAMA Music Label' },
  { name: 'Roop Kumar Rathod', role: 'Vocalist', venue: 'Shanmukhananda Auditorium, Mumbai' },
  { name: 'Noor Sister', role: 'Artists', venue: 'Zee Music Label' },
  { name: 'Neeti Mohan', role: 'Singer', venue: 'MTV Flip' }
];

// Simplified animations - only for initial load
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

  // Memoize static content to prevent re-renders
  const specialPerformances = useMemo(() => [
    'All India Radio, Jodhpur', 
    'Antilia (Ambani Residence)', 
    'International Yoga Day', 
    'Bollywood Film "Andhadhun"'
  ], []);

  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-20 relative"
      onAnimationComplete={() => setIsLoaded(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-transparent bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text mb-6">
            About Bharat Raj
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100/50 relative group"
          >
            <div className="absolute top-6 right-6 text-4xl text-amber-200/40 transition-colors duration-300">
              🎵
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-amber-900 mb-6">
              The Musical Journey
            </h3>
            <div className="prose text-gray-700 leading-relaxed space-y-4 text-lg">
              <p>
                <strong className="text-amber-800">Bhupendra Panwar</strong>, known by his stage name
                <strong className="bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent"> Bharat Raj</strong>,
                is a distinguished young Indian musician from the royal city of <strong>Jodhpur, Rajasthan</strong>.
              </p>
              <p>
                Trained under the legendary <strong className="text-orange-700">Padma Vibhushan awardee Pt. Hariprasad Chaurasia</strong>
                at the prestigious <em>Vrindavan Gurukul</em> in Mumbai, Bharat represents the finest tradition of Indian Classical music
                and the mesmerizing art of the Indian Bamboo Flute.
              </p>
              <p>
                His mentor, <strong>Pt. Hari Prasad Chaurasia</strong>, is a world-renowned flutist who has directed
                several commercially successful Bollywood songs including classics like
                <em className="text-amber-700"> Silsile, Chandani, Lamhe, Hero, and Daar</em>.
              </p>
              <p>
                Bharat's journey from Jodhpur to Mumbai was driven by an unwavering dream to master Indian Classical Music.
                Today, he stands as a <strong>performer, composer, flute player, and trainer</strong>, inspiring audiences worldwide
                through his soulful performances and his popular YouTube channel <em>"Flutist Bharat Raj"</em>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-serif mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Recognitions
              </h4>
              <div className="space-y-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <div className="text-sm opacity-80 font-medium">{a.year}</div>
                        <div className="font-semibold text-sm mb-1">{a.title}</div>
                        <div className="text-xs opacity-70 leading-relaxed">{a.organization}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-amber-100/50">
              <h4 className="text-xl font-serif text-amber-900 mb-4 flex items-center">
                <span className="mr-2">✨</span>
                Special Performances
              </h4>
              <div className="space-y-3 text-sm">
                {specialPerformances.map((event, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${['bg-amber-500', 'bg-orange-500', 'bg-yellow-600', 'bg-amber-600'][i]}`}></div>
                    <span className="text-gray-700">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100/50"
        >
          <h3 className="text-3xl font-serif text-amber-900 mb-8 text-center">
            Notable Collaborations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborations.map((collab, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-200/50 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-center">
                  <h4 className="font-bold text-lg text-amber-900 mb-2">{collab.name}</h4>
                  <p className="text-orange-700 font-medium text-sm mb-2">{collab.role}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{collab.venue}</p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Simplified floating animation - only shows after load */}
        {isLoaded && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-amber-300/15 text-xl pointer-events-none hidden lg:block"
                style={{
                  left: `${20 + i * 25}%`,
                  top: `${30 + (i % 2) * 25}%`
                }}
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
              >
                {['🎵', '🎶', '♫'][i]}
              </motion.div>
            ))}
          </>
        )}
      </div>
    </motion.section>
  );
}