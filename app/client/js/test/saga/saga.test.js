import saga from '../../saga/saga';

describe('Saga', () => {
    const itr = saga({ type: 'fetchTiles'});
    itr.next();
    it('test', () => {
        expect(true).toEqual(true);
    });

});