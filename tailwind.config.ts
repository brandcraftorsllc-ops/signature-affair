import type { Config } from "tailwindcss";

// Tokens mirror the reference site's compiled Tailwind theme.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        signature: "#0D0D0F",
        champagne: "#F3E6D3",
        blush: "#F2D3CF",
        copper: { DEFAULT: "#C98A5E", light: "#E8B38A", deep: "#A8643E" },
        ivory: "#FFFAF4",
        ink: "#1C1A1A",
        royal: "#0047AB",
      },
      // 92% is used by the portfolio lightbox backdrop (not in Tailwind's default scale).
      opacity: { 92: "0.92" },
      fontFamily: {
        display: ["var(--font-bodoni)", "Bodoni Moda", "Times New Roman", "serif"],
        script: ["var(--font-pinyon)", "Pinyon Script", "cursive"],
        body: ["var(--font-questrial)", "Questrial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
