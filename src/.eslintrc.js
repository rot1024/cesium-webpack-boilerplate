module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: false
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "node/no-unsupported-features": 0
  }
};
