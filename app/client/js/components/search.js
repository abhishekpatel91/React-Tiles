import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { object } from 'prop-types';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.props.updateSearchStr(event.target.value);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/search/${this.props.searchQuery}`);
    }
    render() {
        return (
            <form className="search-form clearfix" onSubmit={this.handleSubmit}>
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
                        value={this.props.searchQuery}
                        onChange={this.handleChange}
                    />
                    <button
                        type="button"
                        className={this.props.searchQuery ? 'btn btn-default cancel' : 'hide'}
                        onClick={this.props.resetSearchStr}
                    >
                        X
                    </button>
                </div>
            </form>
        );
    }
}

Search.propTypes = {
    history: object,
};

export default withRouter((props) => <Search {...props}/>);
