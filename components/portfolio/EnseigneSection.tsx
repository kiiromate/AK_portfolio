'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EnseigneSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h3 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12 text-center">Enseigne et Affichage</h3>

      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="relative w-full aspect-video bg-lightGray rounded-sm overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/assets/enseigne-affichage/enseigne-affichage-collage-01.png"
          alt="Enseigne et affichage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </motion.button>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-lightGray transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="/assets/enseigne-affichage/enseigne-affichage-collage-01.png"
              alt="Enseigne et affichage - Full view"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
