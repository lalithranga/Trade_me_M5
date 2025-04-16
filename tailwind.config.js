// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ncolour: "#1E40AF", // Replace with your desired hex code
      },
      fontFamily: {
        inter : ["Inter"],
      },
      screens: {
        "3xl": "1800px", // Your custom 3xl breakpoint
      },
    },
  },
  plugins: [],
}
