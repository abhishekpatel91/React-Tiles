var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    output: {
        publicPath: '/dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: __dirname + '/app/client/index.html',
            title: 'Tiles',
            template: './app/client/template/landing.html'
        })
    ]
});
