import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0D1D25",
        orange: "#B6410F",
        white: "#F8EBCF",
        darkgreen: "#0C3B2E",
        lightgreen: "#6D9773",
        yellow: "#FFBA00",
        coklat: "#BB8A52",
        abu: "#64748b",
      },
    },
  },
  plugins: [],
} satisfies Config;
