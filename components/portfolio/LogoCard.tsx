'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface LogoCardProps {
  grayscale: string;
  color: string;
}

export default function LogoCard({ grayscale, color }: LogoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="aspect-square bg-transparent rounded-sm flex items-center justify-center overflow-hidden cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="relative w-full h-full flex items-center justify-center p-6">
        {/* Grayscale Version */}
        <motion.img
          src={grayscale}
          alt="Logo grayscale"
          className="absolute inset-0 w-3/4 h-3/4 m-auto object-contain"
          animate={{
            clipPath: isHovered ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />

        {/* Color Version */}
        <motion.img
          src={color}
          alt="Logo color"
          className="absolute inset-0 w-3/4 h-3/4 m-auto object-contain"
          animate={{
            clipPath: isHovered ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
