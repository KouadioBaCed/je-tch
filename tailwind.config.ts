import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Charte graphique officielle JE-TCH 2026
        // Vert de marque volontairement désaturé (vert forêt) plutôt qu'un
        // vert "pur" : plus élégant et plus reposant sur les grands aplats.
        green: {
          DEFAULT: "#1F6F4A",
          dark: "#124A30",
          light: "#4FAE5A",
          50: "#EAF5EE",
          100: "#D2EBDB",
        },
        orange: {
          DEFAULT: "#F58220",
          hover: "#D96A0C",
        },
        gold: {
          DEFAULT: "#F4C430",
        },
        ink: "#1E1E1E",
        muted: {
          DEFAULT: "#5B5B5B",
          foreground: "#5B5B5B",
        },
        surface: "#F6F8F7",
        line: "#DDE5DF",
        // shadcn-style semantic tokens (mapped to brand)
        background: "#FFFFFF",
        foreground: "#1E1E1E",
        primary: {
          DEFAULT: "#1F6F4A",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F58220",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F4C430",
          foreground: "#1E1E1E",
        },
        border: "#DDE5DF",
        input: "#DDE5DF",
        ring: "#1F6F4A",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "8px",
        xl: "16px",
        "2xl": "20px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        "soft-lg": "0 12px 40px rgba(0,0,0,0.10)",
        "soft-green": "0 12px 40px rgba(31,111,74,0.18)",
        glow: "0 0 0 1px rgba(31,111,74,0.08), 0 10px 30px rgba(31,111,74,0.12)",
      },
      backgroundImage: {
        "grid-soft":
          "linear-gradient(to right, rgba(31,111,74,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,111,74,0.05) 1px, transparent 1px)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          "0%": { height: "0", opacity: "0" },
          "100%": { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
