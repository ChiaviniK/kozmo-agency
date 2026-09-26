"use client";

import React, { useMemo } from "react";

export function CosmicBackground() {
  // Generate static celestial stars to avoid hydration mismatch
  const stars = useMemo(() => {
    // 70 subtle celestial stars with deterministic pseudo-random distribution
    const items = [];
    for (let i = 0; i < 70; i++) {
      const top = ((i * 37 + 13) % 100).toFixed(1);
      const left = ((i * 59 + 29) % 100).toFixed(1);
      const size = (i % 3 === 0 ? 2 : 1.2).toFixed(1);
      const opacity = ((i % 5) * 0.08 + 0.15).toFixed(2);
      const pulseDelay = ((i % 7) * 0.8).toFixed(1);
      const pulseDuration = (3 + (i % 4)).toFixed(1);

      items.push({
        id: i,
        top: `${top}%`,
        left: `${left}%`,
        size: `${size}px`,
        opacity,
        pulseDelay: `${pulseDelay}s`,
        pulseDuration: `${pulseDuration}s`,
      });
    }
    return items;
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Deep Space Cosmic Nebulae Gradients */}
      <div className="absolute -top-[10%] left-1/4 w-[750px] h-[600px] bg-[#1a1429]/25 rounded-full blur-[160px]" />
      <div className="absolute top-[40%] -right-[10%] w-[650px] h-[550px] bg-[#0c1a2e]/30 rounded-full blur-[170px]" />
      <div className="absolute top-[75%] -left-[10%] w-[700px] h-[600px] bg-[#1a160d]/25 rounded-full blur-[160px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-gold/[0.03] rounded-full blur-[140px]" />

      {/* 2. Subtle Orbital Telemetry Rings (Aeroespacial & Cartas Celestes) */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] opacity-[0.035]"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="500"
          cy="500"
          r="480"
          stroke="#FFFFFF"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="500"
          cy="500"
          r="360"
          stroke="#C5A059"
          strokeWidth="0.8"
        />
        <circle
          cx="500"
          cy="500"
          r="220"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />
        <line
          x1="500"
          y1="20"
          x2="500"
          y2="980"
          stroke="#FFFFFF"
          strokeWidth="0.4"
          strokeDasharray="4 12"
        />
        <line
          x1="20"
          y1="500"
          x2="980"
          y2="500"
          stroke="#FFFFFF"
          strokeWidth="0.4"
          strokeDasharray="4 12"
        />
      </svg>

      {/* 3. Deep Space Subtle Starfield */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white transition-opacity"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `cosmicTwinkle ${star.pulseDuration} ease-in-out ${star.pulseDelay} infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
