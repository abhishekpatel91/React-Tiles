var path = require('path');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'prop-types', 'react-bind-handlers', 'react-router'],
        main: path.join(__dirname, 'app', 'client', 'js', 'main.js')
    },
    output: {
        filename: '[name].js',
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