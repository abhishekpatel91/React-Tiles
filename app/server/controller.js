const fs = require('fs');

const tilesFilePath = __dirname + '/database/tiles.json';

function _readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    });
}

function getTiles(request, response) {
    _readFile(tilesFilePath)
    .then((data) => {
        data = JSON.parse(data).data;
        response.json(data);
    })
    .catch((err) => {
        response.end();
    });
}

function getTileDetails(request, response) {
    const id = request.params.id ? request.params.id : null;
    _readFile(tilesFilePath)
    .then((data) => {
        data = JSON.parse(data).data;
        if (id !== null) {
            data = data.filter((obj) => (id == obj.id));
            data = data.length ? data[0] : {};
            response.json(data);
        } else {
            response.json({})
        }
    })
    .catch((err) => {
        response.end();
    });
}

module.exports = {
    getTiles,
    getTileDetails
}