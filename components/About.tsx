'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-12 sm:py-20 px-6 bg-[#f5f5f3]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-8 sm:mb-12">À propos</h2>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-lg sm:text-xl text-darkGray font-light leading-relaxed">
              Bonjour, je suis Ariel Kami.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              Avec plus de 15 ans d&apos;expérience en design graphique et branding, je crée des
              identités visuelles et des supports de communication conçus pour marquer durablement.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              Je m&apos;appuie sur une compréhension approfondie des enjeux stratégiques, combinée
              à une exécution créative minutieuse. Je prête attention à chaque détail pour que vous
              n&apos;ayez pas à le faire — en accompagnant mes clients dès la phase de conception
              et bien au-delà.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              En quelques mots : je suis un designer multidisciplinaire, spécialisé en identité
              visuelle, direction créative et communication visuelle — animé par l&apos;ambition de
              transformer chaque vision en une réalité cohérente, impactante et mémorable.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              Merci de prendre le temps de découvrir mon univers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
