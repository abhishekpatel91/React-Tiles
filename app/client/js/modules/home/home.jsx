import React from 'react';
import { func, string, object } from 'prop-types';

// Components
import Search from '../../components/search/search';
import Tiles from '../../components/tiles/tiles';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        const { match, updateSearchStr, resetSearchStr, updateFilter } = props;
        if (match && match.params.searchQuery) {
            const query = match.params.searchQuery;
            updateSearchStr(query);
            updateFilter(query)
        } else {
            resetSearchStr();
            updateFilter('');
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

Home.propTypes = {
    match: object,
    updateSearchStr: func,
    resetSearchStr: func,
    updateFilter: func,
    fetchTiles: func,
    searchQuery: string,
};
