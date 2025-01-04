/** @type {import('tailwindcss').Config} */

module.exports =  {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10px"
      },

      fontFamily: {
        Vazirmatn1: 'Vazirmatn1',
        Vazirmatn2: 'Vazirmatn2',
        Vazirmatn3: 'Vazirmatn3',
        Vazirmatn4: 'Vazirmatn4',
        YekanBakh1: 'YekanBakh1',
        YekanBakh2: 'YekanBakh2',
        YekanBakh3: 'YekanBakh3'

      }
    },
  },
  plugins: [],
}