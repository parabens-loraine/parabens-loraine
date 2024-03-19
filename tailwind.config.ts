import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          backgroundColor: '#F2D5E5',
          button: '#752DA6',
          textPrimary: '#752DA6',
          textSecondary: '#D92B9C',
          formFieldBackground: '#F2B3E8',
          formFieldBorder: '#D99CC4',
        },
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      textColor: ['visited'],
    },
  },
  plugins: [],
}
export default config
