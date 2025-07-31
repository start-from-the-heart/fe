/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        contrast: "var(--bg-color)",
        primary: "var(--primary)",
        "primary-25": "var(--primary-25)",
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
      },
      fontSize: {
        xs: ['12px', {lineHeight: '16px'}],
        sm: ['14px', {lineHeight: '20px'}],
        base: ['16px', {lineHeight: '24px'}],
        lg: ['18px', {lineHeight: '28px'}],
        xl: ['20px', {lineHeight: '30px'}]
      }
    },
  },
  plugins: [],
};
