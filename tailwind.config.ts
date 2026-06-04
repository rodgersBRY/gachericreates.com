import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F5",
        surface: "#F2EFE9",
        "text-primary": "#1A1814",
        "text-secondary": "#6B6560",
        accent: "#B5813A",
        "accent-light": "#E8D5B0",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "heading-1": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "heading-2": ["2rem", { lineHeight: "1.2" }],
        "heading-3": ["1.375rem", { lineHeight: "1.3" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.04em" }],
      },
    },
  },
  plugins: [],
};
export default config;
