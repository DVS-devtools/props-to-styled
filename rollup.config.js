import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';

function onwarn(warning) {
    throw Error(typeof warning === 'string' ? warning : warning.message);
}

const input = 'src/index.js';

const extensions = ['.js', '.jsx'];

const commonPlugins = [
    nodeResolve({ extensions }),
    commonjs({
        ignoreGlobal: true,
        include: /node_modules/,
    }),
    babel({
        extensions,
        exclude: /node_modules/,
        runtimeHelpers: true,
        configFile: path.resolve(process.cwd(), 'babel.config.js'),
    }),
    nodeGlobals(),
];

export default [
    {
        input,
        onwarn,
        output: {
            format: 'umd',
            file: 'umd/index.js',
            name: 'PropsToStyled',
            globals: {
                'prop-types': 'PropTypes',
            },
        },
        external: [
            'prop-types',
        ],
        plugins: [
            ...commonPlugins,
            replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
        ],
    },
    {
        input,
        onwarn,
        output: {
            format: 'umd',
            file: 'umd/index.min.js',
            name: 'PropsToStyled',
            globals: {
                'prop-types': 'PropTypes',
            },
        },
        external: [
            'prop-types',
        ],
        plugins: [
            ...commonPlugins,
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            terser(),
        ],
    },
];
