'use client';

import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const SERVICES = [
  {
    id: 1,
    title: 'Design Graphique',
    description: 'Logos, identités visuelles et supports print conçus pour durer.',
    hasPortfolio: true,
    animation: 'none',
  },
  {
    id: 2,
    title: 'Production Vidéo',
    description: 'Contenu vidéo pensé pour capter l\'attention et raconter votre histoire.',
    hasPortfolio: false,
    animation: 'scanlines',
  },
  {
    id: 3,
    title: 'Photographie',
    description: 'Images professionnelles qui valorisent votre marque et vos produits.',
    hasPortfolio: false,
    animation: 'aperture',
  },
  {
    id: 4,
    title: 'Design Web',
    description: 'Sites visuellement forts, pensés pour convertir.',
    hasPortfolio: false,
    animation: 'grid',
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-light mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
