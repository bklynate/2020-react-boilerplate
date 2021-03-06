module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-undef': 'off',
    'no-shadow': 1,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/forbid-prop-types': 2,
    'react/prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/no-array-index-key': 'off',
    'react/sort-comp': 'off',
    'react/jsx-uses-vars': 2,
    'no-underscore-dangle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/no-autofocus': 'off',
    'no-unused-vars': 2,
    'react/state-in-constructor': 0,
    'react/button-has-type': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-curly-newline': 1,
    'react/jsx-one-expression-per-line': 0,
    semi: [2, 'always'],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    __CLIENT__: true,
    __DEVTOOLS__: true,
  },
};
