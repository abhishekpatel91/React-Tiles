module.exports = function(env) {
    switch (env) {

        case 'dev':
            return require('./webpack.dev');
        
        case 'build':
            return require('./webpack.build');

        case 'prod':
            return require('./webpack.prod')
        
        default:
            return require('./webpack.build');
    }
}