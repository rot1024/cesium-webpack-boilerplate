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
  "css?sourceMap&importLoaders=1",
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
  module: {
    unknownContextCritical: false,
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        include: path.resolve(__dirname, "..")
      },
      {
        test: /\.css$/,
        loader: dist ? extractCSS.extract("style", cssLoader) : `style!${cssLoader}`,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: dist ? extractCSS.extract("style", "css") : "style!css",
        include: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        loader: "file"
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", dist ? "dist" : "dev"),
    pathinfo: !dist,
    sourcePrefix: ""
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
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: `node_modules/cesium/Build/Cesium${dist ? "" : "Unminified"}`,
        ignore: "Cesium.js"
      },
      {
        from: "static",
        to: "static"
      }
    ])
  ],
  resolve: {
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
