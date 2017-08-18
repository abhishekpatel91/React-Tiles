import { connect } from 'react-redux';
import * as actions from './actions';
import Home from './home';

const filteredTile = (data, query) => {
    query = query.toLowerCase().trim();
    return data.filter((obj) => (new RegExp(query).test(obj.title.toLowerCase())));
};

const mapStateToProps = (store) => ({
    tiles: filteredTile(store.home.tiles, store.home.filterBy),
    searchQuery: store.home.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTiles: () => dispatch(actions.fetchTiles()),
    updateSearchStr: (value) => dispatch(actions.updateSearchStr(value)),
    resetSearchStr: () => dispatch(actions.resetSearchStr()),
    updateFilter: (value) => dispatch(actions.updateFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
