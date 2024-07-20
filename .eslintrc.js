module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "linebreak-style": ["warn", "windows"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
    "no-mixed-spaces-and-tabs": [0],
    "react/display-name": ["off"],
    "react/prop-types": ["off"],
    "@typescript-eslint/no-var-requires": [0],
  },
};
