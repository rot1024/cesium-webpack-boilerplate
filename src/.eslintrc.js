module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": false
  },
  "parser": "babel-eslint",
  "plugins": ["babel"],
  "rules": {
    "babel/generator-star-spacing": [1, "before"],
    "babel/new-cap": 2,
    "babel/array-bracket-spacing": [1, "never"],
    "babel/object-curly-spacing": [1, "always"],
    "babel/object-shorthand": 1,
    "babel/arrow-parens": [1, "as-needed"],
    "babel/no-await-in-loop": 2,
    "node/no-unsupported-features": 0,
    "node/shebang": 0,
    "generator-star-spacing": 0,
    "new-cap": 0,
    "array-bracket-spacing": 0,
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "arrow-parens": 0
  }
};
