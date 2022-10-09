const javascript = {
  files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
  extends: [
    'standard',
    'next/core-web-vitals',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    /* Automatically sort all imports and exports */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    /* Ban ignoring Typescript and ESLint errors unless a reasonable description is provided */
    'eslint-comments/no-restricted-disable': 'error',
    'eslint-comments/require-description': 'error',
  },
};

const typescript = {
  files: ['*.ts', '*.tsx'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: ['standard-with-typescript', 'prettier'],
  rules: {
    /* Ban ignoring Typescript and ESLint errors unless a reasonable description is provided */
    '@typescript-eslint/ban-ts-comment': 'error',
    /* We need to partially disable this rule to allow async functions as react callback handlers (e.g. onClick) */
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
  },
};

const react = {
  files: ['*.jsx', '*.tsx'],
  extends: ['standard-jsx', 'standard-react', 'prettier'],
  rules: {
    /* This rule is way too restrictive and breaks on HOCs and forwarded refs */
    'react/display-name': 'off',
    /* Not needed since React 17 */
    'react/react-in-jsx-scope': 'off',
  },
};

module.exports = {
  ignorePatterns: [],
  overrides: [javascript, typescript, react],
};
