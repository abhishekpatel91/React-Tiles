const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/tiles', (request, response) => {
    controller.getTiles(request, response);
});

router.get('/details/:id', (request, response) => {
    controller.getTileDetails(request, response);
});

router.post('/editDetails/:id', (request, response) => {
    controller.editTileDetails(request, response);
});

module.exports = router;