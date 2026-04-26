'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SERVICES = [
  {
    id: 1,
    tag: 'DESIGN',
    title: 'Design Graphique',
    description: "Logos, identités visuelles et supports print conçus pour durer. Chaque projet est pensé pour refléter l'essence de votre marque avec précision et caractère.",
  },
  {
    id: 2,
    tag: 'PHOTO',
    title: 'Photographie',
    description: "Images professionnelles qui valorisent votre marque et vos produits. Un regard affûté pour capturer ce qui compte vraiment.",
  },
  {
    id: 3,
    tag: 'WEB',
    title: 'Design Web',
    description: "Sites visuellement forts, pensés pour convertir. Une expérience utilisateur soignée du premier pixel jusqu'au dernier.",
  },
];

const ServiceCard = ({
  service,
  index,
  total,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1, 1 - (total - index - 1) * 0.03]
  );

  const top = 100 + index * 20;

  return (
    <div ref={cardRef} style={{ position: 'sticky', top: `${top}px` }} className="mb-4">
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
          <div className="shrink-0 w-20">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-sans">
              {service.tag}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-900">
              {service.title}
            </h3>
            <p className="text-base text-gray-500 font-light leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 text-sm font-light text-dark border-b border-dark pb-px hover:text-midGray hover:border-midGray transition-colors"
            >
              Discuter du projet →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="w-full py-20 sm:py-32 px-6 bg-[#f5f5f3]">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-3">Services</h2>
          <p className="text-base text-gray-400 font-light">
            Ce que je fais, avec soin.
          </p>
        </motion.div>

        <div>
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              total={SERVICES.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
