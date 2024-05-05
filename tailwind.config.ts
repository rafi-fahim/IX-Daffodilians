import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        "theme-color-1" : "#040D12",
        "theme-color-2" : "#183D3D",
        "theme-color-3" : "#5C8374",
        "theme-color-4" : "#93B1A6",
      }
    },
    fontFamily: {
      'rubik-fancy': '"Rubik Vinyl", "system-ui"',
      'fancy': '"Tourney", sans-serif',
      'jersey': '"Jersey 25", sans-serif'
    },
  },
  plugins: [],
};
export default config;
