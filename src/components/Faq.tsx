import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-gold font-semibold uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-title tracking-tight font-medium">
            Perguntas Comuns Resolvidas
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Dynamic Accordion list */}
        <div className="space-y-4 mb-16">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-gold bg-brand-accent-light/15 shadow-sm shadow-brand-gold/5'
                    : 'border-brand-accent/15 bg-brand-accent-light/5 hover:bg-brand-accent-light/10'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left px-5 py-5 sm:px-7 sm:py-6 flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <HelpCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-1" />
                    <span className="font-display text-sm sm:text-base font-semibold text-brand-title tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-gold flex-shrink-0 mt-1 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {/* Retractable Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-7 sm:pb-7 pl-[34px] sm:pl-[48px] border-t border-brand-accent/5">
                        <p className="font-sans text-xs sm:text-sm text-brand-title/80 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Low-profile elegant Support note to eliminate boxy repetition */}
        <div className="text-center max-w-2xl mx-auto pt-8 border-t border-brand-accent/15">
          <p className="font-sans text-sm sm:text-base text-brand-title/80 font-light leading-relaxed">
            Ainda possui alguma pergunta sobre o atendimento ou emissão de nota fiscal?
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold/80 font-semibold hover:underline ml-1.5 focus:outline-none transition-colors animate-pulse"
            >
              Falar de forma privada <MessageSquare className="w-4 h-4 fill-brand-accent-light/10 text-brand-gold" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
