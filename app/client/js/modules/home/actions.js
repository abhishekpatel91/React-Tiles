import * as actionTypes from './actionTypes';

export function fetchTiles() {
    return { type: actionTypes.FETCH_TILES };
}

export function updateTiles(tiles) {
    return { type: actionTypes.UPDATE_TILES, payload: tiles };
}

export function updateSearchStr(value) {
    return { type: actionTypes.UPDATE_SEARCH_STR, payload: value };
}

export function resetSearchStr() {
    return { type: actionTypes.RESET_SEARCH_STR };
}

export function updateFilter(value) {
    return { type: actionTypes.UPDATE_FILTER, payload: value };
}
