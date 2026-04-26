'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Comment ça marche', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#333333]/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Image
            src="/assets/brand/logo.svg"
            alt="Ariel Kami"
            width={120}
            height={40}
            className={`transition-all duration-500 ${
              isScrolled ? 'h-20 w-auto brightness-0 invert' : 'h-20 w-auto'
            }`}
          />
        </a>

        {/* Navigation Items */}
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-light transition-colors ${
                isScrolled
                  ? 'text-white hover:text-blue'
                  : 'text-dark hover:text-midGray'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2">
          <div className={`w-5 h-px transition-colors ${isScrolled ? 'bg-white' : 'bg-dark'}`} />
          <div className={`w-5 h-px transition-colors ${isScrolled ? 'bg-white' : 'bg-dark'}`} />
          <div className={`w-5 h-px transition-colors ${isScrolled ? 'bg-white' : 'bg-dark'}`} />
        </button>
      </div>
    </motion.nav>
  );
}
