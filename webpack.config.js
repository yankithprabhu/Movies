
var webpack = require('webpack'),
    path = require('path'),
    debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.resolve(__dirname, "app"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: [
                        'react-html-attrs',
                        'transform-class-properties',
                        'transform-decorators-legacy'
                    ]
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "dist/",
        filename: "bundle.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};
