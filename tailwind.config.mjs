/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#151515",
          primary: "#1FA8F2",
          primaryLight: "#4FC3F7",
          primaryDark: "#157ABF",
          surface: "#1E1E1E",
          muted: "#2A2A2A",
          text: "#EDEDED",
          secondary: "#F2994A",
          success: "#10B981",
          warning: "#FACC15",
          danger: "#EF4444",
        },
      },
    },
  },
  plugins: [],
};
