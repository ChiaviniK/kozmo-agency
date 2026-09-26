"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Compass,
  Trophy,
  Users,
  Shield,
  Send,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

interface DockItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function FloatingDock() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const items: DockItem[] = [
    {
      id: "hero",
      label: "Início",
      href: "/#hero",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      id: "squad-lineup",
      label: "Lineup",
      href: "/#squad-lineup",
      icon: <Users className="w-4 h-4" />,
    },
    {
      id: "spotlight",
      label: "Atletas 3D",
      href: "/#spotlight",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      id: "roster",
      label: "Roster",
      href: "/roster",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      id: "agency",
      label: "Filosofia",
      href: "/#agency",
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: "contact",
      label: "Contato",
      href: "/#contact",
      icon: <Send className="w-4 h-4" />,
    },
  ];

  // ScrollSpy on Homepage
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/roster")) {
        setActiveSection("roster");
      } else if (pathname.startsWith("/athletes")) {
        setActiveSection("spotlight");
      }
      return;
    }

    const sections = ["hero", "squad-lineup", "spotlight", "agency", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav
      role="navigation"
      aria-label="Menu flutuante de navegação rápida"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300"
    >
      <div className="relative flex items-center bg-[#0C0E14]/90 backdrop-blur-xl border border-white/[0.12] rounded-full p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
        {/* Toggle Minimize Button for Space Optimization */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          aria-label={isMinimized ? "Expandir menu flutuante" : "Minimizar menu flutuante"}
          title={isMinimized ? "Expandir Menu" : "Otimizar Espaço (Minimizar)"}
          className="w-8 h-8 rounded-full flex items-center justify-center text-brand-textSecondary hover:text-brand-gold hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          {isMinimized ? (
            <ChevronUp className="w-4 h-4 text-brand-gold" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Navigation Items */}
        {!isMinimized && (
          <div className="flex items-center gap-1 sm:gap-1.5 pl-1 pr-2">
            {items.map((item) => {
              const isActive =
                (pathname === "/" && activeSection === item.id) ||
                (pathname === "/roster" && item.id === "roster");

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center gap-2 px-3 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-brand-gold text-brand-black font-bold shadow-md"
                      : "text-brand-textSecondary hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span className={isActive ? "text-brand-black" : "text-brand-gold"}>
                    {item.icon}
                  </span>
                  <span className="hidden sm:inline text-[11px] font-semibold">
                    {item.label}
                  </span>

                  {/* Accessible tooltip for mobile */}
                  <span className="sr-only">{item.label}</span>
                </Link>
              );
            })}
          </div>
        )}

        {/* Kozmo Space Orbit Pulse Indicator */}
        <div className="hidden md:flex items-center gap-2 pl-2 pr-3 border-l border-white/[0.08]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-brand-gold font-bold">
            KOZMO // ORBIT
          </span>
        </div>
      </div>
    </nav>
  );
}
