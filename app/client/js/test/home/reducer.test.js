import reducer from '../../modules/home/reducer';
import * as types from '../../modules/home/actionTypes';

describe('Home Reducer', () => {

    it('should return initial state.', () => {
        expect(reducer(undefined, { type: '' }))
        .toEqual({
            tiles: [],
            searchQuery: '',
            filterBy: '',
        });
    });

    it('should handle action type UPDATE_SEARCH_STR.', () => {
        const newState = reducer({
            tiles: [],
            searchQuery: '',
            filterBy: '',
        }, { type: types.UPDATE_SEARCH_STR, payload: 'some string' });

        expect(newState)
        .toEqual({
            tiles: [],
            searchQuery: 'some string',
            filterBy: '',
        });
    });

    it('should handle action type RESET_SEARCH_STR.', () => {
        const newState = reducer({
            tiles: [],
            searchQuery: 'some string',
            filterBy: '',
        }, { type: types.RESET_SEARCH_STR });

        expect(newState).toEqual({
            tiles: [],
            searchQuery: '',
            filterBy: '',
        });
    });

    it('should handle action type UPDATE_FILTER.', () => {
        const newState = reducer({
            tiles: [],
            searchQuery: '',
            filterBy: '',
        }, { type: types.UPDATE_FILTER, payload: 'some string' });

        expect(newState).toEqual({
            tiles: [],
            searchQuery: '',
            filterBy: 'some string',
        });
    });

    it('should handle action type UPDATE_TILES.', () => {
        const newState = reducer({
            tiles: [],
            searchQuery: '',
            filterBy: '',
        }, { type: types.UPDATE_TILES, payload: [{ title: 'Title A'}] });

        expect(newState).toEqual({
            tiles: [{ title: 'Title A'}],
            searchQuery: '',
            filterBy: '',
        });
    });

});