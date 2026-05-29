import { motion } from 'motion/react';
import { MapPin, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function PhysicalSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg border-b border-brand-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Info and Addresses */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-brand-gold font-semibold uppercase block mb-3">
                Agendamento Presencial
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-title tracking-tight font-medium">
                Infraestrutura e Localização Privilegiada
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-brand-gold to-transparent mt-5" />
            </div>

            <p className="font-sans text-sm sm:text-base text-brand-title/70 font-light leading-relaxed max-w-xl">
              Nossos atendimentos presenciais ocorrem no prestigiado <strong className="text-brand-gold font-semibold">Medical Center</strong> em Imperatriz - MA. Um ambiente estruturado com foco em privacidade refinada, excelente acessibilidade, estacionamento privativo e o máximo sigilo profissional.
            </p>

            {/* Structured Card Items */}
            <div className="space-y-4">
              
              {/* Address card formatted with Monospace for technical/certified aesthetics */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-accent-light/10 border border-brand-gold/20 hover:border-brand-gold/40 transition-colors duration-300">
                <div className="p-3 bg-brand-btn rounded-xl text-brand-gold flex-shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Endereço Oficial
                  </h4>
                  <p className="font-mono text-xs sm:text-sm text-brand-title/95 mt-2 leading-relaxed tracking-tight break-words">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-accent-light/10 border border-brand-gold/20 hover:border-brand-gold/40 transition-colors duration-300">
                <div className="p-3 bg-brand-btn rounded-xl text-brand-gold flex-shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Horários de Atendimento
                  </h4>
                  <p className="font-display text-sm sm:text-base text-brand-title font-medium mt-1.5 leading-relaxed">
                    {CLINIC_INFO.hours}
                  </p>
                  <p className="font-sans text-[11px] text-brand-accent uppercase tracking-wider mt-0.5">
                    Consultas agendadas exclusivamente com antecedência
                  </p>
                </div>
              </div>

            </div>

            {/* Side-by-Side CTA Buttons as explicitly requested */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent-light/30 text-brand-title hover:bg-brand-accent-light/55 border border-brand-accent/30 font-semibold tracking-wide text-xs sm:text-sm py-4 px-6 rounded-full transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Ver no Google Maps</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-btn text-brand-bg hover:bg-brand-btn-hover font-semibold tracking-wide text-xs sm:text-sm py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Recepção</span>
              </a>
            </div>

          </div>

          {/* Column 2: Sleek Interactive Simulated Map UI Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] overflow-hidden border border-brand-gold/20 bg-brand-accent-light/10 shadow-lg p-3"
            >
              {/* Premium map frame overlay */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-brand-accent/15">
                {/* Simulated high-quality technical map graphics style */}
                <div className="absolute inset-0 bg-[#e5e3df] flex flex-col justify-between p-6">
                  {/* Grid background for mapping feeling */}
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8f8e8c_1.5px,transparent_1.5px)] bg-[size:16px_16px]" />
                  
                  {/* Decorative map directions line */}
                  <div className="absolute inset-0 pointer-events-none opacity-40">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 50,150 Q 150,100 220,180 T 350,300" fill="none" stroke="#D4AF37" strokeWidth="4" strokeDasharray="6,6" />
                    </svg>
                  </div>

                  <div className="relative z-10 self-start bg-brand-bg/95 backdrop-blur-sm border border-brand-gold/30 px-4 py-2.5 rounded-full shadow-sm text-[10px] tracking-wider text-brand-title font-medium uppercase">
                    Imperatriz - MA • Maranhão Novo
                  </div>

                  {/* Centered locator dot */}
                  <div className="relative z-10 mx-auto flex flex-col items-center">
                    <div className="relative flex justify-center items-center">
                      <span className="absolute animate-ping inline-flex h-12 w-12 rounded-full bg-brand-gold opacity-30" />
                      <div className="relative p-4 rounded-full bg-brand-btn text-brand-gold shadow-lg border border-brand-gold/30">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="mt-3.5 bg-brand-title text-brand-gold py-1.5 px-3.5 rounded-xl text-[11px] font-semibold tracking-wide shadow-sm text-center border border-brand-gold/20">
                      Medical Center
                    </div>
                  </div>

                  <div className="relative z-10 self-end w-full">
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-brand-bg/95 backdrop-blur-sm border border-brand-gold/30 px-5 py-3 rounded-2xl hover:bg-brand-bg hover:border-brand-gold/50 shadow-md transition-all duration-300"
                    >
                      <div className="text-left">
                        <p className="font-display text-xs font-semibold text-brand-title">Av. Bernardo Sayão, 3650</p>
                        <p className="font-sans text-[9px] font-medium tracking-wide text-brand-gold uppercase mt-0.5">Medical Center</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-brand-gold" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
