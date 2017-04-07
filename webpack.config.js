"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const devServerPort = 3000;
const extractCSS = new ExtractTextWebpackPlugin("style.css");
const cssLoaders = prod => [
  {
    loader: "css-loader",
    options: {
      importLoaders: 1,
      minimize: prod,
      sourceMap: !prod
    }
  },
  "postcss-loader"
];

module.exports = ({ prod } = {}) => ({
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: devServerPort,
    hot: true
  },
  devtool: prod ? void 0 : "inline-source-map",
  entry: [
    ...prod ? [] : [
      `webpack-dev-server/client?http://0.0.0.0:${devServerPort}`,
      "webpack/hot/only-dev-server"
    ],
    "./src/index.js"
  ],
  module: {
    unknownContextCritical: false,
    unknownContextRegExp: /^.\/.*$/,
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: prod ? extractCSS.extract({
          fallback: "style-loader",
          use: cssLoaders(prod)
        }) : ["style-loader", ...cssLoaders(prod)],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: prod ? extractCSS.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        }) : ["style-loader", "css-loader"],
        include: /node_modules/
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: "file-loader"
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, prod ? "build" : "dev"),
    sourcePrefix: ""
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(prod ? "production" : "development")
    }),
    ...prod ? [
      new webpack.optimize.UglifyJsPlugin(),
      extractCSS
    ] : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: `node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
        ignore: "Cesium.js"
      },
      {
        from: "static",
        to: "static"
      }
    ])
  ]
});
