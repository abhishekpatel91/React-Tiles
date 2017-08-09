var path = require('path');

// Initialise express and webpack instances
var express = require('express'),
    webpackMiddleware = require("webpack-dev-middleware"),
	bodyParser = require('body-parser'),
    webpackConfig,
    compiler;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

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
    // a wildcard route to index.html
    // app.get('/*', function(request, response) {
    //     response.sendFile(path.join(__dirname + '/../client/index.html'));
    // });
}

app.get('/*', function(request, response) {
        response.sendFile(path.join(__dirname + '/../client/index.html'));
    });

app.get('/server', function(request, response) {
    response.send('Content came from server!');
});

app.listen(9000, function() {
	console.log('Server listening to 9000 port.');
});