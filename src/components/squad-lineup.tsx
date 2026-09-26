"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Shield, Trophy, Sparkles, HeartHandshake } from "lucide-react";
import { Athlete } from "@/types/athlete";
import { CampSponsorshipModal } from "@/components/camp-sponsorship-modal";

interface SquadLineupProps {
  athletes: Athlete[];
}

export function SquadLineup({ athletes }: SquadLineupProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [modalAthlete, setModalAthlete] = useState<Athlete | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSponsor = (athlete: Athlete, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setModalAthlete(athlete);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="squad-lineup"
        aria-label="Escalação Tática do Plantel Kozmo"
        className="py-24 px-6 border-b border-white/[0.08] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-mono text-[10px] uppercase tracking-widest font-bold">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                Lineup Tático // Formação Oficial
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                KOZMO SQUAD LINEUP
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-sm text-[#A6AAB8] leading-relaxed">
                Passe o cursor sobre os lutadores para inspecionar os atletas em formação, acessar a ficha individual ou garantir cotas de patrocínio no próximo camp oficial.
              </p>
            </div>
          </div>

          {/* FIFA Style Interactive Panoramic Squad Formation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {athletes.map((athlete) => {
              const isHovered = hoveredSlug === athlete.slug;
              const hasActiveHover = hoveredSlug !== null;

              return (
                <div
                  key={athlete.id}
                  onMouseEnter={() => setHoveredSlug(athlete.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  className={`group relative rounded-2xl bg-[#0D0F16] border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                    isHovered
                      ? "border-brand-gold shadow-[0_20px_60px_rgba(197,160,89,0.25)] scale-[1.03] z-20"
                      : hasActiveHover
                      ? "border-white/[0.04] opacity-70 filter grayscale"
                      : "border-white/[0.08] hover:border-white/[0.2]"
                  }`}
                >
                  {/* Athlete Image Stage */}
                  <div className="relative h-[380px] w-full overflow-hidden bg-[#13151D]">
                    <Image
                      src={athlete.imageBw}
                      alt={athlete.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-top filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F16] via-[#0D0F16]/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <div className="flex flex-col gap-1">
                        {athlete.militaryAffiliation && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#4A5538]/90 text-white font-mono text-[9px] font-semibold tracking-wider">
                            <Shield className="w-2.5 h-2.5 text-[#E8D49E]" />
                            Exército 🇧🇷
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded font-mono text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${
                            athlete.belt.toLowerCase().includes("preta")
                              ? "bg-black/90 text-brand-gold border-brand-gold/40"
                              : athlete.belt.toLowerCase().includes("roxa")
                              ? "bg-[#2A153E]/95 text-[#D8B4FE] border-[#9333EA]/50"
                              : athlete.belt.toLowerCase().includes("azul")
                              ? "bg-[#0E233C]/95 text-[#93C5FD] border-[#3B82F6]/50"
                              : "bg-white/15 text-white border-white/30"
                          }`}
                        >
                          <Award className="w-3 h-3 shrink-0" />
                          {athlete.belt.split("(")[0].trim()}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] text-brand-gold font-bold px-2 py-0.5 rounded bg-black/60 border border-white/10">
                        {athlete.medals.gold} OUROS 🥇
                      </span>
                    </div>

                    {/* Tactical Info Overlay at Bottom of Image */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1">
                      <div className="font-mono text-[10px] uppercase text-brand-gold tracking-widest font-semibold">
                        {athlete.category}
                      </div>
                      <h3 className="font-display text-2xl uppercase tracking-tight text-white group-hover:text-brand-gold transition-colors">
                        {athlete.name}
                      </h3>
                      {athlete.nickname && (
                        <p className="font-editorial text-sm text-[#A6AAB8] italic -mt-1">
                          &ldquo;{athlete.nickname}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Active Camp Mission & CTAs */}
                  <div className="p-4 space-y-3.5 bg-[#0D0F16] border-t border-white/[0.06]">
                    {athlete.activeCamp && (
                      <div className="p-2.5 rounded-lg bg-[#141620] border border-white/[0.06] space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#8E92A4]">
                          <span className="uppercase text-brand-gold font-semibold">
                            Próxima Missão
                          </span>
                          <span>{athlete.activeCamp.tournamentDate}</span>
                        </div>
                        <div className="font-mono text-xs text-white truncate font-medium">
                          {athlete.activeCamp.targetTournament}
                        </div>
                      </div>
                    )}

                    {/* Direct FIFA Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <Link
                        href={`/athletes/${athlete.slug}`}
                        className="py-2.5 px-3 rounded-lg bg-[#171922] hover:bg-white/[0.1] text-white border border-white/[0.1] font-mono text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>Ficha</span>
                        <ArrowUpRight className="w-3 h-3 text-brand-gold" />
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => handleOpenSponsor(athlete, e)}
                        className="py-2.5 px-3 rounded-lg bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-[10px] uppercase tracking-wider font-bold flex items-center justify-center gap-1 transition-colors shadow-md"
                      >
                        <HeartHandshake className="w-3 h-3" />
                        <span>Apoiar Camp</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Camp Sponsorship Modal */}
      <CampSponsorshipModal
        athlete={modalAthlete}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
