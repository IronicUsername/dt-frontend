module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'quotes': ['warn', 'single'],
        'no-whitespace-before-property': ['off'],
        'max-len': ['error', { code: 159, tabWidth: 4}],
        'no-console': process.env.NODE_ENV === 'production' ? 'error': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error': 'off'
    }
};
