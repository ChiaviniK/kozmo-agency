"use client";

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, Shield, Trophy } from "lucide-react";
import { Athlete } from "@/types/athlete";

interface Athlete3DCardProps {
  athlete: Athlete;
}

export function Athlete3DCard({ athlete }: Athlete3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-14 to +14 degrees for realistic depth)
    const rotX = -((y - centerY) / centerY) * 12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    // Glare position in percentage
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.65,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="perspective-1200 w-full max-w-[420px] mx-auto select-none">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: isHovered
            ? "transform 0.08s ease-out"
            : "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
        className="transform-style-3d relative rounded-2xl bg-[#0E0F14] border border-white/[0.12] p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 group"
      >
        {/* Holographic Specular Glare */}
        <div
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 mix-blend-overlay rounded-2xl"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 235, 180, 0.45), rgba(197, 160, 89, 0.15) 35%, transparent 70%)`,
          }}
        />

        {/* Brushed Metal Subtle Edge Highlight */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none" />

        {/* Card Header: Classification & Serial */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold font-bold">
              KOZMO TITANIUM PASS
            </span>
          </div>
          <span className="font-mono text-[10px] text-brand-textMuted tracking-widest">
            #KZ-{athlete.slug.replace(/-/g, "").slice(0, 6).toUpperCase()}
          </span>
        </div>

        {/* Athlete Image Container with Editorial Mask */}
        <div className="relative w-full h-[360px] rounded-xl overflow-hidden bg-[#14151C] border border-white/[0.06] mb-4">
          <Image
            src={athlete.imageBw}
            alt={athlete.name}
            fill
            priority
            sizes="(max-width: 420px) 100vw, 420px"
            className="object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Luxury bottom gradient shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F14] via-[#0E0F14]/40 to-transparent" />

          {/* Badges on Image */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
            {athlete.militaryAffiliation && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#4A5538]/90 backdrop-blur-md border border-[#6B7A52]/40 text-white font-mono text-[10px] font-semibold tracking-wider uppercase">
                <Shield className="w-3 h-3 text-[#E8D49E]" />
                {athlete.militaryAffiliation}
              </span>
            )}
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded backdrop-blur-md border font-mono text-[10px] font-bold tracking-wider uppercase ${
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

          {/* Quick Palmarès Badges Bottom Right of Image */}
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
            {athlete.palmares.worldTitles > 0 ? (
              <span className="px-2 py-0.5 rounded bg-brand-gold text-brand-black font-mono text-[10px] font-bold tracking-wider">
                {athlete.palmares.worldTitles}x MUNDIAL
              </span>
            ) : athlete.nickname ? (
              <span className="px-2 py-0.5 rounded bg-white/15 backdrop-blur-md text-white font-mono text-[10px] font-bold tracking-wider">
                &ldquo;{athlete.nickname}&rdquo;
              </span>
            ) : null}
            <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md text-white font-mono text-[10px] font-semibold tracking-wider">
              {athlete.medals.gold} OUROS
            </span>
          </div>
        </div>

        {/* Athlete Identity Typography */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <h3 className="font-editorial text-2xl font-extrabold tracking-tight text-white group-hover:text-brand-gold transition-colors duration-200">
              {athlete.name}
            </h3>
            <span className="font-mono text-xs text-brand-gold font-semibold tracking-widest">
              {athlete.category}
            </span>
          </div>
          <p className="font-mono text-[11px] text-brand-textMuted tracking-wider uppercase mt-0.5">
            Jiu-Jitsu Profissional • Gi & No-Gi
          </p>
        </div>

        {/* Official Medal Tally (51🥇 / 31🥈 / 22🥉 = 104 Total) */}
        <div className="grid grid-cols-4 gap-2 bg-[#14151C] rounded-xl p-3 border border-white/[0.06] mb-4">
          <div className="text-center border-r border-white/[0.08]">
            <div className="font-mono text-[9px] uppercase tracking-wider text-brand-gold font-semibold">
              Ouro
            </div>
            <div className="font-editorial text-lg font-bold text-white">
              {athlete.medals.gold}
            </div>
          </div>
          <div className="text-center border-r border-white/[0.08]">
            <div className="font-mono text-[9px] uppercase tracking-wider text-brand-silver font-semibold">
              Prata
            </div>
            <div className="font-editorial text-lg font-bold text-white">
              {athlete.medals.silver}
            </div>
          </div>
          <div className="text-center border-r border-white/[0.08]">
            <div className="font-mono text-[9px] uppercase tracking-wider text-brand-bronze font-semibold">
              Bronze
            </div>
            <div className="font-editorial text-lg font-bold text-white">
              {athlete.medals.bronze}
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[9px] uppercase tracking-wider text-white/50 font-semibold">
              Total
            </div>
            <div className="font-editorial text-lg font-extrabold text-brand-gold">
              {athlete.medals.total}
            </div>
          </div>
        </div>

        {/* Card Footer: Action */}
        <Link
          href={`/athletes/${athlete.slug}`}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-brand-surfaceElevated hover:bg-brand-gold text-brand-textSecondary hover:text-brand-black border border-white/[0.08] hover:border-brand-gold transition-all duration-300 font-mono text-xs uppercase tracking-widest font-semibold group/btn"
        >
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-brand-gold group-hover/btn:text-brand-black transition-colors" />
            <span>Acessar Media Kit Completo</span>
          </div>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
}
