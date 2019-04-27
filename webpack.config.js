const path = require('path')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const compressionPlugin = require('compression-webpack-plugin')
const htmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/deploy/main.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "main.min.js",
        publicPath: '/'
    },
    devtool: '#source-map',
    devServer: {
        historyApiFallback: true,
        watchOptions: {
            poll: true
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: false,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new compressionPlugin(),
        new htmlWebPackPlugin({
            template: "./src/deploy/index.html",
            filename: "./index.html"
        })
    ]
};