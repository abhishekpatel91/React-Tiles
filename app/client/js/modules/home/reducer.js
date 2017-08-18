import * as actionTypes from './actionTypes';

const initialState = {
    tiles: [],
    searchQuery: '',
    filterBy: ''
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

function _updateFilter(state, action) {
    return Object.assign({}, state, { filterBy: action.payload });
}

export default function(state = initialState, action) {
    switch (action.type) {
        
        case actionTypes.UPDATE_TILES: 
            return _updateTiles(state, action);

        case actionTypes.UPDATE_SEARCH_STR:
            return _updateSearchStr(state, action);
        
        case actionTypes.RESET_SEARCH_STR:
            return _resetSearchStr(state, action);

        case actionTypes.UPDATE_FILTER:
            return _updateFilter(state, action);

        default:
            return state;
    }
}
