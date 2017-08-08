module.exports = function(env) {
    console.log('============= ', env);
    return require('./webpack.base.js');

    // if (env === 'prod') {
    // } else {
    // }
}