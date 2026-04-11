'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const navItems = [
    { label: 'Travaux', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full border-t border-lightGray py-16 sm:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-lg font-light mb-2">Ariel Kami</h3>
            <p className="text-sm text-midGray font-light">
              Creative Branding. Visual Storytelling.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-light mb-4 text-darkGray">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-midGray font-light hover:text-dark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-light mb-4 text-darkGray">Contact</h4>
            <p className="text-sm text-midGray font-light">
              Prêt à discuter de votre projet?
            </p>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          className="border-t border-lightGray mt-12 sm:mt-16 pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-midGray font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p>© 2026 Ariel Kami. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
}
