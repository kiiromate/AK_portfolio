'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LogotypesGrid from './portfolio/LogotypesGrid';
import EnseigneSection from './portfolio/EnseigneSection';
import DesignImpressionsSection from './portfolio/DesignImpressionsSection';

type Category = 'all' | 'logotypes' | 'enseigne' | 'design';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'logotypes', label: 'Logotypes' },
    { id: 'enseigne', label: 'Enseigne et Affichage' },
    { id: 'design', label: 'Design & Impressions' },
  ];

  return (
    <section id="portfolio" className="w-full py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-8">Portfolio</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as Category)}
                className={`text-sm font-light tracking-wide pb-2 border-b-2 transition-colors ${
                  activeCategory === cat.id
                    ? 'border-dark text-dark'
                    : 'border-transparent text-midGray hover:text-darkGray'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Content */}
        <div className="space-y-16 sm:space-y-24">
          {(activeCategory === 'all' || activeCategory === 'logotypes') && (
            <LogotypesGrid />
          )}
          {(activeCategory === 'all' || activeCategory === 'enseigne') && (
            <EnseigneSection />
          )}
          {(activeCategory === 'all' || activeCategory === 'design') && (
            <DesignImpressionsSection />
          )}
        </div>
      </div>
    </section>
  );
}
