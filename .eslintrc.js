const path = require('path');

module.exports = {
    globals: {
        // @see https://github.com/Chatie/eslint-config/issues/45
        NodeJS: true,
    },
    env: {
        browser: false,
        commonjs: true,
        node: true,
        jest: true,
        es6: true,
    },
    plugins: ['prettier', 'import', 'unused-imports', '@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'plugin:workspaces/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: false,
            ecmaVersion: 8,
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
        useJSXTextNode: false,
        sourceType: 'module',
        project: [path.join(__dirname, 'tsconfig.json')],
        tsconfigRootDir: '.',
        warnOnUnsupportedTypeScriptVersion: false,
    },
    rules: {
        'prettier/prettier': 'error',
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        // see https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
        'no-undef': 'off',
        'no-unreachable': 'error',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'no-debugger': 'off',
        'no-console': 'warn',
        // Included with unused-imports
        'no-unused-vars': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/prefer-interface': 'off',
        // For some reason, we're using snake-case a lot.
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-restricted-imports': [
            'error',
            {patterns: ['shared/*', 'fx-service-sdk/*', 'sdk/*']},
        ],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
};
