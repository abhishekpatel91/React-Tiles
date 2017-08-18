import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// Components
import Search from './search';
import Tiles from './tiles';

let filterBy = '';

class Home extends React.Component {
    componentWillMount() {
        const { match, updateSearchStr, resetSearchStr } = this.props;
        if (match && match.params.searchQuery) {
            filterBy = match.params.searchQuery;
            updateSearchStr(filterBy);
        } else {
            filterBy = '';
            resetSearchStr();
        }
    }
    componentDidMount() {
        this.props.fetchTiles();
    }
    render() {
        return (
            <div>
                <Search
                    searchQuery={this.props.searchQuery}
                    updateSearchStr={this.props.updateSearchStr}
                    resetSearchStr={this.props.resetSearchStr}
                />
                <Tiles
                    tiles={this.props.tiles}
                />
            </div>
        );
    }
}

const filteredTile = (data, query) => {
    query = query.toLowerCase().trim();
    return data.filter((obj) => (new RegExp(query).test(obj.title.toLowerCase())));
};

const mapStateToProps = (store) => ({
    tiles: filteredTile(store.tiles, filterBy),
    searchQuery: store.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTiles: () => dispatch(actions.fetchTiles()),
    updateSearchStr: (value) => dispatch(actions.updateSearchStr(value)),
    resetSearchStr: () => dispatch(actions.resetSearchStr()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
