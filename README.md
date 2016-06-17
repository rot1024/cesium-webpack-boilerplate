# cesium-webpack-boilerplate

Cesium + Babel + postcss + webpack

REQUIRED: Node.js v6

## Usage

```sh
git clone https://github.com/rot1024/cesium-webpack-boilerplate.git
cd cesium-webpack-boilerplate
npm install
npm start # run dev server
npm run build # build
```

## Dependencies

- **cesium**
- eslint
  - eslint-plugin-node
  - eslint-plugin-babel
  - babel-eslint
- babel-core
  - babel-preset-es2015
  - babel-preset-stage-3
  - babel-plugin-transform-runtime
- postcss
  - postcss-import
  - postcss-url
  - postcss-cssnext
  - cssnano
  - postcss-browser-reporter
  - postcss-reporter
- webpack
  - babel-loader
  - postcss-loader
    - css-loader
    - style-loader
  - copy-webpack-plugin
  - html-webpack-plugin
  - webpack-dev-server
  - open
