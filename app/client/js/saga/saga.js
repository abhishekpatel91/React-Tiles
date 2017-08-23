import { put, takeEvery } from 'redux-saga/effects';
import appConfig from '../utility/config';
import { makeAjax } from '../utility/global';

import * as homeActionTypes from '../modules/home/actionTypes';
import * as detailsActionTypes from '../modules/details/actionTypes';
import * as loaderActions from '../modules/loader/actions';

function* fetchTiles(action) {
    const tiles = yield makeAjax(appConfig.tilesURL);
    yield put({ type: homeActionTypes.UPDATE_TILES, payload: tiles });
}

function* fetchTileDetails(action) {
    const tileDetails = yield makeAjax(`${appConfig.detailsURL}${action.payload}`);
    yield put({ type: detailsActionTypes.UPDATE_TILE_DETAILS, payload: tileDetails });
}

function* postEditedTile(action) {
    const done = yield makeAjax(appConfig.editDetailsURL + action.payload.id, 'POST', action.payload);
    yield put({ type: detailsActionTypes.UPDATE_TILE_DETAILS, payload: action.payload });
}

function* doWithLoader(callback, action) {
    yield put(loaderActions.showLoader());
    yield* callback(action);
    yield put(loaderActions.hideLoader());
}

export default function* () {
    yield takeEvery(homeActionTypes.FETCH_TILES, doWithLoader, fetchTiles);
    yield takeEvery(detailsActionTypes.FETCH_TILE_DETAILS, doWithLoader, fetchTileDetails);
    yield takeEvery(detailsActionTypes.POST_EDITED_TILE, doWithLoader, postEditedTile);
}
