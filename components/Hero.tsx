'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const words = text.split(' ');
  return (
    <div className="flex flex-wrap justify-center">
      {words.map((word, idx) => (
        <motion.div
          key={idx}
          className="inline-block overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: delay + idx * 0.08 }}
        >
          <motion.div
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: delay + idx * 0.08 }}
            className="pr-2"
          >
            {word}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const Counter = ({ target, delay }: { target: number; delay: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 800;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay]);

  return <span>{count}+</span>;
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 sm:pt-40 pb-12 sm:pb-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Main Headline with Text Reveal */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight font-serif text-dark text-balance">
            <TextReveal text="L'image qui vous rend inoubliable." delay={0} />
          </h1>
        </div>

        {/* Stats Row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-12 sm:mb-20 py-8 border-y border-lightGray"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="font-mono text-xs text-midGray mb-2 uppercase tracking-widest">Expérience</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">
              <Counter target={15} delay={1000} />
              ans
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-lightGray" />

          <div className="text-center">
            <div className="font-mono text-xs text-midGray mb-2 uppercase tracking-widest">Disciplines</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">
              <Counter target={4} delay={1100} />
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-lightGray" />

          <div className="text-center">
            <div className="font-mono text-xs text-midGray mb-2 uppercase tracking-widest">Approche</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">1</div>
            <div className="text-sm text-midGray font-light">interlocuteur</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#portfolio"
            className="px-8 py-3 bg-dark text-white text-sm font-light tracking-wide group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <span className="relative z-10">Voir le travail</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 border border-dark text-dark text-sm font-light tracking-wide hover:bg-dark hover:text-white transition-colors"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
