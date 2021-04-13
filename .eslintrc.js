module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['js', '.jsx', '.ts', '.tsx'] }],
    'radix': 'off',
    'import/prefer-default-export': 'off',
  },
};
