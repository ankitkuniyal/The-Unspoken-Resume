import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'], // For React 17+
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off', // Optional: if using TS or just ignoring prop-types
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': ['error', { ignore: ['args', 'attach', 'wireframe', 'intensity', 'position', 'angle', 'penumbra', 'decay', 'distance', 'color', 'roughness', 'metalness', 'transmission', 'thickness', 'clearcoat', 'clearcoatRoughness', 'ior', 'fade', 'speed', 'saturation', 'factor', 'count', 'depth', 'radius', 'floatIntensity', 'rotationIntensity', 'attenuation'] }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
