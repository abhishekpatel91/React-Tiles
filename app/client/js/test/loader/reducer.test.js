import reducer from '../../modules/loader/reducer';
import * as types from '../../modules/loader/actionTypes';

describe('Loader Reducer', () => {
    
    it('should handle action type SHOW_LOADER.', () => {
        expect(reducer({ isLoading: false }, { type: types.SHOW_LOADER }))
        .toEqual({ isLoading: true });
    });

    it('should handle action type HIDE_LOADER.', () => {
        expect(reducer({ isLoading: false }, { type: types.HIDE_LOADER }))
        .toEqual({ isLoading: false });
    });

    it('should return initial state.', () => {
        expect(reducer(undefined, { type: '' }))
        .toEqual({ isLoading: false });
    });
    
});