'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  {
    id: 1,
    question: 'Votre prénom ?',
    type: 'text',
    placeholder: 'Ariel, Sophie, Marc…',
    field: 'name',
  },
  {
    id: 2,
    question: 'Quel type de projet ?',
    type: 'choice',
    field: 'type',
    choices: ['Design graphique', 'Photographie', 'Design web', 'Montage vidéo', 'Autre'],
  },
  {
    id: 3,
    question: 'Décrivez votre projet en quelques mots.',
    type: 'textarea',
    placeholder: 'Un logo pour ma nouvelle marque, une identité visuelle complète…',
    field: 'description',
  },
  {
    id: 4,
    question: 'Quel est votre budget estimé ?',
    type: 'choice',
    field: 'budget',
    choices: ['< 500 €', '500 – 1 500 €', '1 500 – 5 000 €', '5 000 € +', 'À définir ensemble'],
  },
  {
    id: 5,
    question: 'Quel est votre délai ?',
    type: 'choice',
    field: 'deadline',
    choices: ['Urgent (< 2 semaines)', '1 mois', '2 – 3 mois', 'Pas de contrainte'],
  },
  {
    id: 6,
    question: 'Des références visuelles ? (optionnel)',
    type: 'text',
    placeholder: 'Un lien, un nom de marque, une description…',
    field: 'references',
    optional: true,
  },
  {
    id: 7,
    question: 'Votre adresse email.',
    type: 'email',
    placeholder: 'vous@exemple.com',
    field: 'email',
  },
];

type FormData = Record<string, string>;

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState(1);

  const step = STEPS[currentStep];
  const isLast = currentStep === STEPS.length - 1;
  const progress = ((currentStep) / STEPS.length) * 100;

  const handleOpen = () => {
    setIsOpen(true);
    setCurrentStep(0);
    setFormData({});
    setSubmitted(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  const handleNext = () => {
    if (isLast) {
      setSubmitted(true);
      const subject = encodeURIComponent(`Demande de projet — ${formData.type || 'Nouveau projet'}`);
      const body = encodeURIComponent(
        `Nom : ${formData.name || '—'}\nType : ${formData.type || '—'}\nProjet : ${formData.description || '—'}\nBudget : ${formData.budget || '—'}\nDélai : ${formData.deadline || '—'}\nRéférences : ${formData.references || '—'}\nEmail : ${formData.email || '—'}`
      );
      window.location.href = `mailto:hello@arielkami.com?subject=${subject}&body=${body}`;
      return;
    }
    setDirection(1);
    setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  };

  const handleChoice = (choice: string) => {
    setFormData((d) => ({ ...d, [step.field]: choice }));
  };

  const handleInput = (val: string) => {
    setFormData((d) => ({ ...d, [step.field]: val }));
  };

  const canContinue = step.optional || !!formData[step.field];

  return (
    <>
      <section id="contact" className="w-full py-12 sm:py-20 px-6 bg-[#f5f5f3]">
        <div className="max-w-4xl mx-auto text-center">

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Votre prochain projet commence ici.
          </motion.h2>

          <motion.p
            className="text-lg text-darkGray font-light mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            Un échange suffit pour poser les bases d&apos;une collaboration.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <button
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark text-white text-sm font-light hover:bg-darkGray transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Démarrer un projet
            </button>
          </motion.div>

          <motion.p
            className="text-sm text-midGray font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <a href="mailto:hello@arielkami.com" className="hover:text-dark transition-colors">
              hello@arielkami.com
            </a>
          </motion.p>

        </div>
      </section>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative w-full max-w-lg bg-white rounded-2xl p-8 sm:p-10 z-10"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 text-midGray hover:text-dark transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              {!submitted ? (
                <>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-xs text-midGray mb-2 font-light">
                      <span>Étape {currentStep + 1} / {STEPS.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full h-px bg-lightGray">
                      <motion.div
                        className="h-px bg-dark"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: direction * 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -24 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-xl sm:text-2xl font-light text-dark mb-6">
                        {step.question}
                        {step.optional && (
                          <span className="text-sm text-midGray ml-2 font-light">(optionnel)</span>
                        )}
                      </h3>

                      {/* Text / email input */}
                      {(step.type === 'text' || step.type === 'email') && (
                        <input
                          type={step.type}
                          placeholder={step.placeholder}
                          value={formData[step.field] || ''}
                          onChange={(e) => handleInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && canContinue && handleNext()}
                          autoFocus
                          className="w-full border-b border-lightGray bg-transparent text-dark font-light text-base pb-3 outline-none focus:border-dark transition-colors placeholder:text-midGray"
                        />
                      )}

                      {/* Textarea */}
                      {step.type === 'textarea' && (
                        <textarea
                          placeholder={step.placeholder}
                          value={formData[step.field] || ''}
                          onChange={(e) => handleInput(e.target.value)}
                          autoFocus
                          rows={3}
                          className="w-full border-b border-lightGray bg-transparent text-dark font-light text-base pb-3 outline-none focus:border-dark transition-colors placeholder:text-midGray resize-none"
                        />
                      )}

                      {/* Choices */}
                      {step.type === 'choice' && (
                        <div className="flex flex-wrap gap-2">
                          {step.choices?.map((choice) => (
                            <button
                              key={choice}
                              onClick={() => handleChoice(choice)}
                              className={`px-4 py-2 rounded-full border text-sm font-light transition-colors ${
                                formData[step.field] === choice
                                  ? 'bg-dark text-white border-dark'
                                  : 'border-lightGray text-darkGray hover:border-dark'
                              }`}
                            >
                              {choice}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-10">
                    <button
                      onClick={handleBack}
                      className={`text-sm font-light transition-colors ${
                        currentStep === 0 ? 'text-lightGray pointer-events-none' : 'text-midGray hover:text-dark'
                      }`}
                    >
                      ← Retour
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={!canContinue}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-light transition-colors ${
                        canContinue
                          ? 'bg-dark text-white hover:bg-darkGray'
                          : 'bg-lightGray text-midGray pointer-events-none'
                      }`}
                    >
                      {isLast ? 'Envoyer →' : 'Continuer →'}
                    </button>
                  </div>
                </>
              ) : (
                /* Success state */
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center mx-auto mb-6">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-light text-dark mb-3">Merci !</h3>
                  <p className="text-sm text-darkGray font-light leading-relaxed mb-8">
                    Votre demande a été transmise. Je reviens vers vous sous 48h pour organiser un premier échange.
                  </p>
                  <button
                    onClick={handleClose}
                    className="text-sm font-light text-midGray hover:text-dark transition-colors"
                  >
                    Fermer
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
