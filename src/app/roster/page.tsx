"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Shield, Trophy } from "lucide-react";
import { ATHLETES } from "@/lib/data/athletes";

export default function RosterPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredAthletes = ATHLETES.filter((athlete) => {
    if (filter === "all") return true;
    if (filter === "black-belt") return athlete.belt.toLowerCase().includes("preta");
    if (filter === "purple-belt") return athlete.belt.toLowerCase().includes("roxa");
    if (filter === "blue-belt") return athlete.belt.toLowerCase().includes("azul");
    if (filter === "white-belt") return athlete.belt.toLowerCase().includes("branca");
    if (filter === "military") return Boolean(athlete.militaryAffiliation);
    if (filter === "no-gi") return athlete.discipline === "BJJ No-Gi" || athlete.discipline === "Both";
    return true;
  });

  return (
    <div className="min-h-screen bg-brand-black text-white pt-12 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="border-b border-white/[0.08] pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
              Kozmo Agency Roster
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-white mb-4">
            ATLETAS OFICIAIS
          </h1>
          <p className="font-sans text-brand-textSecondary text-base max-w-2xl">
            Representamos competidores que definem o padrão mundial de artes marciais. Campeões mundiais, medalhistas internacionais e atletas das Forças Armadas.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5 pt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "all"
                  ? "bg-brand-gold text-brand-black font-bold"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Todos ({ATHLETES.length})
            </button>
            <button
              onClick={() => setFilter("military")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "military"
                  ? "bg-[#4A5538] text-white font-bold border border-[#6B7A52]"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Exército 🇧🇷
            </button>
            <button
              onClick={() => setFilter("black-belt")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "black-belt"
                  ? "bg-brand-gold text-brand-black font-bold"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Faixa Preta
            </button>
            <button
              onClick={() => setFilter("purple-belt")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "purple-belt"
                  ? "bg-[#7E22CE] text-white font-bold border border-[#A855F7]"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Faixa Roxa
            </button>
            <button
              onClick={() => setFilter("blue-belt")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "blue-belt"
                  ? "bg-[#1D4ED8] text-white font-bold border border-[#3B82F6]"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Faixa Azul
            </button>
            <button
              onClick={() => setFilter("white-belt")}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-colors ${
                filter === "white-belt"
                  ? "bg-white text-brand-black font-bold border border-white"
                  : "bg-brand-surface text-brand-textSecondary hover:text-white border border-white/[0.08]"
              }`}
            >
              Faixa Branca
            </button>
          </div>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAthletes.map((athlete) => (
            <div
              key={athlete.id}
              className="rounded-2xl bg-brand-surface border border-white/[0.08] overflow-hidden hover:border-brand-gold/50 transition-all duration-300 flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative h-80 w-full bg-[#14151C] overflow-hidden">
                <Image
                  src={athlete.imageBw}
                  alt={athlete.name}
                  fill
                  className="object-cover object-top filter grayscale group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {athlete.militaryAffiliation && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#4A5538]/90 text-white font-mono text-[10px] font-semibold tracking-wider">
                      <Shield className="w-3 h-3 text-[#E8D49E]" />
                      {athlete.militaryAffiliation}
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
                    {athlete.belt}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded bg-brand-gold text-brand-black font-mono text-xs font-bold">
                    {athlete.medals.total} MEDALHAS
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">
                      {athlete.name}
                    </h3>
                    <span className="font-mono text-xs text-brand-gold font-semibold">
                      {athlete.category}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brand-textSecondary line-clamp-3 leading-relaxed">
                    {athlete.bio}
                  </p>
                </div>

                {/* Titles List */}
                <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                  {athlete.highlightTitles.slice(0, 3).map((title, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 font-mono text-xs text-brand-textSecondary"
                    >
                      <Trophy className="w-3 h-3 text-brand-gold shrink-0" />
                      <span className="truncate">{title}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <Link
                  href={`/athletes/${athlete.slug}`}
                  className="w-full py-3 px-4 rounded-lg bg-brand-surfaceElevated hover:bg-brand-gold text-brand-textSecondary hover:text-brand-black border border-white/[0.08] hover:border-brand-gold font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-between transition-all duration-300"
                >
                  <span>Ver Media Kit Completo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
