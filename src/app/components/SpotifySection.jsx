import { motion } from 'framer-motion';

export default function SpotifySection() {
  return (
    <motion.section
      id="spotify"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12 relative"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-serif bg-gradient-to-r from-gray-800 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ backgroundSize: '200% 200%' }}
        >
          Listen to Spotify
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          src="https://open.spotify.com/embed/track/YOUR_TRACK_ID"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded-lg"
        ></motion.iframe>
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded-lg"
        ></motion.iframe>
      </div>
    </motion.section>
  );
}