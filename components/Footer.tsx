'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Behance', href: '#', icon: 'behance' },
    { label: 'Pixieset', href: '#', icon: 'pixieset' },
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
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm3.6 3.5h-7.2c-1.1 0-2 .9-2 2v7.2c0 1.1.9 2 2 2h7.2c1.1 0 2-.9 2-2v-7.2c0-1.1-.9-2-2-2zm0 8.7h-7.2v-7.2h7.2v7.2zM12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 8.5 12 8.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm3.5-8.5c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" />
          </svg>
        );
      case 'behance':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm4.19 7.62h2.77v.92h-2.77v-.92zm-3.81 4.46c.44.42 1.07.65 1.88.65.93 0 1.62-.27 2.07-.81.3-.36.48-.87.55-1.52h1.62c-.11 1.36-.63 2.35-1.57 2.98-.94.63-2.14.95-3.6.95-1.6 0-2.92-.48-3.95-1.44-1.03-.96-1.54-2.29-1.54-4.1 0-1.8.51-3.13 1.54-4.1 1.03-.96 2.35-1.44 3.95-1.44 1.42 0 2.59.32 3.5.95.9.63 1.45 1.58 1.64 2.85h-1.62c-.08-.61-.26-1.13-.53-1.57-.44-.61-1.14-.92-2.08-.92-.81 0-1.45.23-1.88.68-.43.45-.64 1.15-.64 2.1 0 .96.21 1.67.64 2.12z" />
          </svg>
        );
      case 'pixieset':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-3 15h6v-2h-6v2zm3-4c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="w-full px-6 bg-black text-white">
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
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation Center */}
          <div className="flex items-center gap-6 sm:gap-8 text-sm font-light">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue transition-colors"
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
                className="text-white hover:text-blue transition-colors"
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
          className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 sm:pt-12 text-center text-xs text-gray-400 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>© 2026 Ariel Kami</p>
        </motion.div>
      </div>
    </footer>
  );
}
