module.exports = {
  darkMode: "class", // Enables manual dark mode switching
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-in-left": "slideInLeft 1s ease-in-out",
        "slide-in-right": "slideInRight 1s ease-in-out",
        "glow": "glowEffect 1.5s infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glowEffect: {
          "0%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" },
          "100%": { boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
