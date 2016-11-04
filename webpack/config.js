"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const postcssImport = require("postcss-import");
const postcssUrl = require("postcss-url");
const postcssCssnext = require("postcss-cssnext");
const postcssBrowserReporter = require("postcss-browser-reporter");
const postcssReporter = require("postcss-reporter");
const cssnano = require("cssnano");

const devServerPort = 3000;

module.exports = dist => ({
  devServerPort,
  debug: !dist,
  devtool: dist ? void 0 : "source-map",
  entry: [
    ...(dist ? [] : [
      `webpack-dev-server/client?http://0.0.0.0:${devServerPort}`,
      "webpack/hot/dev-server"
    ]),
    "./src/index.js",
    "./src/styles/index.css"
  ],
  externals: {
    cesium: "Cesium"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /node_modules/,
      include: path.resolve(__dirname, "..")
    }, {
      test: /\.css$/,
      loader: `style-loader!css-loader${!dist ? "?sourceMap" : ""}!postcss-loader`
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", dist ? "dist" : "dev"),
    pathinfo: !dist
  },
  plugins: [
    ...(dist ? [
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.ejs",
      title: "Cesium"
    }),
    new CopyWebpackPlugin([
      {
        from: "assets",
        to: "assets"
      },
      {
        from: `node_modules/cesium/Build/Cesium${dist ? "" : "Unminified"}`,
        to: "cesium"
      }
    ])
  ],
  resolve: {
    alias: {
      config: path.resolve(__dirname, "..", "config")
    },
    extenstions: ["", ".js"]
  },
  postcss() {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssUrl(),
      postcssCssnext({
        warnForDuplicates: false
      }),
      cssnano(),
      postcssBrowserReporter(),
      postcssReporter()
    ];
  }
});
