import reducer from '../../modules/details/reducer';
import * as types from '../../modules/details/actionTypes';

describe('Details reducer', () => {

    it('should return initial state.', () => {
        expect(reducer(undefined, { type: '' }))
        .toEqual({ tileDetails: {} });
    });

    it('should handle action type UPDATE_TILE_DETAILS', () => {
        const newState = reducer({ tileDetails: {} }, { type: types.UPDATE_TILE_DETAILS, payload: { title: 'Edited title' } });
        
        expect(newState).toEqual({ 
            tileDetails: { title: 'Edited title' }
        });
    });

});