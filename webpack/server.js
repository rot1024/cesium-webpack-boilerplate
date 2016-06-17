"use strict";
/* eslint-disable node/no-unpublished-require */
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./config")();
const open = require("open");
/* eslint-enable node/no-unpublished-require */

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(config._devServerPort, "localhost", err => {
  if (err) {
    console.log(err);
  }
  console.info(`=> Listening on http://localhost:${config._devServerPort}`);
  open(`http://localhost:${config._devServerPort}/`);
});
