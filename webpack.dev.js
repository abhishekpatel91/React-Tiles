var merge = require('webpack-merge');
var baseConfig = require('./webpack.base');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            filename:'index.html',
            title: 'Tiles',
            template: './app/client/template/landing.html'
        })
    ]
});
