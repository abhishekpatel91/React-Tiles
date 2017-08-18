import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tiles: [],
    searchQuery: '',
    tileDetails: {},
    isLoading: false,
};

function _updateTiles(state, action) {
    return Object.assign({}, state, { tiles: action.payload });
}

function _updateSearchStr(state, action) {
    return Object.assign({}, state, { searchQuery: action.payload });
}

function _resetSearchStr(state, action) {
    return Object.assign({}, state, { searchQuery: '' });
}

function _updateTileDetails(state, action) {
    return Object.assign({}, state, { tileDetails: action.payload });
}

function _showLoader(state) {
    return Object.assign({}, state, { isLoading: true });
}

function _hideLoader(state) {
    return Object.assign({}, state, { isLoading: false });
}

export default function(state = initialState, action) {
    switch (action.type) {
        
        case actionTypes.UPDATE_TILES: 
            return _updateTiles(state, action);

        case actionTypes.UPDATE_SEARCH_STR:
            return _updateSearchStr(state, action);
        
        case actionTypes.RESET_SEARCH_STR:
            return _resetSearchStr(state, action);
        
        case actionTypes.UPDATE_TILE_DETAILS:
            return _updateTileDetails(state, action);

        case actionTypes.EDIT_TILE:
            return _updateTileDetails(state, action);
        
        case actionTypes.SHOW_LOADER:
            return _showLoader(state);

        case actionTypes.HIDE_LOADER:
            return _hideLoader(state);

        default:
            return state;
    }
}
