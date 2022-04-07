module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': ['off'],
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx,js,jsx}'],
      env: {
        jest: true,
      },
    },
    {
      files: ['src/remotes/**/*', 'src/context/**/*'],
      rules: {
        'import/prefer-default-export': ['off'],
      },
    },
  ],
};
