'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InViewFadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export default function InViewFadeUp({
  children,
  delay = 0,
  duration = 0.6,
}: InViewFadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {children}
    </motion.div>
  );
}
