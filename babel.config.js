const isProd = process.env.NODE_ENV === 'production';
const babelEnv = process.env.BABEL_ENV;

const esProdPlugins = [
    ['@babel/plugin-transform-runtime', { useESModules: true }],
];

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: false,
                modules: ['esm', 'production-umd'].includes(babelEnv) ? false : 'cjs',
                debug: !isProd,
            },
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    ignore: [/@babel[\\|/]runtime/],
    env: {
        cjs: {
            plugins: [],
        },
        development: {
            presets: [
                '@babel/preset-react'
            ],
            plugins: [],
        },
        esm: {
            plugins: esProdPlugins,
        },
        production: {
            plugins: esProdPlugins,
        },
        'production-umd': {
            plugins: esProdPlugins,
        },
    },
};
