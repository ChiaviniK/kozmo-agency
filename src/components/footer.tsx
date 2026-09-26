import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0B0E] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Main Statement */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-brand-gold text-brand-black flex items-center justify-center font-display text-lg font-bold">
                K
              </div>
              <span className="font-editorial font-bold text-xl tracking-wider text-white">
                KOZMO AGENCY
              </span>
            </div>
            <p className="font-sans text-brand-textSecondary text-sm max-w-md leading-relaxed">
              Agência de gestão estratégica, patrocínios internacionais e posicionamento de marca para atletas de elite das artes marciais e esportes de combate.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-brand-textMuted uppercase tracking-wider">
              <span>São Paulo</span>
              <span>•</span>
              <span>Los Angeles</span>
              <span>•</span>
              <span>Abu Dhabi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Explorar
            </h4>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <Link href="/roster" className="text-brand-textSecondary hover:text-white transition-colors">
                  Atletas Oficiais
                </Link>
              </li>
              <li>
                <Link href="/athletes/eduardo-carvalho" className="text-brand-textSecondary hover:text-white transition-colors flex items-center gap-1">
                  <span>Eduardo Carvalho (Media Kit)</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                </Link>
              </li>
              <li>
                <Link href="/#agency" className="text-brand-textSecondary hover:text-white transition-colors">
                  Modelo de Gestão
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-brand-textSecondary hover:text-white transition-colors">
                  Agendar Reunião de Parceria
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Canais Oficiais
            </h4>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider">
              <li>
                <a
                  href="https://www.instagram.com/carvalhobjj93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-textSecondary hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Instagram @carvalhobjj93</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kozmoagency.com"
                  className="text-brand-textSecondary hover:text-white transition-colors"
                >
                  contact@kozmoagency.com
                </a>
              </li>
              <li>
                <span className="text-brand-textMuted">
                  Atendimento para Marcas & Patrocinadores
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-textMuted">
          <p>© {new Date().getFullYear()} KOZMO AGENCY. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacidade (LGPD)</span>
            <span className="hover:text-white cursor-pointer">Termos de Gestão</span>
            <span className="text-brand-gold">Titanium Grade Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
