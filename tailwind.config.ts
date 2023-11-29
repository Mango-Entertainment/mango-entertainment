import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "entertainment-red": "#FC4747",
        "entertainment-black": "#10141E",
        "entertainment-battleship-grey": "#5A698F",
        "entertainment-dark-blue": "#161D2F",
        "entertainment-white": "#FFFFFF"
      },
    },
  },
  plugins: [],
};
export default config
