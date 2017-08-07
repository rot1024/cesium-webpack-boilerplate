"use strict";

const path = require("path");

const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");

module.exports = ({ prod } = {}) => {
  const devServerPort = 3000;
  const extractCSS = new ExtractTextWebpackPlugin("style.css");
  const cssLoaders = [
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

  return {
    devServer: {
      contentBase: path.join(__dirname, "build"),
      // disableHostCheck: true,
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
            use: cssLoaders
          }) : ["style-loader", ...cssLoaders],
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
        }
      ]
    },
    output: {
      filename: `bundle${prod ? ".[chunkhash]" : ""}.js`,
      path: path.join(__dirname, prod ? "build" : "dev"),
      publicPath: "/"
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(prod ? "production" : "development")
      }),
      ...prod ? [
        new CleanWebpackPlugin("build"),
        new webpack.optimize.UglifyJsPlugin({
          ecma: 5,
          parallel: true
        }),
        extractCSS
      ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ],
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor", "manifest"],
        filename: `vendor${prod ? ".[chunkhash]" : ""}.js`,
        minChunks: module => module.context && module.context.indexOf("node_modules") !== -1
      }),
      new CopyWebpackPlugin([
        {
          from: `node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
          to: "cesium"
        },
        {
          from: "static",
          to: "static",
          ignore: [".gitkeep"]
        }
      ]),
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),
      new HtmlWebpackIncludeAssetsPlugin({
        append: false,
        assets: [
          "cesium/Widgets/widgets.css",
          "cesium/Cesium.js"
        ]
      })
    ]
  };
};
