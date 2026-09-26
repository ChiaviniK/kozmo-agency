"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Award,
  Shield,
  Trophy,
  ChevronRight,
  Sparkles,
  Users,
  Compass,
} from "lucide-react";
import { Athlete3DCard } from "@/components/athlete-3d-card";
import { SquadLineup } from "@/components/squad-lineup";
import { ATHLETES } from "@/lib/data/athletes";

export default function HomePage() {
  const [selectedAthleteSlug, setSelectedAthleteSlug] = useState<string>("eduardo-carvalho");

  const currentAthlete =
    ATHLETES.find((a) => a.slug === selectedAthleteSlug) || ATHLETES[0];

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        aria-label="Apresentação da Agência"
        className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 px-6 border-b border-white/[0.08] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                KOZMO // COMBAT & CELESTIAL STANDARD
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-white">
                WE REPRESENT <br />
                <span className="text-brand-gold">THE RELENTLESS.</span>
              </h1>
              <p className="font-editorial text-lg sm:text-xl text-[#B4B8C7] max-w-xl font-light leading-relaxed">
                Gestão esportiva de elite para atletas de alto rendimento nas artes marciais. Transformamos medalhas e disciplina em autoridade global, patrocínios sustentáveis e legado duradouro.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/[0.08] max-w-lg">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-white block">
                  157+
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8E92A4]">
                  Pódios Oficiais
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-brand-gold block">
                  4
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8E92A4]">
                  Atletas no Roster
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-white block">
                  100%
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8E92A4]">
                  Foco & Disciplina
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#spotlight"
                className="px-7 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all duration-300 rounded-lg shadow-lg focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <span>Explorar Atletas 3D</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/roster"
                className="px-7 py-3.5 bg-transparent hover:bg-white/[0.06] text-white border border-white/[0.16] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors duration-300 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <Users className="w-4 h-4 text-brand-gold" />
                <span>Ver Roster Geral</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Preview 3D Pass */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="text-center mb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#8E92A4]">
                Passe Interativo 3D // Incline o cursor sobre o card
              </span>
            </div>
            <Athlete3DCard athlete={currentAthlete} />
          </div>
        </div>
      </section>

      {/* 2. INFINITE EDITORIAL MARQUEE */}
      <div className="border-b border-white/[0.08] bg-[#0A0B0E]/80 backdrop-blur-md py-4 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-none overflow-x-auto no-scrollbar justify-between px-6 font-mono text-xs uppercase tracking-[0.25em] text-[#8E92A4]">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            KOZMO AGENCY
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            IBJJF WORLD CHAMPIONS
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            FORÇAS ARMADAS DO BRASIL 🇧🇷
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            NO-GI & GI HIGH PERFORMANCE
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            GLOBAL SPONSORSHIPS
          </span>
        </div>
      </div>

      {/* 2.5. KOZMO SQUAD LINEUP (FIFA ULTIMATE TEAM FORMATION STYLE) */}
      <SquadLineup athletes={ATHLETES} />

      {/* 3. INTERACTIVE ATHLETE SPOTLIGHT (MULTI-ATHLETE SWITCHER) */}
      <section
        id="spotlight"
        aria-label="Vitrine Interativa dos Atletas"
        className="py-24 px-6 border-b border-white/[0.08] relative"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
                Vitrine Interativa // Explore sem rolar a página
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                SPOTLIGHT DOS ATLETAS
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-sm text-[#A6AAB8] leading-relaxed">
                Selecione o atleta abaixo para inspecionar instantaneamente sua ficha técnica, palmarès oficial e credencial física em 3D.
              </p>
            </div>
          </div>

          {/* Interactive Athlete Tab Selector Bar */}
          <div
            role="tablist"
            aria-label="Seleção rápida de atleta em destaque"
            className="flex flex-wrap gap-3 p-2 bg-[#0E1017]/80 backdrop-blur-md rounded-2xl border border-white/[0.08]"
          >
            {ATHLETES.map((athlete) => {
              const isSelected = athlete.slug === selectedAthleteSlug;
              return (
                <button
                  key={athlete.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedAthleteSlug(athlete.slug)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-gold ${
                    isSelected
                      ? "bg-brand-gold text-brand-black font-bold shadow-md scale-[1.02]"
                      : "bg-[#14161F] text-[#A6AAB8] hover:text-white hover:bg-[#1B1E2B] border border-white/[0.04]"
                  }`}
                >
                  {/* Belt Dot */}
                  <span
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      athlete.belt.toLowerCase().includes("preta")
                        ? "bg-black border border-brand-gold"
                        : athlete.belt.toLowerCase().includes("roxa")
                        ? "bg-[#9333EA]"
                        : athlete.belt.toLowerCase().includes("azul")
                        ? "bg-[#3B82F6]"
                        : "bg-white border border-black/30"
                    }`}
                  />
                  <span>{athlete.name}</span>
                  {athlete.nickname && (
                    <span className="opacity-75 hidden sm:inline">
                      &ldquo;{athlete.nickname}&rdquo;
                    </span>
                  )}
                  {athlete.militaryAffiliation && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#4A5538] text-white">
                      🇧🇷
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Dynamic Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0E1017]/60 backdrop-blur-md border border-white/[0.08] p-6 sm:p-10 rounded-3xl">
            {/* Left Column: Portrait & Palmarès */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  {currentAthlete.militaryAffiliation && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#4A5538] text-white font-mono text-[11px] font-semibold tracking-wider">
                      <Shield className="w-3 h-3 text-[#E8D49E]" />
                      {currentAthlete.militaryAffiliation}
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-[11px] font-bold tracking-wider uppercase border ${
                      currentAthlete.belt.toLowerCase().includes("preta")
                        ? "bg-black/90 text-brand-gold border-brand-gold/40"
                        : currentAthlete.belt.toLowerCase().includes("roxa")
                        ? "bg-[#2A153E]/95 text-[#D8B4FE] border-[#9333EA]/50"
                        : currentAthlete.belt.toLowerCase().includes("azul")
                        ? "bg-[#0E233C]/95 text-[#93C5FD] border-[#3B82F6]/50"
                        : "bg-white/15 text-white border-white/30"
                    }`}
                  >
                    <Award className="w-3 h-3 shrink-0" />
                    {currentAthlete.belt}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[11px] font-semibold">
                    {currentAthlete.category}
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                  {currentAthlete.name}
                </h3>
                {currentAthlete.nickname && (
                  <p className="font-editorial text-xl text-brand-gold italic">
                    &ldquo;{currentAthlete.nickname}&rdquo;
                  </p>
                )}
              </div>

              <p className="font-sans text-sm sm:text-base text-[#B4B8C7] leading-relaxed">
                {currentAthlete.bio}
              </p>

              {/* Title Breakdown Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentAthlete.highlightTitles.map((title, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#141620] border border-white/[0.06] flex items-start gap-2.5"
                  >
                    <Trophy className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="font-mono text-xs text-white leading-tight">
                      {title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/athletes/${currentAthlete.slug}`}
                  className="px-6 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-goldLight font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <span>Ver Ficha Técnica Completa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {currentAthlete.instagram && (
                  <a
                    href={currentAthlete.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-transparent text-white border border-white/[0.14] font-mono text-xs uppercase tracking-widest font-semibold hover:border-brand-gold rounded-lg transition-colors flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    <span>Instagram Oficial</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: 3D Titanium Pass for Selected Athlete */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <Athlete3DCard athlete={currentAthlete} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. AGENCY SERVICES & PHILOSOPHY */}
      <section
        id="agency"
        aria-label="Filosofia de Gestão da Kozmo Agency"
        className="py-24 px-6 border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block">
              Pilares de Gestão // Kozmo Celestial Ecosystem
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
              NÃO AGENCIAMOS LUTADORES. CONSTRUÍMOS MARCAS GLOBAIS.
            </h2>
            <p className="font-sans text-sm text-[#A6AAB8] leading-relaxed">
              Atuamos na intersecção entre o rigor marcial de alto rendimento e as estratégias comerciais internacionais de grandes marcas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#0E1017]/80 backdrop-blur-md border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Contratos & Superlutas
              </h3>
              <p className="font-sans text-xs text-[#A6AAB8] leading-relaxed">
                Negociação direta com IBJJF, ADCC, UFC Fight Pass, ONE Championship e eventos de grappling com purse garantido e royalties.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E1017]/80 backdrop-blur-md border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Patrocínios de Elite
              </h3>
              <p className="font-sans text-xs text-[#A6AAB8] leading-relaxed">
                Conexão com marcas de suplementação de ponta, marcas de kimono de luxo, vestuário técnico e empresas globais de tecnologia.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E1017]/80 backdrop-blur-md border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Media Kit & Branding
              </h3>
              <p className="font-sans text-xs text-[#A6AAB8] leading-relaxed">
                Produção audiovisual editorial, relatórios de engajamento social auditados e passes digitais para apresentação a patrocinadores.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E1017]/80 backdrop-blur-md border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Blindagem Jurídica & LGPD
              </h3>
              <p className="font-sans text-xs text-[#A6AAB8] leading-relaxed">
                Assessoria jurídica internacional para direitos de imagem, contratos de exclusividade e adequação total à legislação desportiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROSTER PREVIEW SHOWCASE */}
      <section
        id="roster-preview"
        aria-label="Catálogo Resumido do Roster"
        className="py-24 px-6 border-b border-white/[0.08]"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
                Plantel Oficial // Todas as Graduações
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                EQUIPE KOZMO AGENCY
              </h2>
            </div>
            <Link
              href="/roster"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>Ir para a Página do Roster</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATHLETES.map((athlete) => (
              <Link
                key={athlete.id}
                href={`/athletes/${athlete.slug}`}
                className="group rounded-2xl bg-[#0E1017]/80 backdrop-blur-md border border-white/[0.08] overflow-hidden hover:border-brand-gold/50 transition-all duration-300 flex flex-col focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <div className="relative h-64 w-full bg-[#14151C] overflow-hidden">
                  <Image
                    src={athlete.imageBw}
                    alt={athlete.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {athlete.militaryAffiliation && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#4A5538]/90 text-white font-mono text-[9px] font-semibold">
                        <Shield className="w-2.5 h-2.5 text-[#E8D49E]" />
                        Exército 🇧🇷
                      </span>
                    )}
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[9px] font-bold tracking-wider uppercase border backdrop-blur-md ${
                        athlete.belt.toLowerCase().includes("preta")
                          ? "bg-black/90 text-brand-gold border-brand-gold/40"
                          : athlete.belt.toLowerCase().includes("roxa")
                          ? "bg-[#2A153E]/95 text-[#D8B4FE] border-[#9333EA]/50"
                          : athlete.belt.toLowerCase().includes("azul")
                          ? "bg-[#0E233C]/95 text-[#93C5FD] border-[#3B82F6]/50"
                          : "bg-white/15 text-white border-white/30"
                      }`}
                    >
                      <Award className="w-2.5 h-2.5 shrink-0" />
                      {athlete.belt.split("(")[0].trim()}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-brand-gold text-brand-black font-mono text-[10px] font-bold">
                      {athlete.medals.total} MEDALHAS
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {athlete.name}
                    </h3>
                    {athlete.nickname && (
                      <p className="font-mono text-xs text-brand-gold">
                        &ldquo;{athlete.nickname}&rdquo;
                      </p>
                    )}
                    <p className="font-mono text-[11px] text-[#8E92A4] uppercase mt-1">
                      {athlete.category}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#A6AAB8] group-hover:text-white">
                    <span>Acessar Ficha</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT / PARTNERSHIP FORM */}
      <section
        id="contact"
        aria-label="Formulário de Contato e Parcerias"
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/[0.1] bg-[#0E1017]/85 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Contato Executivo & Parcerias
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CONECTE SUA MARCA AOS CAMPEÕES.
            </h2>
            <p className="font-sans text-sm text-[#A6AAB8] max-w-xl">
              Seja para patrocinar nossos atletas, contratar seminários técnicos ou solicitar representação de carreira na Kozmo Agency. Retornamos em até 24h.
            </p>
          </div>

          <form className="space-y-6" aria-label="Proposta de Patrocínio ou Representação">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs uppercase tracking-widest text-[#B4B8C7] block"
                >
                  Seu Nome ou da Empresa
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Ex: Marca / Patrocinador"
                  className="w-full bg-[#181A24] border border-white/[0.12] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans focus-visible:ring-2 focus-visible:ring-brand-gold"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs uppercase tracking-widest text-[#B4B8C7] block"
                >
                  E-mail Corporativo
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="contato@empresa.com"
                  className="w-full bg-[#181A24] border border-white/[0.12] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans focus-visible:ring-2 focus-visible:ring-brand-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="contact-athlete"
                  className="font-mono text-xs uppercase tracking-widest text-[#B4B8C7] block"
                >
                  Atleta de Interesse
                </label>
                <select
                  id="contact-athlete"
                  className="w-full bg-[#181A24] border border-white/[0.12] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <option value="eduardo-carvalho">Eduardo Carvalho (Faixa Preta / Exército 🇧🇷)</option>
                  <option value="monique-costa">Monique Costa (Faixa Roxa / Feminino)</option>
                  <option value="yago-carioca">Yago Carioca (Faixa Azul / Alto Rendimento)</option>
                  <option value="gustavo-veiga">Gustavo Veiga &ldquo;Boiadeiro&rdquo; (Faixa Branca)</option>
                  <option value="all">Múltiplos Atletas / Gestão Global</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-type"
                  className="font-mono text-xs uppercase tracking-widest text-[#B4B8C7] block"
                >
                  Tipo de Proposta
                </label>
                <select
                  id="contact-type"
                  className="w-full bg-[#181A24] border border-white/[0.12] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <option value="sponsorship">Patrocínio Master / Kimono / Vestuário</option>
                  <option value="seminar">Seminário Técnico / Masterclass</option>
                  <option value="superfight">Convite para Evento / Superluta</option>
                  <option value="representation">Solicitação de Representação</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-details"
                className="font-mono text-xs uppercase tracking-widest text-[#B4B8C7] block"
              >
                Detalhes da Proposta
              </label>
              <textarea
                id="contact-details"
                rows={4}
                placeholder="Descreva o escopo da parceria, prazos e proposta..."
                className="w-full bg-[#181A24] border border-white/[0.12] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans resize-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold transition-colors rounded-lg flex items-center justify-center gap-2 shadow-xl focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Enviar Solicitação de Parceria</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
