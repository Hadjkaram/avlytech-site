// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Liaison avec les variables définies dans layout.tsx
        sans: ["var(--font-inter)"],
        title: ["var(--font-outfit)"],
      },
      colors: {
        // Couleurs extraites de votre logo
        avly: {
          dark: "#0a0a0a",    // Fond ultra moderne
          blue: "#1a5b6e",    // Le bleu du logo
          orange: "#e67e22",  // Le orange du logo
          purple: "#4a148c",  // Le violet sombre
        },
      },
      backgroundImage: {
        'gradient-avly': "linear-gradient(to right, #1a5b6e, #e67e22)",
      }
    },
  },
  plugins: [],
};
export default config;