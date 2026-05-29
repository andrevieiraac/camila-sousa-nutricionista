import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MessageSquare, Heart, Eye, X, Check } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function SocialProof() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const proofImages = [
    { url: 'https://i.imgur.com/zXP06IQ.png', alt: 'Resultado e Conversa de Sucesso 1' },
    { url: 'https://i.imgur.com/m7vZv0F.png', alt: 'Resultado e Conversa de Sucesso 2' },
    { url: 'https://i.imgur.com/CXZBZOo.png', alt: 'Resultado e Conversa de Sucesso 3' },
    { url: 'https://i.imgur.com/VOqLIK3.png', alt: 'Resultado e Conversa de Sucesso 4' },
    { url: 'https://i.imgur.com/tLdzj1P.png', alt: 'Resultado e Conversa de Sucesso 5' },
    { url: 'https://i.imgur.com/Q33QfbJ.png', alt: 'Resultado e Conversa de Sucesso 6' },
    { url: 'https://i.imgur.com/VLJ7qGN.png', alt: 'Resultado e Conversa de Sucesso 7' },
    { url: 'https://i.imgur.com/5d5axv0.png', alt: 'Resultado e Conversa de Sucesso 8' },
    { url: 'https://i.imgur.com/feK49qi.png', alt: 'Resultado e Conversa de Sucesso 9' },
    { url: 'https://i.imgur.com/pgKWHZ3.png', alt: 'Resultado e Conversa de Sucesso 10' }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-gold font-semibold uppercase block mb-3">
            Evidências de Sucesso
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-title tracking-tight font-medium">
            Resultados Comprovados
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mt-6 mb-4" />
          <p className="font-sans text-sm sm:text-base text-brand-title/70 font-light">
            Acompanhe o retorno espontâneo das nossas pacientes e os marcos reais de transformação de saúde, energia e bem-estar alcançados. Clique sobre qualquer imagem para ampliá-la.
          </p>
        </div>

        {/* Real Proof Images - Grid with staggered fade animation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {proofImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.6) }}
              onClick={() => setSelectedImage(img.url)}
              className="relative group cursor-pointer aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-accent/20 bg-brand-accent-light/10 shadow-sm hover:shadow-lg hover:shadow-brand-gold/10 hover:border-brand-gold/50 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image component */}
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
              />
              
              {/* Elegant hover overlay */}
              <div className="absolute inset-0 bg-brand-title/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-bg/95 p-3 rounded-full text-brand-btn shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-5 h-5 text-brand-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conversional Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-[2.5rem] bg-brand-accent-light/10 border-2 border-brand-gold/30 hover:border-brand-gold/50 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto shadow-sm hover:shadow-brand-gold/5 hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start gap-4 text-left">
            <div className="p-3 bg-brand-btn rounded-2xl text-brand-gold flex-shrink-0 mt-1 shadow-sm border border-brand-gold/10">
              <Sparkles className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-brand-title font-medium leading-tight">
                Sua saúde merece excelência científica
              </h3>
              <p className="font-sans text-sm text-brand-title/75 font-light mt-2 max-w-xl leading-relaxed">
                Cada um desses resultados representa uma jornada personalizada de investigação, reequilíbrio metabólico e acompanhamento contínuo no tratamento de Lipedema, disbiose e emagrecimento saudável.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 text-xs font-semibold text-brand-title/85">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-gold stroke-[3]" /> Avaliação Individual e Aprofundada
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-gold stroke-[3]" /> Canal Exclusivo de WhatsApp
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto flex-shrink-0 text-center">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-brand-btn text-brand-bg hover:bg-brand-btn-hover text-sm sm:text-base font-semibold tracking-wider py-4 px-8 rounded-full transition-all duration-300 shadow-md active:scale-98"
            >
              <MessageSquare className="w-4.5 h-4.5 fill-brand-bg text-brand-bg" />
              <span>Conquistar Meu Resultado</span>
            </a>
          </div>
        </motion.div>

        {/* High detailed lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-md w-full aspect-[9/16] rounded-3xl overflow-hidden border border-brand-accent-light/20 shadow-2xl bg-stone-900"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                  aria-label="Minimizar imagem"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Extended high res image loaded into frame */}
                <img
                  src={selectedImage}
                  alt="Resultado ampliado de paciente da Dra. Camilla Sousa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
