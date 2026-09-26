import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  Calendar,
  CheckCircle2,
  Download,
  Instagram,
  Medal,
  Shield,
  Trophy,
} from "lucide-react";
import { ATHLETES, getAthleteBySlug } from "@/lib/data/athletes";
import { Athlete3DCard } from "@/components/athlete-3d-card";

interface AthletePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ATHLETES.map((athlete) => ({
    slug: athlete.slug,
  }));
}

export default async function AthleteDetailPage({ params }: AthletePageProps) {
  const { slug } = await params;
  const athlete = getAthleteBySlug(slug);

  if (!athlete) {
    notFound();
  }

  return (
    <div
      role="region"
      aria-label={`Ficha Técnica Oficial e Media Kit de ${athlete.name}`}
      className="min-h-screen text-white pt-8 pb-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Navigation & Breadcrumb */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <Link
            href="/roster"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-textSecondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Roster</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-brand-textMuted uppercase tracking-wider">
              Ficha Técnica Oficial Kozmo
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
          </div>
        </div>

        {/* Hero Athlete Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Big Headline & Info */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {athlete.militaryAffiliation && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#4A5538] text-white font-mono text-xs font-semibold tracking-wider">
                    <Shield className="w-3.5 h-3.5 text-[#E8D49E]" />
                    {athlete.militaryAffiliation}
                  </span>
                )}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded font-mono text-xs font-bold tracking-wider border backdrop-blur-md ${
                    athlete.belt.toLowerCase().includes("preta")
                      ? "bg-black/90 text-brand-gold border-brand-gold/40"
                      : athlete.belt.toLowerCase().includes("roxa")
                      ? "bg-[#2A153E]/95 text-[#D8B4FE] border-[#9333EA]/50"
                      : athlete.belt.toLowerCase().includes("azul")
                      ? "bg-[#0E233C]/95 text-[#93C5FD] border-[#3B82F6]/50"
                      : "bg-white/15 text-white border-white/30"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  {athlete.belt}
                </span>
                <span className="px-3 py-1 rounded bg-white/10 text-white font-mono text-xs font-semibold tracking-wider">
                  {athlete.category}
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
                {athlete.name}
              </h1>

              {athlete.nickname && (
                <p className="font-editorial text-2xl text-brand-gold italic">
                  &ldquo;{athlete.nickname}&rdquo;
                </p>
              )}
            </div>

            <p className="font-sans text-brand-textSecondary text-base leading-relaxed max-w-2xl">
              {athlete.bio}
            </p>

            {/* Social & Official Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={athlete.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-brand-surface border border-white/[0.1] hover:border-brand-gold text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-brand-gold" />
                <span>Instagram Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-textMuted" />
              </a>

              <a
                href="#booking"
                className="px-6 py-3 rounded-lg bg-brand-gold text-brand-black hover:bg-brand-goldLight font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Proposta de Patrocínio / Luta</span>
              </a>
            </div>

            {/* Medal Tally Big Showcase */}
            <div className="pt-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">
                Total Acumulado de Pódios Oficiais
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-brand-surface border border-white/[0.08]">
                  <span className="font-mono text-xs text-brand-gold uppercase block">
                    Ouro 🥇
                  </span>
                  <span className="font-editorial text-4xl font-extrabold text-white mt-1 block">
                    {athlete.medals.gold}
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Títulos de Campeão
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-brand-surface border border-white/[0.08]">
                  <span className="font-mono text-xs text-brand-silver uppercase block">
                    Prata 🥈
                  </span>
                  <span className="font-editorial text-4xl font-extrabold text-white mt-1 block">
                    {athlete.medals.silver}
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Vice-Campeonatos
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-brand-surface border border-white/[0.08]">
                  <span className="font-mono text-xs text-brand-bronze uppercase block">
                    Bronze 🥉
                  </span>
                  <span className="font-editorial text-4xl font-extrabold text-white mt-1 block">
                    {athlete.medals.bronze}
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Semifinais Oficiais
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-gradient-to-br from-brand-surface to-brand-gold/10 border border-brand-gold/30">
                  <span className="font-mono text-xs text-brand-gold uppercase block font-bold">
                    Total Geral 🏆
                  </span>
                  <span className="font-editorial text-4xl font-black text-brand-gold mt-1 block">
                    {athlete.medals.total}
                  </span>
                  <span className="font-mono text-[10px] text-brand-goldLight uppercase mt-1 block">
                    Medalhas na Carreira
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Titanium Pass */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full">
              <Athlete3DCard athlete={athlete} />
            </div>
          </div>
        </div>

        {/* Palmarès & Competition Record */}
        <div className="border-t border-white/[0.08] pt-16 space-y-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
              Histórico Competitivo Oficial
            </span>
            <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white">
              PALMARÈS DE ELITE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {athlete.highlightTitles.map((title, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-brand-surface border border-white/[0.08] flex items-start gap-4 hover:border-brand-gold/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-editorial text-base font-bold text-white">
                    {title}
                  </h4>
                  <p className="font-mono text-xs text-brand-textMuted uppercase mt-1">
                    Chancela Oficial IBJJF / CBJJ / FPJJ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Military Background Section (Special spotlight for Eduardo) */}
        {athlete.militaryAffiliation && (
          <div className="rounded-2xl bg-[#121510] border border-[#4A5538]/60 p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#4A5538] text-white font-mono text-xs uppercase tracking-wider font-semibold">
                <Shield className="w-3.5 h-3.5 text-[#E8D49E]" />
                Representação Institucional
              </div>
              <h3 className="font-display text-3xl sm:text-4xl uppercase text-white">
                DISCIPLINA DAS FORÇAS ARMADAS BRASILEIRAS
              </h3>
              <p className="font-sans text-sm text-brand-textSecondary leading-relaxed">
                A trajetória de Eduardo Carvalho é moldada pelos valores do Exército Brasileiro: retidão, coragem, preparo físico exemplar e compromisso absoluto com a vitória. Como atleta militar, ele representa o Brasil nos principais campeonatos desportivos militares e civis ao redor do mundo.
              </p>
            </div>
          </div>
        )}

        {/* Action Combat Image Gallery (e.g. Gustavo Veiga) */}
        {athlete.actionImage && (
          <div className="border-t border-white/[0.08] pt-16 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
                Registro de Combate // Ação no Tatame
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white">
                MOMENTO COMPETITIVO
              </h2>
            </div>
            <div className="relative w-full h-[400px] sm:h-[540px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#121319]">
              <Image
                src={athlete.actionImage}
                alt={`${athlete.name} em combate`}
                fill
                className="object-cover object-center filter contrast-110 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-xs text-white/90">
                <span>Disputa Oficial // Guarda & Transição Técnica</span>
                <span className="text-brand-gold font-semibold">Kozmo High Performance</span>
              </div>
            </div>
          </div>
        )}

        {/* Booking & Sponsorship Inquiry Form */}
        <div id="booking" className="border-t border-white/[0.08] pt-16">
          <div className="max-w-3xl mx-auto rounded-3xl bg-brand-surface border border-white/[0.1] p-8 sm:p-12 space-y-6">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold">
                Contratação & Patrocínio
              </span>
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                REQUISITAR PARTICIPAÇÃO DE {athlete.name.toUpperCase()}
              </h3>
              <p className="font-sans text-xs text-brand-textSecondary max-w-lg mx-auto">
                Envie sua proposta de patrocínio, convite para evento de grappling ou solicitação de seminário internacional. Retorno em até 24 horas.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome do Representante / Empresa"
                  className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold font-sans"
                />
                <input
                  type="email"
                  placeholder="E-mail de Contato"
                  className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefone / WhatsApp"
                  className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold font-sans"
                />
                <select className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold font-sans">
                  <option value="sponsorship">Patrocínio & Marca</option>
                  <option value="fight">Convite para GP / Superluta</option>
                  <option value="seminar">Seminário / Workshop</option>
                  <option value="media">Presença VIP / Audiovisual</option>
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Detalhes da proposta (local, data, orçamento estimado)..."
                className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold font-sans resize-none"
              />

              <button
                type="button"
                className="w-full py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <span>Enviar Proposta Diretamente à Agência</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
