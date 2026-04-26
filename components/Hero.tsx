'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

const tags = [
  {
    label: 'Designer graphique',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: 'Photographe',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    label: 'Web designer',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M9 8l-2 2 2 2M15 8l2 2-2 2" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-4 sm:pb-6 px-6">
      <div className="max-w-5xl mx-auto w-full">

        {/* Main Headline */}
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight font-sans text-center w-full" style={{ color: '#333333' }}>
  Branding{' '}
  <span className="italic font-normal" style={{ fontFamily: 'var(--font-playfair)' }}>Créatif</span>
  {' '}&{' '}
  <span className="italic font-normal" style={{ fontFamily: 'var(--font-playfair)' }}>Storytelling</span>
  {' '}Visuel
</h1>
        </div>

        {/* Tag pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lightGray text-sm font-light text-darkGray bg-white select-none"
            >
              {tag.icon}
              {tag.label}
            </span>
          ))}
        </motion.div>

        {/* Stats Row — no border lines */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="font-sans text-xs text-midGray mb-2 uppercase tracking-widest">Expérience</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">
              <Counter target={15} delay={1000} />ans
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-lightGray" />

          <div className="text-center">
            <div className="font-sans text-xs text-midGray mb-2 uppercase tracking-widest">Disciplines</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">
              <Counter target={3} delay={1100} />
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-lightGray" />

          <div className="text-center">
            <div className="font-sans text-xs text-midGray mb-2 uppercase tracking-widest">Interlocuteur</div>
            <div className="text-2xl sm:text-3xl font-light text-dark">1</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
