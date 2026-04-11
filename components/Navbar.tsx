'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Travaux', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-light tracking-tight">
          <a href="#" className="hover:text-midGray transition-colors">
            Ariel Kami
          </a>
        </div>

        {/* Navigation Items */}
        <div className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-light text-dark hover:text-midGray transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden flex flex-col gap-1.5 p-2 -mr-2">
          <div className="w-5 h-px bg-dark" />
          <div className="w-5 h-px bg-dark" />
          <div className="w-5 h-px bg-dark" />
        </button>
      </div>
    </motion.nav>
  );
}
