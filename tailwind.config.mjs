/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-primary-light": "rgba(var(--theme-primary-light), 1)",
        "theme-primary-dark": "rgba(var(--theme-primary-dark), 1)",
        "theme-secondary-light": "rgba(var(--theme-secondary-light), 1)",
        "theme-secondary-dark": "rgba(var(--theme-secondary-dark), 1)",
        "template-bg-light": "rgba(var(--template-bg-light), 1)",
        "template-bg-dark": "rgba(var(--template-bg-dark), 1)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".ext-site-mask": {
          maskImage: "url(/open_in_new.svg)",
          maskRepeat: "no-repeat",
          maskSize: "contain",
        },
        ".gradient-overlap": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.lg"),
          padding: theme("spacing.6"),
          boxShadow: theme("boxShadow.xl"),
        },
        ".text-shadow-template-dark": {
          textShadow: "3px 2px 3px rgba(var(--template-bg-dark), 1)",
        },
      });
    }),
  ],
};
