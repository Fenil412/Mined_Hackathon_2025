// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          gradient: "gradient 10s ease infinite",
        },
        keyframes: {
          gradient: {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
          },
        },
        backgroundSize: {
          "200%": "200% 200%",
        },
      },
    },
  };