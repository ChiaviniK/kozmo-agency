import { Athlete } from "@/types/athlete";

export const ATHLETES: Athlete[] = [
  {
    id: "eduardo-carvalho",
    slug: "eduardo-carvalho",
    name: "Eduardo Carvalho",
    nickname: "O Soldado",
    belt: "Faixa Preta (Black Belt)",
    category: "Peso Médio / Meio-Pesado",
    discipline: "Both",
    militaryAffiliation: "Exército Brasileiro 🇧🇷🪖",
    instagram: "https://www.instagram.com/carvalhobjj93/",
    bio: "Atleta de elite da Seleção Militar e do Jiu-Jitsu mundial. Com mais de uma década de dedicação nos tatames internacionais e representação exemplar das Forças Armadas Brasileiras, Eduardo Carvalho combina rigor tático, precisão técnica e um histórico incomparável de 104 medalhas oficiais.",
    highlightTitles: [
      "2x Campeão Mundial IBJJF",
      "2x Campeão Pan-Americano",
      "3x Campeão Brasileiro CBJJ",
      "3x Campeão Sul-Americano",
      "3x Campeão Paulista FPJJ",
      "3 Cinturões em GPs Profissionais",
      "Atleta das Forças Armadas do Brasil",
    ],
    medals: {
      gold: 51,
      silver: 31,
      bronze: 22,
      total: 104,
    },
    palmares: {
      worldTitles: 2,
      panAmericanTitles: 2,
      brazilianTitles: 3,
      southAmericanTitles: 3,
      stateTitles: 3,
      beltsCount: 3,
    },
    imageKimono: "/assets/eduardo_carvalho.png",
    imageBw: "/assets/eduardo_carvalho_bw.png",
    featured: true,
  },
  {
    id: "matheus-gabriel",
    slug: "matheus-gabriel",
    name: "Matheus Gabriel",
    nickname: "Titan",
    belt: "Faixa Preta (Black Belt)",
    category: "Peso Pena",
    discipline: "Both",
    instagram: "https://www.instagram.com/matheusgabrielbjj/",
    bio: "Um dos finalizadores mais temidos dos pesos leves contemporâneos. Campeão Mundial nas faixas de base e consolidado no circuito profissional norte-americano e asiático de Grappling No-Gi.",
    highlightTitles: [
      "2x Campeão Mundial IBJJF Faixa Preta",
      "Campeão Pan-Americano No-Gi",
      "Finalista ADCC Trials",
    ],
    medals: {
      gold: 38,
      silver: 14,
      bronze: 9,
      total: 61,
    },
    palmares: {
      worldTitles: 2,
      panAmericanTitles: 1,
      brazilianTitles: 2,
      southAmericanTitles: 1,
      stateTitles: 4,
      beltsCount: 2,
    },
    imageKimono: "/assets/eduardo_carvalho.png",
    imageBw: "/assets/eduardo_carvalho_bw.png",
    featured: false,
  },
  {
    id: "helena-vance",
    slug: "helena-vance",
    name: "Helena Vance",
    nickname: "Valkyrie",
    belt: "Faixa Marrom (Brown Belt)",
    category: "Peso Galo Feminino",
    discipline: "BJJ No-Gi",
    instagram: "https://www.instagram.com/helenavancebjj/",
    bio: "Nova geração do grappling feminino internacional. Conhecida por guardas agressivas e taxa de finalização de 84% no primeiro round em superfights e torneios sem quimono.",
    highlightTitles: [
      "Campeã Pan-Americana No-Gi",
      "Medalhista Mundial IBJJF",
      "Campeã North American Grappling Tour",
    ],
    medals: {
      gold: 24,
      silver: 8,
      bronze: 5,
      total: 37,
    },
    palmares: {
      worldTitles: 0,
      panAmericanTitles: 1,
      brazilianTitles: 1,
      southAmericanTitles: 1,
      stateTitles: 5,
      beltsCount: 1,
    },
    imageKimono: "/assets/eduardo_carvalho.png",
    imageBw: "/assets/eduardo_carvalho_bw.png",
    featured: false,
  },
];

export function getAthleteBySlug(slug: string): Athlete | undefined {
  return ATHLETES.find((a) => a.slug === slug);
}

export function getFeaturedAthletes(): Athlete[] {
  return ATHLETES.filter((a) => a.featured);
}
