'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/arielkami/', icon: 'instagram' },
    { label: 'Pixieset', href: 'https://arielkami.mypixieset.com/', icon: 'pixieset' },
    { label: 'Behance', href: 'https://www.behance.net/arielkami', icon: 'behance' },
  ];

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Comment ça marche', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  const SocialIcon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'pixieset':
        return (
          <svg className="w-5 h-5" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 15c19.3 0 35 15.7 35 35S69.3 85 50 85 15 69.3 15 50s15.7-35 35-35zm0 10c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 10c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15zm0 10c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z"/>
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.54-.67 1-.17 1.35-.5.35-1.08.6-1.75.76-.67.16-1.39.24-2.16.24H0V4.51h6.938v-.007zm9.992.373h6.12v1.57h-6.12V4.876zM6.556 8.547H3.627v3.32h2.93c.74 0 1.33-.17 1.76-.51.43-.34.647-.86.647-1.57 0-.74-.22-1.26-.66-1.56-.31-.21-.73-.35-1.35-.38l-.398-.3zm10.37 2.135c-.51 0-.96.1-1.34.31-.39.2-.7.48-.95.84-.25.36-.43.77-.54 1.24-.11.47-.17.97-.17 1.5 0 .53.06 1.03.17 1.5.11.47.29.88.54 1.24.25.36.56.64.95.84.38.2.83.3 1.34.3.74 0 1.33-.18 1.77-.55.44-.37.72-.9.84-1.6h2.4c-.15 1.3-.65 2.27-1.5 2.92-.85.65-1.9.97-3.15.97-.78 0-1.49-.13-2.12-.4-.63-.27-1.16-.64-1.6-1.12-.44-.48-.77-1.05-1-1.71-.23-.66-.35-1.38-.35-2.16 0-.8.12-1.53.35-2.2.23-.67.57-1.25 1.01-1.73.44-.48.97-.86 1.6-1.13.63-.27 1.34-.41 2.12-.41 1.19 0 2.2.31 3.04.92.84.61 1.35 1.56 1.54 2.84h-2.43c-.09-.56-.31-1-.66-1.32-.35-.32-.81-.48-1.38-.48zM6.184 14.15H3.627v3.8h2.557c.84 0 1.49-.2 1.95-.59.46-.4.69-.97.69-1.72 0-.77-.24-1.33-.72-1.69-.43-.34-1.02-.5-1.92-.5v.7z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="w-full px-6 bg-[#333333] text-white">
      <div className="max-w-7xl mx-auto py-16 sm:py-24">
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand Logo Left */}
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/assets/brand/logo.svg"
              alt="Ariel Kami"
              width={100}
              height={33}
              className="h-14 w-auto brightness-0 invert"
            />
          </a>

          {/* Navigation Center */}
          <div className="flex items-center gap-6 sm:gap-8 text-sm font-light">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons Right */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white hover:text-white/60 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SocialIcon icon={link.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-white/10 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center text-xs text-gray-400 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>© 2026 Ariel Kami &nbsp;·&nbsp;
            <a href="/politique-de-confidentialite" className="hover:text-white/60 transition-colors">
              Politique de confidentialité
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
