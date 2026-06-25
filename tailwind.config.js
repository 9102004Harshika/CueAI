/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // zinc-950
        "on-background": "#fafafa", // zinc-50
        surface: "#18181b", // zinc-900
        "surface-variant": "#27272a", // zinc-800
        "on-surface": "#fafafa",
        "on-surface-variant": "#a1a1aa", // zinc-400
        primary: "#2563eb", // blue-600
        "on-primary": "#ffffff",
        secondary: "#e4e4e7", // zinc-200
        "on-secondary": "#18181b", // zinc-900
        outline: "#3f3f46", // zinc-700
        "outline-variant": "#27272a", // zinc-800
        error: "#ef4444", // red-500
        "on-error": "#ffffff",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px"
      },
      spacing: {
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "stack-xl": "80px",
        "gutter": "24px",
        "margin-desktop": "64px",
        "container-max": "1280px",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Geist", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'premium': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
