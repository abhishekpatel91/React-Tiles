import { createSelector } from 'reselect';

const getFilteredTiles = createSelector([store => store.tiles, store => store.filterBy], (data, query) => {
    query = query.toLowerCase().trim();
    return data.filter((obj) => (new RegExp(query).test(obj.title.toLowerCase())));
});

export default getFilteredTiles;
