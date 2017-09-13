module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: false
  },
  globals: {
    Cesium: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "node/no-unsupported-features": 0
  }
};
