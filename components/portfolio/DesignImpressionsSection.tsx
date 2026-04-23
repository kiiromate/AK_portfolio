'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const DESIGN_ITEMS = [
  {
    id: 1,
    image: '/assets/design-impressions/design-impressions-collage-01.png',
    alt: 'Design & impressions - Collage 01',
  },
  {
    id: 2,
    image: '/assets/design-impressions/design-impressions-collage-02.png',
    alt: 'Design & impressions - Collage 02',
  },
  {
    id: 3,
    image: '/assets/design-impressions/design-impressions-collage-03.png',
    alt: 'Design & impressions - Collage 03',
  },
];

export default function DesignImpressionsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h3 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12">Design & impressions</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {DESIGN_ITEMS.map((item, idx) => (
          <motion.button
            key={item.id}
            onClick={() => setSelectedImage(item.image)}
            className="relative aspect-video bg-lightGray rounded-sm overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-lightGray transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
