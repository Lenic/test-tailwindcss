const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.js"],
    }),
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"), // or require('postcss-nesting')
    require("autoprefixer"),
  ],
};
