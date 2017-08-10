import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
            this.setState({ searchStr:  match.params.searchQuery })
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
            <form className="search-form" onSubmit={this.submitSearch}>
                <div className="form-group">
                    <label htmlFor="search" className="sr-only">Search</label>
                    <input
                        type="text"
                        placeholder="Search"
                        autoFocus
                        id="search"
                        name="search"
                        className="form-control"
                        value={this.state.searchStr}
                        onChange={this.handleInpChng}
                    />
                    <button type="button" className={this.state.searchStr ? 'btn btn-default' : 'hide'} onClick={this.resetSearchStr}>X</button>
                    <button type="submit" className="btn btn-success">Search</button>
                </div>
            </form>
        );
    }
}

export default withRouter((props) => <Search {...props}/>)