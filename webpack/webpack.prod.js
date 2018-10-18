const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('./paths');

module.exports = {
    mode: 'production',
    entry: commonPaths.entryPath,
    output: {
        path: commonPaths.outputPath,
        filename: 'index.js',
        library: 'YourLibrary',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${commonPaths.cssFolder}/[name].css`,
            chunkFilename: '[id].css',
        }),
    ],
    devtool: 'source-map',
};