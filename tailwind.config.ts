import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "entertainment-red": "#FC4747",
        "entertainment-dark-blue": "#10141E",
        "entertainment-greyish-blue": "#5A698F",
        "entertainment-semi-dark-blue": "#161D2F",
        "entertainment-pure-white": "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config
