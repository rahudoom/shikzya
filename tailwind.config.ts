import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ShikZya product brand — blue primary
        brand: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        // ShikZya orange accent (the "Zya")
        accent: {
          DEFAULT: "#F97316",
          light: "#FB923C",
          dark: "#EA580C",
        },
        ink: {
          DEFAULT: "#0F172A",
          soft: "#334155",
          mute: "#64748B",
        },
        surface: "#F8FAFC",
        line: "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(37, 99, 235, 0.18)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -10px rgba(15,23,42,0.10)",
        glow: "0 0 30px rgba(37,99,235,0.35)",
      },
      keyframes: {
        "blob-a": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-50px) scale(1.12)" },
          "66%": { transform: "translate(-30px,30px) scale(0.92)" },
        },
        "blob-b": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "40%": { transform: "translate(-50px,40px) scale(1.1)" },
          "75%": { transform: "translate(35px,-30px) scale(0.94)" },
        },
        "float-y": {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "blob-a": "blob-a 16s ease-in-out infinite",
        "blob-b": "blob-b 20s ease-in-out infinite",
        "float-y": "float-y 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
