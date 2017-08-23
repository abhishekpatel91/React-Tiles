import { connect } from 'react-redux';
import * as actions from './actions';
import getFilteredTiles from './selector';
import Home from './home';

const filteredTile = (data, query) => {
    query = query.toLowerCase().trim();
    return data.filter((obj) => (new RegExp(query).test(obj.title.toLowerCase())));
};

const mapStateToProps = (store) => ({
    tiles: getFilteredTiles(store.home),
    searchQuery: store.home.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTiles: () => dispatch(actions.fetchTiles()),
    updateSearchStr: (value) => dispatch(actions.updateSearchStr(value)),
    resetSearchStr: () => dispatch(actions.resetSearchStr()),
    updateFilter: (value) => dispatch(actions.updateFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
