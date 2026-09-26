import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, Shield, Trophy, ChevronRight, CheckCircle2 } from "lucide-react";
import { Athlete3DCard } from "@/components/athlete-3d-card";
import { ATHLETES, getAthleteBySlug } from "@/lib/data/athletes";

export default function HomePage() {
  const eduardo = getAthleteBySlug("eduardo-carvalho") || ATHLETES[0];

  return (
    <div className="flex flex-col min-h-screen bg-brand-black text-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 px-6 border-b border-white/[0.08] overflow-hidden bg-grain">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
                Elite Combat Management
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] text-white">
                WE REPRESENT <br />
                <span className="text-brand-gold">THE RELENTLESS.</span>
              </h1>
              <p className="font-editorial text-lg sm:text-xl text-brand-textSecondary max-w-xl font-light leading-relaxed">
                Gestão esportiva executiva para atletas de alta performance nas artes marciais. Transformamos medalhas mundiais em legados globais e patrocínios sustentáveis.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/[0.08] max-w-lg">
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-white block">
                  104+
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-brand-textMuted">
                  Medalhas Oficiais
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-brand-gold block">
                  3x
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-brand-textMuted">
                  Cinturões GPs
                </span>
              </div>
              <div>
                <span className="font-editorial text-3xl sm:text-4xl font-extrabold text-white block">
                  100%
                </span>
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-brand-textMuted">
                  Rigor Militar & Foco
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/athletes/eduardo-carvalho"
                className="px-7 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 transition-all duration-300"
              >
                <span>Explorar Media Kit de Eduardo</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/roster"
                className="px-7 py-3.5 bg-transparent hover:bg-white/[0.06] text-white border border-white/[0.16] font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors duration-300"
              >
                <span>Ver Todos os Atletas</span>
                <ChevronRight className="w-4 h-4 text-brand-textMuted" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive 3D Card for Eduardo Carvalho */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="text-center mb-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-brand-textMuted">
                Passe 3D Interativo // Mova o mouse sobre o card
              </span>
            </div>
            <Athlete3DCard athlete={eduardo} />
          </div>
        </div>
      </section>

      {/* 2. INFINITE EDITORIAL MARQUEE */}
      <div className="border-b border-white/[0.08] bg-[#0A0B0E] py-4 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-none overflow-x-auto no-scrollbar justify-between px-6 font-mono text-xs uppercase tracking-[0.25em] text-brand-textSecondary">
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
            104 OFFICIAL PODIUMS
          </span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            GLOBAL SPONSORSHIPS
          </span>
        </div>
      </div>

      {/* 3. ATHLETE SPOTLIGHT: EDUARDO CARVALHO */}
      <section className="py-28 px-6 border-b border-white/[0.08] bg-[#0A0B0F] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
                Atleta Destaque // Roster Oficial
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                EDUARDO CARVALHO
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-sans text-sm text-brand-textSecondary leading-relaxed">
                Faixa Preta de Jiu-Jitsu e militar do Exército Brasileiro. Um dos competidores mais consistentes do circuito internacional, acumulando 104 medalhas e 3 cinturões em disputas profissionais.
              </p>
            </div>
          </div>

          {/* Detailed Spotlight Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Portrait High Contrast */}
            <div className="lg:col-span-5 relative h-[520px] rounded-2xl overflow-hidden border border-white/[0.1] bg-[#121319]">
              <Image
                src="/assets/eduardo_carvalho.png"
                alt="Eduardo Carvalho Kimono"
                fill
                className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-brand-gold uppercase tracking-wider font-semibold">
                    Instagram Oficial
                  </div>
                  <a
                    href="https://www.instagram.com/carvalhobjj93/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-editorial text-lg font-bold text-white hover:text-brand-gold transition-colors flex items-center gap-1.5"
                  >
                    <span>@carvalhobjj93</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="px-3 py-1.5 rounded bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-mono text-xs uppercase tracking-wider font-bold">
                  Faixa Preta
                </div>
              </div>
            </div>

            {/* Palmarès & Statistics */}
            <div className="lg:col-span-7 space-y-8">
              {/* Title breakdown cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    Mundial IBJJF
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    2x 🥇
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Campeão Mundial
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    Pan-Americano
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    2x 🥇
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Campeão Pan
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    Brasileiro CBJJ
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    3x 🥇
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Campeão Brasileiro
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    Sul-Americano
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    3x 🥇
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Campeão Sul-Am.
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    Estadual Paulista
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    3x 🥇
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Campeão Paulista
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface border border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold block font-semibold">
                    GPs & Cinturões
                  </span>
                  <span className="font-display text-3xl text-white mt-1 block">
                    3 🏆
                  </span>
                  <span className="font-mono text-[10px] text-brand-textMuted uppercase mt-1 block">
                    Cinturões Oficiais
                  </span>
                </div>
              </div>

              {/* Military Background Card */}
              <div className="p-6 rounded-xl bg-[#141712] border border-[#4A5538]/50 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#4A5538] flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#E8D49E]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-editorial text-base font-bold text-white flex items-center gap-2">
                    Exército Brasileiro 🇧🇷🪖
                    <span className="text-xs font-mono text-[#E8D49E] font-normal uppercase tracking-wider">
                      (Seleção Militar de Alto Rendimento)
                    </span>
                  </h4>
                  <p className="font-sans text-xs text-brand-textSecondary leading-relaxed">
                    Representação institucional das Forças Armadas nos maiores palcos esportivos do planeta. Disciplina inabalável, conduta ética irrepreensível e alta performance em nível de estado.
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/athletes/eduardo-carvalho"
                  className="px-6 py-3.5 bg-brand-gold text-brand-black font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-brand-goldLight transition-colors"
                >
                  <span>Abrir Ficha Técnica & Media Kit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.instagram.com/carvalhobjj93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-transparent text-white border border-white/[0.14] font-mono text-xs uppercase tracking-widest font-semibold hover:border-brand-gold transition-colors flex items-center gap-2"
                >
                  <span>Instagram Oficial (@carvalhobjj93)</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AGENCY SERVICES & PHILOSOPHY */}
      <section id="agency" className="py-28 px-6 border-b border-white/[0.08] bg-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
              Pilares de Gestão // Kozmo Ecosystem
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white max-w-2xl">
              NÃO AGENCIAMOS LUTADORES. CONSTRUÍMOS MARCAS GLOBAIS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#0E0F14] border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Contratos & Superlutas
              </h3>
              <p className="font-sans text-xs text-brand-textSecondary leading-relaxed">
                Negociação direta com IBJJF, ADCC, UFC Fight Pass, ONE Championship e eventos de grappling com purse garantido e royalties.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E0F14] border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Patrocínios de Elite
              </h3>
              <p className="font-sans text-xs text-brand-textSecondary leading-relaxed">
                Conexão com marcas de suplementação de ponta, marcas de kimono de luxo, vestuário técnico e empresas globais de tecnologia.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E0F14] border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Media Kit & Branding
              </h3>
              <p className="font-sans text-xs text-brand-textSecondary leading-relaxed">
                Produção audiovisual editorial, relatórios de engajamento social auditados e passes digitais para apresentação a patrocinadores.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0E0F14] border border-white/[0.08] hover:border-brand-gold/40 transition-all duration-300 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-editorial text-lg font-bold text-white">
                Blindagem Jurídica & LGPD
              </h3>
              <p className="font-sans text-xs text-brand-textSecondary leading-relaxed">
                Assessoria jurídica internacional para direitos de imagem, contratos de exclusividade e adequação total à legislação desportiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5. ROSTER PREVIEW SHOWCASE */}
      <section className="py-24 px-6 border-b border-white/[0.08] bg-[#0A0B0E]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-2">
                Roster Oficial Kozmo // Todas as Graduações
              </span>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white">
                EQUIPE DE ALTO RENDIMENTO
              </h2>
            </div>
            <Link
              href="/roster"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-gold hover:text-white transition-colors"
            >
              <span>Ver Todos os Atletas</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATHLETES.map((athlete) => (
              <Link
                key={athlete.id}
                href={`/athletes/${athlete.slug}`}
                className="group rounded-2xl bg-brand-surface border border-white/[0.08] overflow-hidden hover:border-brand-gold/50 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-64 w-full bg-[#14151C] overflow-hidden">
                  <Image
                    src={athlete.imageBw}
                    alt={athlete.name}
                    fill
                    className="object-cover object-top filter grayscale group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />

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
                    <p className="font-mono text-[11px] text-brand-textMuted uppercase mt-1">
                      {athlete.category}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-brand-textSecondary group-hover:text-white">
                    <span>Acessar Ficha</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT / PARTNERSHIP FORM */}
      <section id="contact" className="py-24 px-6 bg-[#0B0C10] relative">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/[0.1] bg-[#101117] p-8 sm:p-14 relative overflow-hidden">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-semibold">
              Contato Executivo & Parcerias
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CONECTE SUA MARCA AOS CAMPEÕES.
            </h2>
            <p className="font-sans text-sm text-brand-textSecondary max-w-xl">
              Seja para patrocinar nossos atletas, contratar seminários técnicos ou solicitar representação de carreira na Kozmo Agency.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-brand-textSecondary block">
                  Seu Nome ou da Empresa
                </label>
                <input
                  type="text"
                  placeholder="Ex: Marca / Patrocinador"
                  className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-brand-textSecondary block">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  placeholder="contato@empresa.com"
                  className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-brand-textSecondary block">
                  Atleta de Interesse
                </label>
                <select className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans">
                  <option value="eduardo-carvalho">Eduardo Carvalho (Faixa Preta / Exército 🇧🇷)</option>
                  <option value="monique-costa">Monique Costa (Faixa Roxa / Feminino)</option>
                  <option value="yago-carioca">Yago Carioca (Faixa Azul / Alto Rendimento)</option>
                  <option value="gustavo-veiga">Gustavo Veiga &ldquo;Boiadeiro&rdquo; (Faixa Branca)</option>
                  <option value="all">Múltiplos Atletas / Gestão Global</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-brand-textSecondary block">
                  Tipo de Proposta
                </label>
                <select className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans">
                  <option value="sponsorship">Patrocínio Master / Kimono / Vestuário</option>
                  <option value="seminar">Seminário Técnico / Masterclass</option>
                  <option value="superfight">Convite para Evento / Superluta</option>
                  <option value="representation">Solicitação de Representação</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-xs uppercase tracking-widest text-brand-textSecondary block">
                Detalhes da Proposta
              </label>
              <textarea
                rows={4}
                placeholder="Descreva o escopo da parceria, prazos e proposta..."
                className="w-full bg-[#181922] border border-white/[0.1] px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors rounded-lg font-sans resize-none"
              />
            </div>

            <button
              type="button"
              className="w-full py-4 bg-brand-gold hover:bg-brand-goldLight text-brand-black font-mono text-xs uppercase tracking-widest font-bold transition-colors rounded-lg flex items-center justify-center gap-2"
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
