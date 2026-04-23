'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LogoCard from './LogoCard';

const LOGOTYPES = [
  { id: 1, grayscale: '/assets/logotypes/grayscale/logo-01-grayscale.svg', color: '/assets/logotypes/color/logo-01-color.svg' },
  { id: 2, grayscale: '/assets/logotypes/grayscale/logo-02-grayscale.svg', color: '/assets/logotypes/color/logo-02-color.svg' },
  { id: 3, grayscale: '/assets/logotypes/grayscale/logo-03-grayscale.svg', color: '/assets/logotypes/color/logo-03-color.svg' },
  { id: 4, grayscale: '/assets/logotypes/grayscale/logo-04-grayscale.svg', color: '/assets/logotypes/color/logo-04-color.svg' },
  { id: 5, grayscale: '/assets/logotypes/grayscale/logo-05-grayscale.svg', color: '/assets/logotypes/color/logo-05-color.svg' },
  { id: 6, grayscale: '/assets/logotypes/grayscale/logo-06-grayscale.svg', color: '/assets/logotypes/color/logo-06-color.svg' },
  { id: 7, grayscale: '/assets/logotypes/grayscale/logo-07-grayscale.svg', color: '/assets/logotypes/color/logo-07-color.svg' },
  { id: 8, grayscale: '/assets/logotypes/grayscale/logo-08-grayscale.svg', color: '/assets/logotypes/color/logo-08-color.svg' },
  { id: 10, grayscale: '/assets/logotypes/grayscale/logo-10-grayscale.svg', color: '/assets/logotypes/color/logo-10-color.svg' },
  { id: 11, grayscale: '/assets/logotypes/grayscale/logo-11-grayscale.svg', color: '/assets/logotypes/color/logo-11-color.svg' },
  { id: 12, grayscale: '/assets/logotypes/grayscale/logo-12-grayscale.svg', color: '/assets/logotypes/color/logo-12-color.svg' },
  { id: 13, grayscale: '/assets/logotypes/grayscale/logo-13-grayscale.svg', color: '/assets/logotypes/color/logo-13-color.svg' },
  { id: 14, grayscale: '/assets/logotypes/grayscale/logo-14-grayscale.svg', color: '/assets/logotypes/color/logo-14-color.svg' },
  { id: 15, grayscale: '/assets/logotypes/grayscale/logo-15-grayscale.svg', color: '/assets/logotypes/color/logo-15-color.svg' },
  { id: 16, grayscale: '/assets/logotypes/grayscale/logo-16-grayscale.svg', color: '/assets/logotypes/color/logo-16-color.svg' },
  { id: 17, grayscale: '/assets/logotypes/grayscale/logo-17-grayscale.svg', color: '/assets/logotypes/color/logo-17-color.svg' },
];

export default function LogotypesGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h3 className="text-2xl sm:text-3xl font-light mb-8 sm:mb-12">Logotypes</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
        {LOGOTYPES.map((logo, idx) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <LogoCard grayscale={logo.grayscale} color={logo.color} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
