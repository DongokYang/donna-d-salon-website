/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
=======
      rotate: {
        2: "2deg",
      },
>>>>>>> 60af804784ca66d8b22ecfbeb9db1c33247bd387

      colors: {
        customGoldStart: "#FFC74D",
        customGoldEnd: "#D98F20",
        customGrayDark: "#1D1D1D",
<<<<<<< HEAD
=======
        customGold: "#DAA520",
>>>>>>> 60af804784ca66d8b22ecfbeb9db1c33247bd387
      },

      backgroundImage: {
        "gradient-custom-gold": "linear-gradient(to right, #FFC74D, #D98F20)",
      },

      fontFamily: {
        Aboreto: ['"Aboreto", serif'],
        Brush: ['"Alex Brush", serif'],
        Lato: ['"Lato", serif'],
      },

      fontSize: {
        h1: ["30px", { lineHeight: "1.5", letterSpacing: "0.03em" }],
        "h1-md": ["40px", { lineHeight: "1.5" }],
        h2: ["23px", { lineHeight: "1.5" }],
        "h2-md": ["25px", { lineHeight: "1.5" }],
<<<<<<< HEAD
        h3: ["38px", { lineHeight: "1.5" }],
        "h3-md": ["39px", { lineHeight: "1.5" }],
        "h3-lg": ["40px", { lineHeight: "1.5" }],
        h4: ["16px", { lineHeight: "1.5" }],
        "h4-md": ["17px", { lineHeight: "1.5" }],
        "h4-lg": ["18px", { lineHeight: "1.5" }],
        h5: ["20px", { lineHeight: "1.8" }],
        "h5-lg": ["20px", { lineHeight: "1.9" }],
        p: ["16px", {  }],
=======
        h3: ["25px", { lineHeight: "1.5" }],
        "h3-md": ["30px", { lineHeight: "1.5" }],
        "h3-lg": ["40px", { lineHeight: "1.5" }],

        h4: ["16px", { lineHeight: "1.5" }],
        "h4-md": ["17px", { lineHeight: "1.5" }],
        "h4-lg": ["18px", { lineHeight: "1.5" }],
        p: ["15px", { lineHeight: "1.8" }],
>>>>>>> 60af804784ca66d8b22ecfbeb9db1c33247bd387
        "p-md": ["16px", { lineHeight: "1.9" }],
        "p-lg": ["17px", { lineHeight: "1.9" }],
      },
    },
  },
  plugins: [
<<<<<<< HEAD
    function ({ addComponents }) {
=======
    function ({ addComponents, addUtilities, theme }) {
>>>>>>> 60af804784ca66d8b22ecfbeb9db1c33247bd387
      addComponents({
        h1: {
          "@apply font-Aboreto text-h1 font-bold": {},
          "@screen md": {
            "@apply text-h1-md": {},
          },
        },
        h2: {
          "@apply font-Aboreto text-h2 text-white": {},
          "@screen md": {
            "@apply text-h2-md": {},
          },
        },
        h3: {
          "@apply font-Brush text-h3 text-white": {},
          "@screen md": {
            "@apply text-h3-md": {},
          },
          "@screen lg": {
            "@apply text-h3-lg": {},
          },
        },
        h4: {
          "@apply font-Aboreto text-h4": {},
          "@screen md": {
            "@apply text-h4-md": {},
          },
          "@screen lg": {
            "@apply text-h4-lg": {},
          },
        },
<<<<<<< HEAD
        h5: {
          "@apply font-Lato text-h5 font-[300] text-white": {},
          "@screen lg": {
            "@apply text-h5-lg": {},
          },
        },
        p: {
          "@apply font-Lato text-p text-white font-[300]": {},
          "@screen md": {
            "@apply text-p-md": {},
          },
=======
        p: {
          "@apply font-Lato text-p text-white font-[300]": {},
          "@screen md": {
            "@apply text-p-md": {},
          },
>>>>>>> 60af804784ca66d8b22ecfbeb9db1c33247bd387
          "@screen lg": {
            "@apply text-p-lg": {},
          },
        },
      });
    },
  ],
};
