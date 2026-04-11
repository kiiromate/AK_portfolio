'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Ariel Kami
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl text-midGray font-light mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Creative Branding. Visual Storytelling.
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          className="text-base sm:text-lg text-darkGray max-w-2xl mx-auto mb-12 sm:mb-16 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Identités visuelles, logos et supports conçus pour marquer durablement. Plus de 15 ans d&apos;expertise en communication visuelle, branding et design graphique.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-dark text-white text-sm font-light tracking-wide hover:bg-darkGray transition-all"
          >
            Voir le travail
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-dark text-dark text-sm font-light tracking-wide hover:bg-lightGray transition-all"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
