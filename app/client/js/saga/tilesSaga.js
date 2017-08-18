import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/actions';
import appConfig from '../config';

const xhr = new XMLHttpRequest();

function makeAjax(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 400) {
                    reject();
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(data));
    });
}

function* fetchTiles(action) {
    const tiles = yield makeAjax(appConfig.tilesURL);
    yield put({ type: actionTypes.UPDATE_TILES, payload: tiles });
}

function* fetchTileDetails(action) {
    const tileDetails = yield makeAjax(`${appConfig.detailsURL}${action.payload}`);
    yield put({ type: actionTypes.UPDATE_TILE_DETAILS, payload: tileDetails });
}

function* postEditedTile(action) {
    const done = yield makeAjax(appConfig.editDetailsURL + action.payload.id, 'POST', action.payload);
    yield put(actions.editTile(action.payload));
}

function* doWithLoader(callback, action) {
    yield put(actions.showLoader());
    yield* callback(action);
    yield put(actions.hideLoader());
}

export default function* () {
    yield takeEvery(actionTypes.FETCH_TILES, function* (action) {
        yield* doWithLoader(fetchTiles, action);
    });
    yield takeEvery(actionTypes.FETCH_TILE_DETAILS, function* (action) {
        yield* doWithLoader(fetchTileDetails, action);
    });
    yield takeEvery(actionTypes.POST_EDITED_TILE, function* (action) {
        yield* doWithLoader(postEditedTile, action);
    });
}
