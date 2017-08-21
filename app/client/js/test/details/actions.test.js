import * as types from '../../modules/details/actionTypes';
import * as actions from '../../modules/details/actions';

describe('Details module actions', () => {

    it('should return action type FETCH_TILE_DETAILS', () => {
        expect(actions.fetchTileDetails(123))
        .toEqual({ type: types.FETCH_TILE_DETAILS, payload: 123 });
    });

    it('should return action type POST_EDITED_TILE', () => {
        expect(actions.postEditedTile({ title: 'Edited title' }))
        .toEqual({ type: types.POST_EDITED_TILE, payload: { title: 'Edited title' } });
    });

});