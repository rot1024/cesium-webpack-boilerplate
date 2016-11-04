"use strict";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./config")();
const open = require("open");

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(config.devServerPort, "localhost", err => {
  if (err) {
    console.log(err);
  }
  console.info(`=> Listening on http://localhost:${config.devServerPort}`);
  open(`http://localhost:${config.devServerPort}/`);
});
