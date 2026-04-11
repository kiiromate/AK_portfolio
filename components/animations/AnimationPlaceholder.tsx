'use client';

import { motion } from 'framer-motion';

interface AnimationPlaceholderProps {
  type: 'scanlines' | 'aperture' | 'grid';
}

export default function AnimationPlaceholder({ type }: AnimationPlaceholderProps) {
  if (type === 'scanlines') {
    return (
      <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '0px 4px'],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
          }}
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          }}
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-xs font-light tracking-widest"
        >
          VIDEO
        </motion.div>
      </div>
    );
  }

  if (type === 'aperture') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-dark">
        <motion.div
          className="relative w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.3" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <line
                key={angle}
                x1="50"
                y1="10"
                x2="50"
                y2="40"
                stroke="#ffffff"
                strokeWidth="2"
                transform={`rotate(${angle} 50 50)`}
                opacity="0.6"
              />
            ))}
          </svg>
        </motion.div>
        <div className="absolute text-white text-xs font-light tracking-widest ml-24">PHOTO</div>
      </div>
    );
  }

  // Grid animation
  return (
    <div className="w-full h-full flex items-center justify-center bg-lightGray relative overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 200 200">
        {[0, 50, 100, 150, 200].map((x) => (
          <motion.line
            key={`v${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="200"
            stroke="#979797"
            strokeWidth="1"
            opacity="0.2"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: x * 0.05 }}
          />
        ))}
        {[0, 50, 100, 150, 200].map((y) => (
          <motion.line
            key={`h${y}`}
            x1="0"
            y1={y}
            x2="200"
            y2={y}
            stroke="#979797"
            strokeWidth="1"
            opacity="0.2"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: y * 0.05 }}
          />
        ))}
      </svg>
      <motion.div
        className="text-dark text-xs font-light tracking-widest relative z-10"
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        WEB
      </motion.div>
    </div>
  );
}
