const postcssGlobalData = require('@csstools/postcss-global-data');
const cssnano = require('cssnano-preset-default');

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/css/base/_mediaqueries.css'],
    }),
    require('autoprefixer'),
    require('postcss-extend'),
    require('postcss-nested'),
    require('postcss-custom-media'),
    cssnano,
  ],
};