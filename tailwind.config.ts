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
        "dark-60": "#FFFFFF",
        "dark-50": "#AFABB6",
        "dark-40": "#252529",
        "dark-30": "#202024",
        "dark-20": "#17171A",
        "dark-10": "#121214",
        "brand-color": "#E07B67"
      },
      fontFamily: {
        inter: "Inter",
      },
    },
  },
  plugins: [],
} satisfies Config;
