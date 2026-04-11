'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 sm:py-32 px-6 bg-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-light mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Parlons de votre projet
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-lightGray font-light mb-10 sm:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Vous avez un projet en tête ? Discutons ensemble de comment créer une identité visuelle qui vous démarque.
        </motion.p>

        <motion.a
          href="mailto:hello@arielkami.com"
          className="inline-block px-10 py-4 bg-white text-dark text-sm font-light tracking-wide hover:bg-lightGray transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Prendre contact
        </motion.a>

        <motion.p
          className="text-sm text-midGray font-light mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          hello@arielkami.com
        </motion.p>
      </div>
    </section>
  );
}
