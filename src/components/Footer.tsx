import { Flame, Instagram, MapPin, Phone, HelpCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-title text-[#F1E4DA] pt-16 pb-12 overflow-hidden border-t border-brand-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#F1E4DA]/10">
          
          {/* Column 1: Expert Brand & Motto */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex flex-col">
              <a href="#" className="font-display text-xl sm:text-2xl tracking-[0.2em] font-medium text-brand-bg uppercase">
                {CLINIC_INFO.name}
              </a>
              <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold uppercase mt-1">
                Nutrição Integrativa & Alta Performance
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#F1E4DA]/70 font-light leading-relaxed max-w-sm">
              Desenvolvemos planejamentos alimentares focados em desinflamação, controle de Lipedema, reabilitação da flora intestinal e longevidade de excelência para devolver sua vitalidade original.
            </p>
            
            {/* Social Controls */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-brand-gold/20 hover:border-brand-gold text-[#F1E4DA]/80 hover:text-brand-bg hover:bg-brand-gold/10 transition-all duration-300"
                aria-label="Acessar perfil de Instagram"
              >
                <Instagram className="w-4.5 h-4.5 text-brand-gold" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick clinical specialties list */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Áreas de Destaque
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F1E4DA]/80 font-light font-sans">
              {CLINIC_INFO.slogans.map((spec, i) => (
                <li key={i} className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Fast navigation details of physical coordinates */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="font-sans text-xs font-semibold tracking-widest text-brand-gold uppercase">
              Canais & Coordenadas
            </h4>
            <ul className="space-y-3 text-[#F1E4DA]/80 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Medical Center<br />
                  Av. Bernardo Sayão, 3650 - Imperatriz - MA
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-gold flex-shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp de Agendamentos
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Corporate baseline: CNPJ, credentials, copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#F1E4DA]/50 font-light">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 justify-center sm:justify-start">
            <span>© {currentYear} {CLINIC_INFO.name} • Nutrição & Longevidade</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Dra. Camilla Sousa • Nutricionista Clínica Integrativa CRN-MA 3281</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
