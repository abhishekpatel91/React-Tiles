import * as saga from '../../saga/saga';


jest.unmock('../../utility/global');
import * as global from '../../utility/global';

describe('Saga', () => {

    global.makeAjax = jest.fn(() => [{title: 'Fifa 18'}]);

    it('should fetch tiles and dispatch action of type updateTiles', () => {
        const itr = saga.fetchTiles({});

        let value = itr.next().value;
        expect(value).toEqual([{title: 'Fifa 18'}]);

        value = itr.next().value;
        expect(value.PUT.action.type).toEqual('updateTiles');        
    });

    it('should fetch tile details and dispatch action of type updateTileDetails', () => {
        const itr = saga.fetchTileDetails({});

        let value = itr.next().value;
        expect(value).toEqual([{title: 'Fifa 18'}]);

        value = itr.next().value;
        expect(value.PUT.action.type).toEqual('updateTileDetails');        
    });

    it('should post edited tile details and dispatch action of type updateTileDetails', () => {
        const itr = saga.postEditedTile({ payload: ''});

        let value = itr.next().value;
        expect(value).toEqual([{title: 'Fifa 18'}]);

        value = itr.next().value;
        expect(value.PUT.action.type).toEqual('updateTileDetails');        
    });

    it('should dispatch loader actions', () => {
        const itr = saga.doWithLoader(function* () {
            yield true;
        }, {});

        let value = itr.next().value;
        expect(value.PUT.action.type).toEqual('showLoader');

        value = itr.next().value;
        expect(value).toBeTruthy();

        value = itr.next().value;
        expect(value.PUT.action.type).toEqual('hideLoader');

    });

});