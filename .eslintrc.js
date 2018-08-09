module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true
  },
  // https://github.com/standard/standard/blob/master/RULES.md
  extends: 'standard',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['mocha'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'keyword-spacing': [
      'error',
      {
        overrides: {
          if: { after: false }
        }
      }
    ],
    eqeqeq: ['error', 'always'],
    indent: ['error', 2],
    'operator-linebreak': ['error', 'none'],
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'no-unused-expressions': 'off',
    //mocha/testing rules
    'mocha/no-exclusive-tests': 'error'
  },
  globals: {
    expect: true,
    config: true,
    user: true,
    sinon: true
  }
}
