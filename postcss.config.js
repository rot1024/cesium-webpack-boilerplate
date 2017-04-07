"use strict";

const cssImport = require("postcss-smart-import");
const cssnext = require("postcss-cssnext");

module.exports = {
  plugins: [
    cssImport({
      path: ["node_modules", "./src"]
    }),
    cssnext({ browsers: ["> 5%"] })
  ]
};
