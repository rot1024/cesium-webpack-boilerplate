"use strict";

module.exports = {
  plugins: [
    require("postcss-smart-import")({
      path: ["./src"]
    }),
    require("postcss-cssnext")()
  ]
};
