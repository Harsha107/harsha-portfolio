import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // CSS Variable for background
        foreground: "var(--foreground)", // CSS Variable for foreground (text color)
      },
    },
  },
  plugins: [],
} satisfies Config;