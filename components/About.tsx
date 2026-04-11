'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-20 sm:py-32 px-6 bg-white">
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
              Avec plus de 15 ans d&apos;expérience en design graphique et branding, Ariel Kami crée des identités visuelles et des supports de communication conçus pour marquer durablement.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              L&apos;approche se fonde sur une compréhension profonde des enjeux stratégiques, combinée à une exécution créative minutieuse. Chaque projet est pensé pour transformer une vision en réalité visuelle cohérente et impactante.
            </p>

            <p className="text-base sm:text-lg text-darkGray font-light leading-relaxed">
              Spécialisé en identité visuelle, design graphique et direction créative, travaillant avec des entreprises et des créatifs en quête de clarté et d&apos;excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
