import { FlatCompat } from '@eslint/eslintrc';
import airbnbBase from 'eslint-config-airbnb-base';
import importPlugin from 'eslint-plugin-import';

// Use the FlatCompat class to convert old-style .eslintrc rules to the new format
const compat = new FlatCompat();

export default [
  ...compat.extends(airbnbBase),
  ...compat.plugins(importPlugin),
  {
    files: ['*.js'],
    rules: {
      // Your custom rules here
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  },
];

