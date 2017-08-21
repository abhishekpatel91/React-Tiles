var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'prop-types', 'react-bind-handlers', 'react-router'],
        main: ['babel-polyfill', path.join(__dirname, 'app', 'client', 'js', 'main.js')]
    },
    output: {
        filename: '[name][hash].js',
        path: path.resolve(__dirname, 'app', 'client', 'dist'),
        publicPath: '/'
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'app', 'client')
    },
    plugins: [
        new CleanWebpackPlugin(['./app/client/dist', './app/client/index.html']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: [/(node_modules)/, /\.test\.js$/],
            use: {
                loader: 'babel-loader'
            }
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: [/(node_modules)/, /\.test\.js$/],
            loader: 'eslint-loader'
        }]
    }
}