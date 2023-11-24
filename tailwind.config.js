/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/stories/*.{html,js,ts,tsx}',
    './src/stories/**/*.{html,js,ts,tsx}',
    './src/components/**/*.{html,js,ts,tsx}',
    './**/*.{html,js,ts,tsx}',
    
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: 'currentColor',
      inherit: 'inherit',
      primary: "#1873E4",
      white: '#ffff',
      black: '#000',
      "blue-primary": "#1873E4",
      "hover-primary": '#94a3b8',
      "text-headline": "#001D32",
      "typography-purple": "#381E72",
      "typography-dark-purple": "#001D32",
      "typography-secondary": "#49454F",
      "typography-light-pink": "#E6E0E9",
      "bg-opacity": "rgba(0, 0, 0, 0.36)",
      // PRIMARY LIGHT

      "ligth-pink": "#E8DEF8",
      "light-purple": "#6750A4",
      "light-purple-secondary": "#676A90", 
      "light-purple-bg": "rgba(103, 80, 164, 0.20)", 
      "light-gray": "#EEF0F4",
      "light-gray-secondary": "#B9C7D2",

      //PRIMARY DARK

      "dark-purple": "#4A4557",
      "dark-pink": "#D0BCFF",
      "input-dark": "#CAC4D0",
      "dark-bg": "#202124",
    }
  }
  // ...
}

