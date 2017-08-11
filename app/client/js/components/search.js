import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { object } from 'prop-types';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchStr: '' };
        this.handleInpChng = this.handleInpChng.bind(this);
        this.resetSearchStr = this.resetSearchStr.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
    }
    componentWillMount() {
        const { match } = this.props;
        if (match && match.params.searchQuery) {
            this.setState({ searchStr:  match.params.searchQuery });
        }
    }
    handleInpChng(event) {
        this.setState({ searchStr: event.target.value });
    }
    resetSearchStr() {
        this.setState({ searchStr: '' });
    }
    submitSearch(event) {
        this.props.history.push(`/search/${this.state.searchStr}`);
    }
    render() {
        return (
            <form className="search-form clearfix" onSubmit={this.submitSearch}>
                <div className="form-group">
                    <button type="submit" className="btn btn-success">Search</button>
                </div>
                <div className="form-group">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input
                        type="text"
                        placeholder="Search Games"
                        autoComplete="off"
                        id="search"
                        name="search"
                        className="form-control"
                        value={this.state.searchStr}
                        onChange={this.handleInpChng}
                    />
                    <button type="button" className={this.state.searchStr ? 'btn btn-default cancel' : 'hide'} onClick={this.resetSearchStr}>X</button>
                </div>
            </form>
        );
    }
}

Search.propTypes = {
    history: object,
};

export default withRouter((props) => <Search {...props}/>);
