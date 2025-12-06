import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';
import { useState, useMemo, useCallback } from 'react';

const events = [
  {
    date: '2025-09-15',
    title: 'Classical Music Festival',
    location: 'Mumbai, India',
    venue: 'Royal Opera House',
    time: '7:00 PM',
    type: 'Festival',
    status: 'Available'
  },
  {
    date: '2025-10-10',
    title: 'Solo Flute Recital',
    location: 'Delhi, India',
    venue: 'India Habitat Centre',
    time: '6:30 PM',
    type: 'Solo Performance',
    status: 'Early Bird'
  },
  {
    date: '2025-11-22',
    title: 'Raag Jugalbandi Evening',
    location: 'Jodhpur, India',
    venue: 'Mehrangarh Fort',
    time: '8:00 PM',
    type: 'Collaboration',
    status: 'Coming Soon'
  },
];

// Simplified animation variants
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function OptimizedEventsSection() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Memoize events and formatted dates to prevent recalculation
  const formattedEvents = useMemo(() =>
    events.map(event => ({
      ...event,
      formattedDate: new Date(event.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    })), []);

  // Defer heavy animations
  useState(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Memoized handlers
  const handleTicketClick = useCallback((eventTitle) => {
    console.log(`Getting tickets for: ${eventTitle}`);
  }, []);

  const handleBookingClick = useCallback(() => {
    console.log('Contact for bookings clicked');
  }, []);

  return (
    <motion.section
      id="events"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 relative bg-gradient-to-br from-amber-50/20 via-orange-50/30 to-amber-50/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Simplified Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif bg-gradient-to-r from-amber-800 via-orange-700 to-yellow-700 bg-clip-text text-transparent mb-6">
            Upcoming Events
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-amber-100/50">
            Join us for enchanting evenings of classical music and soulful melodies
          </p>
        </motion.div>

        {/* Optimized Events List */}
        <div className="space-y-8">
          {formattedEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-amber-100/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Simple background icon */}
              <div className="absolute top-6 right-6 text-4xl text-amber-200/30 group-hover:text-amber-300/40 transition-colors duration-300">
                🎼
              </div>

              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Left Section - Event Details */}
                <div className="flex-1 space-y-4">
                  {/* Event Title */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif text-amber-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                        {event.title}
                      </h3>
                      <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Event Meta Information */}
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{event.formattedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{event.location}</p>
                        <p className="text-sm text-gray-500">{event.venue}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Ticket className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="font-medium text-green-600">{event.status}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Action Button */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => handleTicketClick(event.title)}
                    className="bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
                  >
                    <Ticket className="w-5 h-5" />
                    <span>Get Tickets</span>
                  </button>
                </div>
              </div>

              {/* Simple bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-100/50 max-w-2xl mx-auto hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-serif text-amber-900 mb-4">
              ✨ Want to book a private performance?
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Experience the magic of live classical music with personalized performances for your special occasions.
            </p>
            <button
              onClick={handleBookingClick}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact for Bookings
            </button>
          </div>
        </motion.div>

        {/* Simplified floating elements - only after initial load */}
        {!isInitialLoad && (
          <>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-amber-300/20 text-lg pointer-events-none hidden lg:block"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${25 + (i % 2) * 30}%`,
                }}
              >
                {['🎵', '🎶', '♫', '♪'][i]}
              </motion.div>
            ))}
          </>
        )}
      </div>
    </motion.section>
  );
}