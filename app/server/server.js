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

// Webpack Dev Middleware
if (process.env.NODE_ENV === 'dev') {    
    webpackConfig = require('../webpack.config.js')(process.env.NODE_ENV);
    compiler = require('webpack')(webpackConfig);

    app.use(webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));
}

// Serve Static Content
app.use(express.static(__dirname + '/../client/'));

app.get('/server', function(request, response) {
    response.send('Content came from server!');
});

app.listen(9000, function() {
	console.log('Server listening to 9000 port.');
});