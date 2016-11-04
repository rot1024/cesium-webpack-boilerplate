"use strict";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./config")();
const open = require("open");

const argv = process.argv.slice(2);

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
}).listen(config.devServerPort, "localhost", err => {
  if (err) {
    console.log(err);
    return;
  }
  console.info(`=> Listening on http://localhost:${config.devServerPort}`);
  if (argv.includes("-o") || argv.includes("--open")) {
    open(`http://localhost:${config.devServerPort}/`);
  }
});
