import * as actionTypes from './actionTypes';

const initialState = { tileDetails: {} };

function _updateTileDetails(state, action) {
    return Object.assign({}, state, { tileDetails: action.payload });
}

export default function(state = initialState, action) {
    switch (action.type) {
        
        case actionTypes.UPDATE_TILE_DETAILS:
            return _updateTileDetails(state, action);

        default:
            return state;
    }
}
