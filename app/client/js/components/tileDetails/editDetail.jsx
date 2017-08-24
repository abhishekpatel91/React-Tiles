import React from 'react';
import { object } from 'prop-types';

export default class TileDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tileDetails: {
                id: '',
                title: '',
                imdb: '',
                year: '',
                desc: '',
            },
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInpChange = this.handleInpChange.bind(this);
    }
    componentWillReceiveProps(currProps) {
        this.setState({ tileDetails: currProps.tileDetails });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.updateDetails(this.state.tileDetails);
    }
    handleInpChange(event) {
        const newState = Object.assign({}, this.state.tileDetails, {
            [event.target.name]: event.target.value,
        });
        this.setState({tileDetails: newState});
    }
    render() {
        return (
            <div className={this.props.isModalOpen ? 'edit-modal' : 'hide'}>
                <div className="modal-data">
                    <h2>Edit Details</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Name:</label>
                            <input value={this.state.tileDetails.title} className="form-control" id="title" name="title" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imdb">IMDB:</label>
                            <input value={this.state.tileDetails.imdb} className="form-control" id="imdb" name="imdb" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input value={this.state.tileDetails.year} className="form-control" id="year" name="year" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description:</label>
                            <textarea className="form-control" id="desc" value={this.state.tileDetails.desc} name="desc" onChange={this.handleInpChange}></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="button" className="btn btn-default" onClick={this.props.closeEditWindow}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

TileDetails.propTypes = {
    tileDetails: object,
};
