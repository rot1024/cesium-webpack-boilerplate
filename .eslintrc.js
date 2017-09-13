module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["import", "node"],
  root: true,
  rules: {
    "accessor-pairs": 2,
    "array-bracket-spacing": [1, "never"],
    "array-callback-return": 2,
    "array-bracket-newline": 0,
    "array-element-newline": 0,
    "arrow-body-style": [1, "as-needed"],
    "arrow-parens": [1, "as-needed"],
    "arrow-spacing": [1, { after: true, before: true }],
    "block-scoped-var": 2,
    "block-spacing": 1,
    "brace-style": 0,
    "callback-return": 0,
    "camelcase": [1, { properties: "never" }],
    "capitalized-comments": 0,
    "class-methods-use-this": 1,
    "comma-dangle": [1, {
      "arrays": "never",
      "objects": "only-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "comma-spacing": [1, { after: true, before: false }],
    "comma-style": [1, "last"],
    "curly": 0,
    "complexity": 0,
    "computed-property-spacing": [1, "never"],
    "consistent-return": 2,
    "consistent-this": [2, "that"],
    "default-case": 2,
    "dot-location": [1, "property"],
    "dot-notation": [1, { allowKeywords: true }],
    "eol-last": 1,
    "eqeqeq": 2,
    "for-direction": 1,
    "func-names": 0,
    "func-name-matching": 0,
    "func-style": 0,
    "function-paren-newline": [1, "consistent"],
    "getter-return": 2,
    "generator-star-spacing": [1, "before"],
    "global-require": 0,
    "guard-for-in": 2,
    "handle-callback-err": [2, "^(err|error)$"],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [1, 2, {
      flatTernaryExpressions: true,
      SwitchCase: 1
    }],
    "init-declarations": 0,
    "jsx-quotes": [1, "prefer-double"],
    "key-spacing": [1, { afterColon: true, beforeColon: false }],
    "keyword-spacing": [1, { after: true, before: true }],
    "line-comment-position": 0,
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "max-depth": [2, 10],
    "max-len": [1, {
      code: 100,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true
    }],
    "max-lines": 0,
    "max-nested-callbacks": [1, 5],
    "max-params": 0,
    "multiline-ternary": 0,
    "new-cap": 2,
    "new-parens": 2,
    "newline-per-chained-call": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-await-in-loop": 0,
    "no-buffer-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-confusing-arrow": 0,
    "no-catch-shadow": 2,
    "no-continue": 0,
    "no-console": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 1,
    "no-else-return": 2,
    "no-empty-function": 1,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-label": 2,
    "no-extra-parens": [2, "functions"],
    "no-floating-decimal": 2,
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-invalid-this": 2,
    "no-irregular-whitespace": [2, {
      skipStrings: true,
      skipRegExps: true,
      skipTemplates: true
    }],
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 1,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": 0,
    "no-mixed-requires": [1, { allowCall: true, grouping: true }],
    "no-multi-assign": 1,
    "no-multi-spaces": 1,
    "no-multi-str": 0,
    "no-multiple-empty-lines": 0,
    "no-global-assign": 2,
    "no-negated-condition": 0,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 1,
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-restricted-properties": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-return-assign": 2,
    "no-return-await": 2,
    "no-script-url": 2,
    "no-self-assign": [2, { props: true }],
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-sync": 0,
    "func-call-spacing": 1,
    "func-name-matching": 0,
    "no-sync": 0,
    "no-tabs": 1,
    "no-template-curly-in-string": 1,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 1,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 1,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-expressions": 1,
    "no-unused-vars": [1, { args: "after-used", vars: "all" }],
    "no-use-before-define": 0,
    "no-useless-call": 1,
    "no-useless-computed-key": 1,
    "no-useless-concat": 1,
    "no-useless-constructor": 1,
    "no-useless-rename": 1,
    "no-useless-return": 1,
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-whitespace-before-property": 1,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": [1, "always"],
    "object-property-newline": 0,
    "object-shorthand": 1,
    "one-var": 0,
    "one-var-declaration-per-line": 1,
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [1, { classes: "always", switches: "never" }],
    "padding-line-between-statements": [
      1,
      { blankLine: "always", prev: ["cjs-export", "cjs-import", "class", "directive", "export", "import"], next: "*" },
      { blankLine: "any", prev: "cjs-export", next: "cjs-export" },
      { blankLine: "any", prev: "cjs-import", next: "cjs-import" },
      { blankLine: "any", prev: "export", next: "export" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "never", prev: "directive", next: "directive" }
    ],
    "prefer-arrow-callback": 1,
    "prefer-const": 1,
    "prefer-destructuring": [1, {
      array: false,
      object: true
    }, {
      enforceForRenamedProperties: false
    }],
    "prefer-numeric-literals": 1,
    "prefer-promise-reject-errors": 1,
    "prefer-rest-params": 0,
    "prefer-spread": 1,
    "prefer-template": 1,
    "quote-props": [1, "as-needed", { keywords: false, numbers: true }],
    "quotes": [1, "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "radix": [2, "always"],
    "require-await": 1,
    "require-jsdoc": 0,
    "require-yield": 2,
    "rest-spread-spacing": 1,
    "semi": 2,
    "semi-spacing": [1, { after: true, before: false }],
    "semi-style": 1,
    "sort-keys": 0,
    "sort-imports": 0,
    "sort-vars": 0,
    "space-before-blocks": 1,
    "space-before-function-paren": [1, {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": [1, "never"],
    "space-infix-ops": 1,
    "space-unary-ops": [1, { nonwords: false, words: true }],
    "spaced-comment": [1, "always", {
      block: { balanced: true }
    }],
    "strict": [2, "safe"],
    "switch-colon-spacing": 1,
    "symbol-description": 1,
    "template-curly-spacing": [1, "never"],
    "template-tag-spacing": [1, "never"],
    "unicode-bom": [2, "never"],
    "valid-jsdoc": 0,
    "valid-typeof": [2, { requireStringLiterals: true }],
    "vars-on-top": 0,
    "wrap-iife": [2, "inside", { functionPrototypeMethods: true }],
    "wrap-regex": 0,
    "yield-star-spacing": [1, "before"],
    "yoda": [1, "never", { exceptRange: true }],
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [2, { js: "never" }],
    "import/first": [2, "absolute-first"],
    "import/max-dependencies": 0,
    "import/named": 2,
    "import/namespace": 2,
    "import/newline-after-import": 0,
    "import/no-absolute-path": 2,
    "import/no-amd": 2,
    "import/no-anonymous-default-export": 0,
    "import/no-commonjs": 0,
    "import/no-deprecated": 0,
    "import/no-duplicates": 2,
    "import/no-dynamic-require": 2,
    "import/no-extraneous-dependencies": 0,
    "import/no-internal-modules": 0,
    "import/no-mutable-exports": 2,
    "import/no-named-as-default-member": 2,
    "import/no-named-as-default": 0,
    "import/no-named-default": 2,
    "import/no-namespace": 0,
    "import/no-nodejs-modules": 0,
    "import/no-restricted-paths": 0,
    "import/no-unassigned-import": 0,
    "import/no-unresolved": 0,
    "import/no-webpack-loader-syntax": 2,
    "import/order": [1, {
      groups: ["builtin", "external", "parent", "sibling", "index"],
      "newlines-between": "always-and-inside-groups"
    }],
    "import/prefer-default-export": 0,
    "import/unambiguous": 2,
    "node/exports-style": 0,
    "node/no-extraneous-import": 2,
    "node/no-extraneous-require": 2,
    "node/no-deprecated-api": 2,
    "node/no-missing-import": 2,
    "node/no-missing-require": 2,
    "node/no-unpublished-bin": 2,
    "node/no-unpublished-import": 0,
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features": 2,
    "node/process-exit-as-throw": 2,
    "node/shebang": 2
  }
};
