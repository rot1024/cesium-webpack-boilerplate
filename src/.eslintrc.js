module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: false
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "node/no-unsupported-features": 0
  }
};
