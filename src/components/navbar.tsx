import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080A]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand-gold text-brand-black flex items-center justify-center font-display text-xl font-bold tracking-tight group-hover:scale-105 transition-transform duration-300">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-editorial font-extrabold text-lg tracking-wider text-white">
              KOZMO
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold -mt-1 font-semibold">
              AGENCY // ATHLETIC MANAGEMENT
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/roster"
            className="text-xs uppercase tracking-widest text-brand-textSecondary hover:text-white transition-colors duration-200 font-mono"
          >
            Atletas & Roster
          </Link>
          <Link
            href="/#agency"
            className="text-xs uppercase tracking-widest text-brand-textSecondary hover:text-white transition-colors duration-200 font-mono"
          >
            Filosofia & Gestão
          </Link>
          <Link
            href="/athletes/eduardo-carvalho"
            className="text-xs uppercase tracking-widest text-brand-textSecondary hover:text-white transition-colors duration-200 font-mono flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            Media Kit Eduardo Carvalho
          </Link>
          <Link
            href="/#contact"
            className="text-xs uppercase tracking-widest text-brand-textSecondary hover:text-white transition-colors duration-200 font-mono"
          >
            Contato & Parcerias
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-mono font-semibold text-brand-black bg-brand-gold hover:bg-brand-goldLight transition-all duration-300 group"
          >
            <span>Representação</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
