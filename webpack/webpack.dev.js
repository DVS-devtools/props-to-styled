const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
    entry: commonPaths.examplePath.js,
    mode: 'development',
    output: {
        filename: '[name].js',
        path: commonPaths.outputPath,
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 3001,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: commonPaths.examplePath.html,
            filename: './index.html'
        }),
    ],
};