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

function _writeFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data), (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File is saved');
            }
        });
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

function editTileDetails(request, response) {
    const { id } = request.body;
    _readFile(tilesFilePath)
    .then((data) => {
        data = JSON.parse(data);
        const len = data.data.length;
        for (let idx = 0; idx < len; idx++) {
            if (data.data[idx].id == id) {
                data.data[idx] = request.body;
                break;
            }
        }
        return data;
    })
    .then((data) => {
        return _writeFile(tilesFilePath, data);
    })
    .then((msg) => {
        response.json({ done: true });
    })
    .catch(() => {
        response.json({ done: false })
    });
    
}

module.exports = {
    getTiles,
    getTileDetails,
    editTileDetails
}