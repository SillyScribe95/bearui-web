//
//
//

const nxcdd = [
  //
  //
  // "./components/**/*.js";
  // "./src/**/*.js";
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
];

const nijvsd = {
  plugins: [
    //   //   // require("@tailwindcss/typography"),
    //   //   // require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    //   //   // require("@tailwindcss/aspect-ratio"),
  ],
};

module.exports = {
  purge: [nxcdd],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  ...nijvsd,
};
