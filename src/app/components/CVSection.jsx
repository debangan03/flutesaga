import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CVSection() {
  return (
    <motion.section
      id="cv"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-serif text-center mb-8">Curriculum Vitae</h2>
      <div className="prose mx-auto max-w-3xl text-[#1f2937]">
        <h3>Live Performances and Events</h3>
        <ul>
          <li>Performed at Bharataya Sanskrit Samsad, Kolkata, for Udiyamaan Kalkaar competition.</li>
          <li>Live Classical Musical show for All India Radio, Jodhpur Akashwani, Rajasthan.</li>
          <li>Performance alongside Noor Sister for Zee Music Label.</li>
          <li>Performed with Shaan and Shantanu Moitra for SAREGAMA Music Label.</li>
          <li>Performed with Roop Kumar Rathod at Shammukhhananda Auditorium, Mumbai.</li>
          <li>Solo Performance for International Yoga Day, themed around meditation.</li>
          <li>Performed at Antilia for Mr. Mukesh Ambani’s daughter’s wedding.</li>
        </ul>
      </div>
      <div className="text-center mt-8">
        <Link href="/cv.pdf">
          <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white">
            Download Full CV
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}