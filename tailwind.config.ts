import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'entertainment-red': '#FC4747',
        'entertainment-dark-blue': '#10141E',
        'entertainment-greyish-blue': '#5A698F',
        'entertainment-semi-dark-blue': '#161D2F',
        'entertainment-pure-white': '#FFFFFF',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(280px, 1fr))',
        'auto-fit-100': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
