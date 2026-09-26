"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Shield, Trophy, ArrowUpRight, Sparkles } from "lucide-react";
import { Athlete } from "@/types/athlete";

interface CampSponsorshipModalProps {
  athlete: Athlete | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CampSponsorshipModal({
  athlete,
  isOpen,
  onClose,
}: CampSponsorshipModalProps) {
  const [selectedTier, setSelectedTier] = useState<string>("corner");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("pix");

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !athlete || !athlete.activeCamp) return null;

  const camp = athlete.activeCamp;
  const progressPercent = Math.min(
    100,
    Math.round((camp.fundingRaised / camp.fundingGoal) * 100)
  );

  const tiers = [
    {
      id: "supporter",
      name: "Cota Supporter",
      value: "R$ 250",
      description: "Apoio individual direto para custos de inscrição e suplementação.",
      benefits: [
        "Nome no Mural Oficial de Apoiadores da Kozmo",
        "Agradecimento nominal nos stories do atleta",
        "Acesso ao boletim VIP de bastidores e pesagem",
      ],
    },
    {
      id: "corner",
      name: "Cota Corner (Patrocinador Regional)",
      value: "R$ 1.500",
      description: "Visibilidade de marca em todo o período de preparação do camp.",
      benefits: [
        "Logo no vestuário de treino e aquecimento oficial",
        "Fotos profissionais em alta resolução com a marca",
        "Menção institucional nos canais oficiais da agência",
      ],
    },
    {
      id: "master",
      name: "Cota Master (Patch de Kimono)",
      value: "R$ 5.000",
      description: "Exposição máxima nos tatames durante as disputas de medalha.",
      benefits: [
        "Patch principal bordado no kimono oficial de competição",
        "Direito ao uso de imagem comercial pós-torneio",
        "Menção e tag em todas as entrevistas oficiais",
      ],
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0E1017] border border-white/[0.12] rounded-3xl p-6 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-6 right-6 p-2 rounded-full text-brand-textSecondary hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mx-auto border border-brand-gold/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-3xl uppercase tracking-tight text-white">
                PROPOSTA DE COTA REGISTRADA!
              </h3>
              <p className="font-sans text-sm text-[#A6AAB8] max-w-md mx-auto leading-relaxed">
                Nossa equipe de gestão esportiva entrará em contato via WhatsApp e e-mail com o recibo oficial de patrocínio e orientações de repasse.
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-wider font-bold rounded-lg hover:bg-brand-goldLight transition-colors"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          /* Main Sponsorship Form */
          <div className="space-y-8">
            {/* Header info */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-mono text-[11px] font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                Fundo Oficial de Camp Desportivo
              </div>
              <h2
                id="modal-title"
                className="font-display text-2xl sm:text-4xl uppercase tracking-tight text-white"
              >
                PATROCINAR CAMP DE {athlete.name.toUpperCase()}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8E92A4]">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-brand-gold" />
                  {camp.targetTournament}
                </span>
                <span>•</span>
                <span>{camp.location}</span>
                <span>•</span>
                <span className="text-brand-gold">{camp.tournamentDate}</span>
              </div>
            </div>

            {/* Camp Progress Bar */}
            <div className="p-4 rounded-xl bg-[#141620] border border-white/[0.06] space-y-2">
              <div className="flex justify-between items-baseline text-xs font-mono">
                <span className="text-[#A6AAB8]">Meta de Captação do Camp</span>
                <span className="text-white font-bold">
                  R$ {camp.fundingRaised.toLocaleString("pt-BR")} / R${" "}
                  {camp.fundingGoal.toLocaleString("pt-BR")}{" "}
                  <span className="text-brand-gold">({progressPercent}%)</span>
                </span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-white/[0.08] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-gold to-brand-goldLight rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-[#8E92A4] font-sans">
                Os recursos são destinados 100% à preparação física, hospedagem, passagens aéreas e inscrição internacional do atleta.
              </p>
            </div>

            {/* Select Tier */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-gold font-semibold block">
                Selecione a Cota de Patrocínio
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      selectedTier === tier.id
                        ? "bg-brand-gold/10 border-brand-gold shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                        : "bg-[#141620] border-white/[0.08] hover:border-white/[0.2]"
                    }`}
                  >
                    <div>
                      <div className="font-editorial text-sm font-bold text-white">
                        {tier.name}
                      </div>
                      <div className="font-display text-2xl text-brand-gold mt-1">
                        {tier.value}
                      </div>
                      <p className="font-sans text-[11px] text-[#8E92A4] mt-2 leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Details */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#A6AAB8] block">
                    Nome / Razão Social
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome ou da empresa"
                    className="w-full bg-[#181A24] border border-white/[0.1] px-4 py-2.5 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase tracking-wider text-[#A6AAB8] block">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#181A24] border border-white/[0.1] px-4 py-2.5 text-xs text-white rounded-lg focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              {/* Payment Modality */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-[#A6AAB8] block">
                  Modalidade de Repasse
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`py-2 px-3 rounded-lg font-mono text-xs uppercase border text-center transition-colors ${
                      paymentMethod === "pix"
                        ? "bg-brand-gold text-brand-black font-bold border-brand-gold"
                        : "bg-[#141620] text-[#A6AAB8] border-white/[0.08]"
                    }`}
                  >
                    PIX Direto
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("ted")}
                    className={`py-2 px-3 rounded-lg font-mono text-xs uppercase border text-center transition-colors ${
                      paymentMethod === "ted"
                        ? "bg-brand-gold text-brand-black font-bold border-brand-gold"
                        : "bg-[#141620] text-[#A6AAB8] border-white/[0.08]"
                    }`}
                  >
                    TED / Conta
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("nf")}
                    className={`py-2 px-3 rounded-lg font-mono text-xs uppercase border text-center transition-colors ${
                      paymentMethod === "nf"
                        ? "bg-brand-gold text-brand-black font-bold border-brand-gold"
                        : "bg-[#141620] text-[#A6AAB8] border-white/[0.08]"
                    }`}
                  >
                    NF / Recibo PJ
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xl"
              >
                <span>Confirmar Intenção de Patrocínio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
