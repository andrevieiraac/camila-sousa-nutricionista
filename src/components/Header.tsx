import { Instagram, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Name / Clinic Sign */}
        <div className="flex flex-col">
          <a href="#" className="font-display text-lg sm:text-xl tracking-[0.18em] font-medium text-brand-title hover:opacity-90 transition-opacity flex items-center gap-1.5">
            {CLINIC_INFO.name} <span className="text-brand-gold text-xs">◆</span>
          </a>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.25em] text-brand-gold font-semibold uppercase mt-0.5">
            NUTRICIONISTA FUNCIONAL
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Instagram Logo */}
          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-full border border-brand-accent/20 text-brand-accent hover:bg-brand-accent/10 hover:text-brand-title transition-all duration-300"
            aria-label="Instagram da Dra. Camilla Sousa"
          >
            <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
          </a>

          {/* WhatsApp Button */}
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xs:flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-semibold tracking-wide py-2 px-4 sm:py-2.5 sm:px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
