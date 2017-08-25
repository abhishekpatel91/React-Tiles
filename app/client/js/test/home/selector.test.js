import getFilteredTiles from '../../modules/home/selector';

describe('Filter Selector', () => {
    const data = [{ title: 'The Withcer 3' }, { title: 'Fifa 18' }, { title: 'Injustice 2' }];
    
    it('should filter the data according to the query', () => {
        expect(getFilteredTiles({ tiles: data, filterBy: 'fifa' })).toEqual([{ title: 'Fifa 18' }]);
        expect(getFilteredTiles({ tiles: data, filterBy: 'With' })).toEqual([{ title: 'The Withcer 3' }]);
        expect(getFilteredTiles({ tiles: data, filterBy: 'xyz' })).toEqual([]);
        expect(getFilteredTiles({ tiles: data, filterBy: '' })).toEqual([{ title: 'The Withcer 3' }, { title: 'Fifa 18' }, { title: 'Injustice 2' }]);
    })

});