import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import InstagramVideo from './InstagramVideo';

// Premium expert portrait image certified URL configuration
const camillaPortraitImg = "https://i.imgur.com/SD2AtXM.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-12 md:py-20 lg:py-24 border-b border-brand-accent/5">
      {/* Decorative background visual lines for luxury texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(168,112,81,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(168,112,81,0.07)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Portrait of Camilla Sousa - Placed at the very top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="relative max-w-sm sm:max-w-md mx-auto mb-8"
        >
          {/* Accent ornamental background shape - Premium Gold details */}
          <div className="absolute -inset-2 rounded-[2.5rem] border border-brand-gold/40 bg-brand-gold/5 -rotate-2" />
          
          <div className="relative rounded-[2.25rem] overflow-hidden border-2 border-brand-gold/60 shadow-2xl bg-brand-bg select-none aspect-3/4">
            <img
              src={camillaPortraitImg}
              alt="Dra. Camilla Sousa - Nutrição Integrativa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover shadow-inner hover:scale-102 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Expert Brief Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-xl mx-auto text-center"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-title tracking-tight leading-[1.2] mb-2.5 font-semibold">
            Dra. Camilla Sousa
          </h1>
          <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-brand-gold font-semibold uppercase mb-5">
            Nutrição Clínica Integrativa & Longevidade • CRN-MA 3281
          </p>
          
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-6" />

          <p className="font-sans text-base sm:text-lg text-brand-title/80 leading-relaxed font-light mb-10">
            Acompanhamento altamente estratégico focado em <strong className="text-brand-title font-medium">Emagrecimento, Longevidade, Modulação Intestinal, Saúde da Mulher e Lipedema</strong>. Sua saúde tratada com a individualidade, a ciência e o acolhimento que você merece.
          </p>
        </motion.div>

        {/* Pulsing Central WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex justify-center animate-pulse-glow"
        >
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative select-none inline-flex items-center gap-3.5 bg-brand-btn text-brand-bg hover:bg-brand-btn-hover text-sm sm:text-base font-medium tracking-wider py-4.5 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl active:scale-98"
          >
            {/* Pulse highlight */}
            <span className="absolute -inset-0.5 rounded-full bg-brand-btn/15 blur group-hover:bg-brand-btn/25 transition-all duration-300" />
            
            <MessageSquare className="w-5 h-5 fill-brand-bg text-brand-bg transition-transform group-hover:rotate-6 duration-200" />
            <span className="relative z-10">Fazer Agendamento via WhatsApp</span>
          </a>
        </motion.div>

        {/* Embedded Instagram video directly underneath the call to action button */}
        <InstagramVideo />
      </div>
    </section>
  );
}
