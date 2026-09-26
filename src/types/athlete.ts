export interface MedalTally {
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface Palmares {
  worldTitles: number;
  panAmericanTitles: number;
  brazilianTitles: number;
  southAmericanTitles: number;
  stateTitles: number;
  beltsCount: number;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  description: string;
  benefits: string[];
}

export interface ActiveCamp {
  targetTournament: string;
  tournamentDate: string;
  location: string;
  fundingGoal: number;
  fundingRaised: number;
  status: "Captação Aberta" | "Confirmado";
}

export interface Athlete {
  id: string;
  slug: string;
  name: string;
  nickname?: string;
  belt: string; // e.g., "Faixa Preta (Black Belt)"
  category: string; // e.g., "Peso Médio"
  discipline: "BJJ Gi" | "BJJ No-Gi" | "Both" | "MMA";
  militaryAffiliation?: string;
  instagram: string;
  bio: string;
  highlightTitles: string[];
  medals: MedalTally;
  palmares: Palmares;
  imageKimono: string;
  imageBw: string;
  actionImage?: string;
  activeCamp?: ActiveCamp;
  featured?: boolean;
}
