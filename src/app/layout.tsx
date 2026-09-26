import type { Metadata } from "next";
import { Anton, Syne, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    "Agência de representação de atletas de alto rendimento no Jiu-Jitsu e esportes de combate. Apresentando o campeão mundial Eduardo Carvalho.",
  keywords: [
    "Kozmo Agency",
    "Eduardo Carvalho",
    "BJJ",
    "Jiu-Jitsu",
    "Artes Marciais",
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
      <body className="bg-brand-black text-white font-sans antialiased selection:bg-brand-gold selection:text-brand-black">
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
