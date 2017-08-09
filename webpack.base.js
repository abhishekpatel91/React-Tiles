var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'prop-types', 'react-bind-handlers', 'react-router'],
        main: path.join(__dirname, 'app', 'client', 'js', 'main.js')
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
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }]
    }
}