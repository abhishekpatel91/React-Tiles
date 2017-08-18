import * as actionTypes from './actionTypes';

export function fetchTiles() {
    return { type: actionTypes.FETCH_TILES };
}

export function updateSearchStr(value) {
    return { type: actionTypes.UPDATE_SEARCH_STR, payload: value };
}

export function resetSearchStr() {
    return { type: actionTypes.RESET_SEARCH_STR };
}

export function fetchTileDetails(id) {
    return { type: actionTypes.FETCH_TILE_DETAILS, payload: id };
}

export function editTile(value) {
    return { type: actionTypes.EDIT_TILE, payload: value };
}

export function postEditedTile(editedTile) {
    return { type: actionTypes.POST_EDITED_TILE, payload: editedTile };
}

export function showLoader() {
    return { type: actionTypes.SHOW_LOADER };
}

export function hideLoader() {
    return { type: actionTypes.HIDE_LOADER };
}
