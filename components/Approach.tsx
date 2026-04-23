'use client';

import { motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Échange',
    description: 'On définit ensemble vos besoins et objectifs.',
  },
  {
    number: '02',
    title: 'Direction créative',
    description: 'Je propose une orientation visuelle claire.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Création des livrables, itérations incluses.',
  },
  {
    number: '04',
    title: 'Visibilité',
    description: 'Vos supports sont prêts à marquer les esprits.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="w-full py-20 sm:py-32 px-6 bg-lightGray">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-light mb-12 sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Comment ça marche
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="text-5xl sm:text-6xl font-light text-midGray mb-6 tracking-tight">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-light mb-4">{step.title}</h3>
              <p className="text-sm sm:text-base text-darkGray font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
