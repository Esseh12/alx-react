module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    // Add your custom rules here
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};