import * as actionTypes from './actionTypes';

export function fetchTileDetails(id) {
    return { type: actionTypes.FETCH_TILE_DETAILS, payload: id };
}

export function postEditedTile(editedTile) {
    return { type: actionTypes.POST_EDITED_TILE, payload: editedTile };
}