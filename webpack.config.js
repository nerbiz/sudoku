const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const NotifierPlugin = require('webpack-notifier');
const path = require('path');

const rootPath = process.cwd() + '/';

const config = {
    srcDir: rootPath + 'assets/',
    distDir: rootPath + 'dist/',
    // Remove the document root from the absolute path, to get the relative (public) path
    publicPath: '/dist/',
    fileFormat: '[name]_[hash]',
};

module.exports = {
    mode: process.env.NODE_ENV,
    performance: {
        hints: false,
    },
    optimization: {
        minimize: (process.env.NODE_ENV === 'production'),
    },
    stats: {
        hash: false,
        version: false,
        timings: false,
        children: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        chunks: false,
        modules: false,
        reasons: false,
        source: false,
        publicPath: false,
    },
    entry: {
        'app': [
            config.srcDir + 'js/app.js',
            config.srcDir + 'scss/app.scss',
        ],
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, config.distDir),
        publicPath: config.publicPath,
        filename: config.fileFormat + '.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(otf|ttf|eot|woff2?|svg)$/,
                include: config.srcDir + 'fonts/',
                loader: 'file-loader',
                options: {
                    name: 'fonts/' + config.fileFormat + '.[ext]',
                },
            },
            {
                test: /\.(svg|png|gif|jpe?g)$/,
                include: config.srcDir + 'img/',
                loader: 'file-loader',
                options: {
                    name: 'img/' + config.fileFormat + '.[ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({ verbose: false }),
        new MiniCssExtractPlugin({ filename: config.fileFormat + '.css' }),
        // new OptimizeCssAssetsPlugin({
        //     cssProcessorPluginOptions: {
        //         preset: ['default', { discardComments: { removeAll: true } }],
        //     },
        // }),
        new ManifestPlugin(),
        new NotifierPlugin({
            alwaysNotify: true,
        }),
    ],
};
