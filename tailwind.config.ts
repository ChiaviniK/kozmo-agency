import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#08080A",
          surface: "#0F1014",
          surfaceElevated: "#16171D",
          border: "rgba(255, 255, 255, 0.08)",
          borderLight: "rgba(255, 255, 255, 0.16)",
          gold: "#C5A059",
          goldLight: "#E8D49E",
          goldDark: "#8F7034",
          army: "#4A5538",
          armyLight: "#6B7A52",
          silver: "#D1D5DB",
          bronze: "#CD7F32",
          textPrimary: "#FFFFFF",
          textSecondary: "#8E919E",
          textMuted: "#525462",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        editorial: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
