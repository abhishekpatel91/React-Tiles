var path = require('path');

// Initialise express and webpack instances
var express = require('express'),
    webpackMiddleware = require("webpack-dev-middleware"),
	bodyParser = require('body-parser'),
    webpackConfig,
    compiler;

var app = express();
var dataAPI = require('./router');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Trimming env variable for global use
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : process.env.NODE_ENV;

// Serve Static Content
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/../client/'));
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
    app.get('/*', function(request, response, next) {
        if (request.xhr) {
            next();
        } else {
            response.sendFile(path.join(__dirname + '/../client/index.html'));
        }
    });
}

app.use('/api', dataAPI);

app.get('/server', function(request, response) {
    var dummyData = [{
        title: 'apple',
        id: 1,
        imgURL: '/images/logo.jpg'
    },{
        title: 'banana',
        id: 12,
        imgURL: '/images/logo.jpg'
    },{
        title: 'carrot',
        id: 122,
        imgURL: '/images/logo.jpg'
    }];
    response.json(dummyData);
});

app.listen(9000, function() {
	console.log('Server listening to 9000 port.');
});