"use client";
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 120,
      duration: 0.6
    }
  }
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  }
};

export default function Footer() {
  // Define social media data with proper component references
  const socialMedia = [
    { Icon: FaYoutube, color: 'from-red-500 to-red-600', href: 'https://youtube.com/@flutistbharatraj', label: 'YouTube' },
    { Icon: FaInstagram, color: 'from-pink-500 to-purple-600', href: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaTwitter, color: 'from-sky-500 to-blue-500', href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 relative overflow-hidden bg-gradient-to-tr from-amber-50/20 via-orange-50/30 to-amber-50/40"
    >
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-16 -right-16 w-48 h-48 bg-gradient-to-br from-amber-200/25 to-orange-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-tr from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, -10, 0],
            y: [0, 10, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Copyright */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 px-6 py-3 rounded-2xl"
          >
            &copy; {new Date().getFullYear()} Flute Saga - Bharat Raj. All rights reserved.
          </motion.p>

          {/* Contact Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -3, scale: 1.02 }}
            className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-amber-100/50 relative overflow-hidden inline-block"
          >
            <motion.a
              href="mailto:bharatraj@email.com"
              className="text-lg text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-amber-700 hover:to-orange-700 hover:bg-clip-text transition-all duration-300 font-medium"
              whileHover={{ x: 5 }}
            >
              bharatraj@email.com
            </motion.a>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ borderRadius: '0 0 24px 24px' }}
            />
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`group w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
              >
                <social.Icon className="w-5 h-5 text-white relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Musical Notes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300/15 text-xl pointer-events-none"
            animate={{
              x: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 15 * (i % 3 === 0 ? 1 : -1), 0],
              scale: [1, 1.15, 1],
              rotate: [0, 180, 0]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${20 + (i * 10) % 50}%`,
            }}
          >
            {['🎵', '🎶', '♫', '♪'][i % 4]}
          </motion.div>
        ))}
      </div>
    </motion.footer>
  );
}