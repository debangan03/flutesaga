import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

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
    y: 30,
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

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-amber-50/20 via-orange-50/30 to-amber-50/40"
    >
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-amber-200/25 to-orange-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-56 h-56 bg-gradient-to-tr from-yellow-200/25 to-amber-200/25 rounded-full blur-3xl"
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
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
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 relative"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Get in Touch
          </motion.h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-100/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's create magical musical moments together. Reach out for bookings, collaborations, or inquiries.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100/50 relative overflow-hidden"
            >
              {/* Background Icon */}
              <motion.div
                className="absolute top-6 right-6 text-5xl text-amber-200/20 group-hover:text-amber-300/30 transition-colors duration-300"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                📧
              </motion.div>

              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif text-amber-900">Email</h3>
                  <p className="text-gray-600 text-sm">Send us a message</p>
                </div>
              </div>

              <motion.a
                href="mailto:bharatraj@email.com"
                className="text-lg text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-amber-700 hover:to-orange-700 hover:bg-clip-text transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                bharatraj@email.com
              </motion.a>

              {/* Bottom Glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ borderRadius: '0 0 24px 24px' }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100/50 relative overflow-hidden"
            >
              {/* Background Icon */}
              <motion.div
                className="absolute top-6 right-6 text-5xl text-amber-200/20 group-hover:text-amber-300/30 transition-colors duration-300"
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                📞
              </motion.div>

              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif text-amber-900">Phone</h3>
                  <p className="text-gray-600 text-sm">Call for immediate response</p>
                </div>
              </div>

              <motion.a
                href="tel:+1234567890"
                className="text-lg text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-amber-700 hover:to-orange-700 hover:bg-clip-text transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                +123-456-7890
              </motion.a>

              {/* Bottom Glow */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ borderRadius: '0 0 24px 24px' }}
              />
            </motion.div>

            {/* Additional Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-semibold">Location</h4>
                </div>
                <p className="text-sm opacity-90">Mumbai & Delhi, India</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                className="bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl p-6 text-white shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-semibold">Response Time</h4>
                </div>
                <p className="text-sm opacity-90">Within 24 hours</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Social Media & CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Media Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100/50 relative overflow-hidden">
              <motion.div
                className="absolute top-6 right-6 text-5xl text-amber-200/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                🎵
              </motion.div>

              <h3 className="text-3xl font-serif text-amber-900 mb-6">Follow the Journey</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Stay connected and experience the magic of music through our social channels.
                Join thousands of music lovers worldwide!
              </p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: FaYoutube, color: 'from-red-500 to-red-600', href: 'https://youtube.com/@flutistbharatraj', label: 'YouTube' },
                  { icon: FaInstagram, color: 'from-pink-500 to-purple-600', href: 'https://instagram.com', label: 'Instagram' },
                  { icon: FaFacebook, color: 'from-blue-500 to-blue-600', href: 'https://facebook.com', label: 'Facebook' },
                  { icon: FaTwitter, color: 'from-sky-500 to-blue-500', href: 'https://twitter.com', label: 'Twitter' }
                ].map((social, index) => (
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
                    className={`group w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <social.icon className="w-6 h-6 text-white relative z-10" />
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
            </div>

            {/* CTA Section */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-4">Ready to Create Magic?</h3>
                <div className="text-amber-100 mb-8 space-y-4">
                  <p className="leading-relaxed">
                    Elevate your events with the soulful resonance of the Bansuri. Available for:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-amber-50/90">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Classical Concerts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Private Home Concerts (Baithaks)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Corporate Events
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      Destination Weddings
                    </li>
                  </ul>
                </div>

                <motion.button
                  className="bg-white text-amber-700 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                  whileHover={{ scale: 1.05, backgroundColor: '#fef3c7' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Book a Performance</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Musical Notes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300/15 text-2xl pointer-events-none"
            animate={{
              x: [0, 25 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 25 * (i % 3 === 0 ? 1 : -1), 0],
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
              left: `${10 + (i * 10) % 75}%`,
              top: `${15 + (i * 8) % 70}%`,
            }}
          >
            {['🎵', '🎶', '♫', '♪'][i % 4]}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}