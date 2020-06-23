const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const NotifierPlugin = require('webpack-notifier');
const path = require('path');

const rootPath = process.cwd() + '/';
const isProduction = (process.env.NODE_ENV === 'production');

const config = {
    srcDir: rootPath + 'assets/',
    distDir: rootPath + 'dist/',
    publicPath: '/dist/',
    fileFormat: '[name]_[hash]',
};

const cacheLoader = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: 'assets/.cache-loader',
    },
};

module.exports = {
    mode: process.env.NODE_ENV,
    performance: {
        hints: false,
    },
    optimization: {
        minimize: isProduction,
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
    devtool: isProduction ? 'source-map' : false,
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
                use: [
                    cacheLoader,
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    cacheLoader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isProduction,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isProduction,
                        },
                    },
                ],
            },
            {
                test: /\.(otf|ttf|eot|woff2?|svg)$/,
                include: config.srcDir + 'fonts/',
                use: [
                    cacheLoader,
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/' + config.fileFormat + '.[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|gif|jpe?g)$/,
                include: config.srcDir + 'img/',
                use: [
                    cacheLoader,
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/' + config.fileFormat + '.[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: false,
        }),
        new MiniCssExtractPlugin({
            filename: config.fileFormat + '.css',
        }),
        new ManifestPlugin(),
        new NotifierPlugin({
            alwaysNotify: true,
        }),
    ],
};
