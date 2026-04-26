'use client';
import { motion } from 'framer-motion';
import ClientsWorldMap from './ClientsWorldMap';

export default function ClientsSection() {
  return (
    <section className="w-full py-20 sm:py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-light mb-3">Clients</h2>
          <p className="text-base text-gray-400 font-light">
            Une présence mondiale, des collaborations locales.
          </p>
        </motion.div>
        <ClientsWorldMap />
      </div>
    </section>
  );
}