import * as types from '../../modules/home/actionTypes';
import * as actions from '../../modules/home/actions';

describe('Home module actions', () => {

    it('should return action with type FETCH_TILES.', () => {
        expect(actions.fetchTiles())
        .toEqual({ type: types.FETCH_TILES});
    });

    it('should return action with type UPDATE_TILES.', () => {
        const tiles = [];
        expect(actions.updateTiles(tiles))
        .toEqual({ type: types.UPDATE_TILES, payload: tiles });
    });

    it('should return action with type UPDATE_SEARCH_STR.', () => {
        const value = 'Some string';
        expect(actions.updateSearchStr(value))
        .toEqual({ type: types.UPDATE_SEARCH_STR, payload: value });
    });

    it('should return action with type RESET_SEARCH_STR.', () => {
        expect(actions.resetSearchStr())
        .toEqual({ type: types.RESET_SEARCH_STR});
    });

    it('should return action with type UPDATE_FILTER.', () => {
        const value = 'Some filter value';
        expect(actions.updateFilter(value))
        .toEqual({ type: types.UPDATE_FILTER, payload: value });
    });

});