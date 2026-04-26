'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PHASES = [
  {
    number: 'Phase I',
    title: 'Prise de contact & Vision',
    description:
      "Toute belle collaboration commence par une conversation. Vous me partagez votre projet via le formulaire de contact — votre marque, vos ambitions, vos références. Ces informations m'aident à comprendre si je suis la bonne personne pour donner vie à votre vision. Si c'est le cas, je reviens vers vous sous 48h pour organiser un premier échange.",
  },
  {
    number: 'Phase II',
    title: 'Échange & Cadrage',
    description:
      "C'est ici que tout commence vraiment. Un appel ou une rencontre pour mieux se connaître et poser les bases du projet ensemble. On y définit les objectifs précis, les contraintes, les délais et les attentes de chaque côté. Ce que j'aime dans cet échange, c'est de découvrir des gens passionnés par leur marque — et de sentir le projet prendre forme.",
  },
  {
    number: 'Phase III',
    title: 'Proposition & Planning',
    description:
      "Une fois la vision partagée, la route se trace. Je construis une proposition sur mesure : périmètre d'intervention, livrables, planning et tarif. Je travaille au forfait plutôt qu'à l'heure — pour que vous ayez une vision claire et sans surprise de l'investissement et du calendrier.",
  },
  {
    number: 'Phase IV',
    title: 'Création & Exécution',
    description:
      "C'est là que je donne tout. Je commence par explorer les pistes créatives — moodboards, esquisses, directions visuelles — avant de rentrer dans la production. Vous êtes tenu·e informé·e à chaque étape clé, avec des points réguliers et des retours structurés. Je m'attarde sur chaque détail pour que vous n'ayez pas à le faire.",
  },
  {
    number: 'Phase V',
    title: 'Livraison & Suivi',
    description:
      "Un projet réussi, ça se fête — pas ça s'improvise. Avant toute livraison, je m'assure que chaque élément est à la hauteur de ce qui a été convenu. Les fichiers sont transmis dans des formats irréprochables, sans compression destructrice. Et parce qu'une identité visuelle vit dans le temps, je reste disponible pour accompagner les évolutions qui viennent après.",
  },
];

const PhaseCard = ({
  phase,
  index,
  total,
}: {
  phase: (typeof PHASES)[0];
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
          <div className="shrink-0 w-24">
            <span className="text-xs text-gray-400 uppercase tracking-widest font-sans">
              {phase.number}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-light mb-4 text-gray-900">
              {phase.title}
            </h3>
            <p className="text-base text-gray-500 font-light leading-relaxed max-w-2xl">
              {phase.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Approach() {
  return (
    <section id="approach" className="w-full py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <motion.div
          className="mb-16 sm:mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-3">
            Comment ça marche
          </h2>
          <p className="text-base text-gray-400 font-light">
            Mon processus, pensé pour vous.
          </p>
        </motion.div>

        <div>
          {PHASES.map((phase, index) => (
            <PhaseCard
              key={phase.number}
              phase={phase}
              index={index}
              total={PHASES.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
