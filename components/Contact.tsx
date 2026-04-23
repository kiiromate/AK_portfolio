'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif mb-8 sm:mb-6 text-dark text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Votre prochain projet commence ici.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl text-darkGray font-light mb-12 sm:mb-16 max-w-2xl mx-auto text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Un échange suffit pour poser les bases d&apos;une collaboration.
        </motion.p>

        {/* CTA Button */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <motion.a
            href="mailto:hello@arielkami.com"
            className="px-10 py-4 bg-dark text-white text-sm font-light tracking-wide hover:bg-darkGray transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            Démarrer un projet
          </motion.a>
        </div>

        {/* Email */}
        <motion.p
          className="text-sm text-midGray font-light text-center mb-12 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          hello@arielkami.com
        </motion.p>

        {/* Map Placeholder - Grayscale embed */}
        <motion.div
          className="w-full h-96 bg-lightGray rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.5217409144043!2d2.3522219!3d48.8566141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x412d4591b3c5650!2sParis!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
