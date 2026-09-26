"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao início da página"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#0C0E14]/90 backdrop-blur-xl border border-white/[0.16] text-white hover:text-brand-black hover:bg-brand-gold hover:border-brand-gold shadow-[0_12px_32px_rgba(0,0,0,0.7)] transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:outline-none"
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
      <span className="sr-only">Voltar ao Topo</span>
    </button>
  );
}
