'use client';

import { motion } from 'framer-motion';
import AnimationPlaceholder from './animations/AnimationPlaceholder';

interface ServiceCardProps {
  title: string;
  description: string;
  hasPortfolio: boolean;
  animation: 'none' | 'scanlines' | 'aperture' | 'grid';
}

export default function ServiceCard({
  title,
  description,
  hasPortfolio,
  animation,
}: ServiceCardProps) {
  return (
    <div className="border border-lightGray p-8 sm:p-10 rounded-sm hover:border-dark transition-colors duration-300 group">
      {/* Animation Placeholder for Services without portfolio */}
      {!hasPortfolio && (
        <div className="mb-8 sm:mb-10 w-full h-32 sm:h-40 bg-lightGray rounded-sm overflow-hidden">
          <AnimationPlaceholder type={animation} />
        </div>
      )}

      {/* Service Title */}
      <h3 className="text-xl sm:text-2xl font-light mb-4">{title}</h3>

      {/* Service Description */}
      <p className="text-sm sm:text-base text-darkGray font-light leading-relaxed mb-6 sm:mb-8">
        {description}
      </p>

      {/* CTA */}
      <motion.a
        href="#contact"
        className="inline-block text-sm font-light text-dark border-b border-dark pb-1 hover:text-accentBlue hover:border-accentBlue transition-colors"
        whileHover={{ x: 2 }}
      >
        Discuter du projet →
      </motion.a>
    </div>
  );
}
