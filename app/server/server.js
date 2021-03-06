const path = require('path');

// Initialise express and webpack instances
const express = require('express'),
    webpackMiddleware = require("webpack-dev-middleware"),
	bodyParser = require('body-parser');
    
let webpackConfig,
    compiler;

const app = express();
const dataAPI = require('./router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Trimming env variable for global use
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : process.env.NODE_ENV;

// Serve Static Content
app.use(express.static(__dirname + '/assets'));
app.use('/dist', express.static(__dirname + '/../client/dist'));
app.use('/css', express.static(__dirname + '/../client/css'));

// Webpack Dev Middleware
if (process.env.NODE_ENV === 'dev') {
    webpackConfig = require('../../webpack.config.js')(process.env.NODE_ENV);
    compiler = require('webpack')(webpackConfig);
    
    app.use(webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));
} else {
    // a wildcard route to index.html for non xhr requests
    app.get('/*', (request, response, next) => {
        if (request.xhr) {
            next();
        } else {
            response.sendFile(path.join(__dirname + '/../client/index.html'));
        }
    });
}

app.use('/api', dataAPI);

app.listen(9000, () => {
	console.log('Server listening to 9000 port.');
});
