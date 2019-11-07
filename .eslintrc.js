export default {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "plugins": [
    "react",
    "prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2016,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    'no-unused-vars': [2, { "args": "after-used", "argsIgnorePattern": "^_" }],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "quotes": [1, "single", { "avoidEscape": true }],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "semi": [
      "error",
      "always"
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "class-methods-use-this": 0
  },
};