import type { Metadata } from "next";
import { Anton, Syne, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingDock } from "@/components/floating-dock";
import { CosmicBackground } from "@/components/cosmic-background";
import { ScrollToTop } from "@/components/scroll-to-top";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOZMO AGENCY | Gestão de Atletas de Elite & Artes Marciais",
  description:
    "Agência de representação de atletas de alto rendimento no Jiu-Jitsu e esportes de combate. Apresentando o campeão mundial Eduardo Carvalho e novos talentos.",
  keywords: [
    "Kozmo Agency",
    "Eduardo Carvalho",
    "Monique Costa",
    "Yago Carioca",
    "Gustavo Veiga Boiadeiro",
    "BJJ",
    "Jiu-Jitsu",
    "Exército Brasileiro",
    "Patrocínio Esportivo",
    "Combat Sports Management",
  ],
  authors: [{ name: "Kozmo Agency" }],
  openGraph: {
    title: "KOZMO AGENCY | Elite Combat Management",
    description: "Representação de alta performance e patrocínios internacionais para campeões mundiais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${syne.variable} ${spaceGrotesk.variable} ${manrope.variable} dark`}
    >
      <body className="bg-brand-black text-white font-sans antialiased selection:bg-brand-gold selection:text-brand-black relative">
        {/* WCAG Accessible Skip Link for Keyboard Users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-brand-gold focus:text-brand-black font-mono text-xs uppercase tracking-wider font-bold rounded-lg shadow-2xl"
        >
          Pular para o conteúdo principal
        </a>

        {/* Subtle Cosmic Background (Starfield, Nebulae, Orbitals) */}
        <CosmicBackground />

        {/* Top Header */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content" tabIndex={-1} className="relative z-10 min-h-screen pt-20 focus:outline-none">
          {children}
        </main>

        {/* Floating Navigation Dock (Floating Menu) */}
        <FloatingDock />

        {/* Floating Scroll-to-Top Button */}
        <ScrollToTop />

        {/* Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}
