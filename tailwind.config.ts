import { type Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.tsx"
 


],
  theme: {
    extend: {},
  },
  plugins: [
  require("daisyui"),
  require('@tailwindcss/line-clamp')
],
} satisfies Config;
