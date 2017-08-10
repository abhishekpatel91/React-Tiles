var express = require('express');
var router = express.Router();
var controller = require('./controller');

router.get('/tiles', (request, response) => {
    controller.getTiles(request, response);
});

router.get('/details/:id', (request, response) => {
    controller.getTileDetails(request, response);
});

module.exports = router;