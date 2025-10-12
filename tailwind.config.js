/** @type {import('tailwindcss').Config} */
export const theme = {
  extend: {
    typography: {
      DEFAULT: {
        css: {
          // your overrides here
          color: "var(--tw-prose-body)",
          h1: {
            marginBottom: "1.5em",
            marginTop: "2.5em",
            fontSize: "2.25rem",
          },
          // etc
        },
      },
    },
  },
};
export const plugins = [
  require("@tailwindcss/typography"),
  // ...other plugins
];
export const content = [
  // paths to your files (so Tailwind picks up your CSS & JSX)
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./globals.css",
];
