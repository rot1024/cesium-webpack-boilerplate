"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const cssImport = require("postcss-smart-import");
const cssUrl = require("postcss-url");
const cssnext = require("postcss-cssnext");
const cssBrowserReporter = require("postcss-browser-reporter");
const cssReporter = require("postcss-reporter");

const devServerPort = 3000;
const extractCSS = new ExtractTextWebpackPlugin("style.css");
const cssLoader = [
  "css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]",
  "postcss"
].join("!");

module.exports = dist => ({
  devServerPort,
  debug: !dist,
  devtool: dist ? void 0 : "source-map",
  entry: [
    ...(dist ? [] : [
      `webpack-dev-server/client?http://0.0.0.0:${devServerPort}`,
      "webpack/hot/dev-server"
    ]),
    "./src/index.js"
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
      loader: dist ? extractCSS.extract("style", cssLoader) : `style!${cssLoader}`,
      exclude: /node_modules/
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
      new webpack.optimize.UglifyJsPlugin(),
      extractCSS
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
      { from: "static" },
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
  postcss(wp) {
    return [
      cssImport({
        path: ["node_modules", "./src"],
        addDependencyTo: wp
      }),
      cssUrl(),
      cssnext({ browsers: ["> 5% in JP"] }),
      cssBrowserReporter(),
      cssReporter()
    ];
  }
});
