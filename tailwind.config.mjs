/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        "foreground-muted": "hsl(var(--foreground-muted) / <alpha-value>)",

        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },

        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          foreground: "hsl(var(--surface-foreground) / <alpha-value>)",
          muted: "hsl(var(--surface-muted) / <alpha-value>)",
        },

        "surface-dark": {
          DEFAULT: "hsl(var(--surface-dark) / <alpha-value>)",
          foreground: "hsl(var(--surface-dark-foreground) / <alpha-value>)",
          muted: "hsl(var(--surface-dark-muted) / <alpha-value>)",
        },

        accent: "hsl(var(--accent) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",

        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
        },
        error: {
          DEFAULT: "hsl(var(--error) / <alpha-value>)",
          foreground: "hsl(var(--error-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
