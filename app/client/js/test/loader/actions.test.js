import * as types from '../../modules/loader/actionTypes';
import * as actions from '../../modules/loader/actions';

describe('Loader actions', () => {

    it('should return action with type SHOW_LOADER.', () => {
        expect(actions.showLoader())
        .toEqual({ type: types.SHOW_LOADER});
    });

    it('should return action with type HIDE_LOADER.', () => {
        expect(actions.hideLoader())
        .toEqual({ type: types.HIDE_LOADER});
    });
});