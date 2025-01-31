const eslintConfig = {
  "root": true,
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 7,
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
  "globals":{
    "console": true
  },
  "extends": [
    "plugin:vue/essential",
    "standard"
  ],
  "plugins": [
    "vue"
  ],
  "rules": {
    "no-var": 1,
    "no-alert": 1,
    "no-ternary": 0,
    "no-self-assign": 0,
    "standard/no-callback-literal": 0,
    "func-call-spacing": 0,
    "prefer-promise-reject-errors": 0,
    "no-unused-vars": 1,
    "no-debugger": 1,
    "no-console": 1,
    'no-useless-constructor': "off",
    "vue/no-side-effects-in-computed-properties": 0
  }
};

module.exports = eslintConfig;