const path = require("path");
const sass = require("sass");
const CleanCSS = require("clean-css");

exports.data = {
  permalink: "/assets/styles/main.css",
  eleventyExcludeFromCollections: true,
};

exports.render = function () {
  const file = path.join(__dirname, "main.scss");
  const { css } = sass.renderSync({ file });
  const { styles } = new CleanCSS().minify(css.toString());
  return styles;
};
