/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        bellefair: ['Bellefair', 'serif'],
      },
      backgroundImage: {
        'law-pattern': "url('/src/assets/bg-pattern.png')",
        'navbar-pattern': "url('src/assets/banner.png')",
        'why-pattern': "url('src/assets/why.jng')",
        'contact-hero': "url('src/assets/chbanner.png')",
        'contact-hero1': "url('src/assets/contact-hero1.png')",
        'about-banner': "url('src/assets/values.jpg')",
        'criminal-banner': "url('src/assets/criminalbanner.jpg')"
      },
    },
  },
  plugins: [],
}
