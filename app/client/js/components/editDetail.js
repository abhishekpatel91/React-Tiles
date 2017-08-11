import React from 'react';
import appConfig from '../config';
import { func, shape, string, number } from 'prop-types';

export default class TileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            tile: {
                title: '',
                desc: '',
                year: '',
                imdb: '',
            },
        };
        this.closeEditWindow = this.closeEditWindow.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
        this.handleInpChange = this.handleInpChange.bind(this);
    }
    componentWillReceiveProps(currProps) {
        this.setState({ isModalOpen: currProps.isModalOpen, tile: currProps.tile });
    }
    closeEditWindow() {
        this.setState({ isModalOpen: false });
    }
    updateDetails(event) {
        event.preventDefault();
        this.props.makeAjax(appConfig.editDetailsURL + this.props.tile.id, 'POST', this.state.tile)
        .then((result) => {
            if (result.done) {
                this.props.updateDetails((this.state.tile));
            } else {
                alert('Something went wrong!');
            }
        })
        .catch(() => {
            alert('Problems with the server. Try again later!');
        });
    }
    handleInpChange(event) {
        const newState = Object.assign({}, this.state.tile, {
            [event.target.name]: event.target.value,
        });
        this.setState({tile: newState});
    }
    render() {
        return (
            <div className={this.state.isModalOpen ? 'edit-modal' : 'hide'}>
                <div className="modal-data">
                    <h2>Edit Details</h2>
                    <form onSubmit={this.updateDetails}>
                        <div className="form-group">
                            <label htmlFor="title">Name:</label>
                            <input value={this.state.tile.title} className="form-control" id="title" name="title" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imdb">IMDB:</label>
                            <input value={this.state.tile.imdb} className="form-control" id="imdb" name="imdb" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input value={this.state.tile.year} className="form-control" id="year" name="year" onChange={this.handleInpChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description:</label>
                            <textarea className="form-control" id="desc" value={this.state.tile.desc} name="desc" onChange={this.handleInpChange}></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">Save</button>
                            <button type="button" className="btn btn-default" onClick={this.closeEditWindow}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

TileDetails.propTypes = {
    makeAjax: func,
    updateDetails: func,
    tile: shape({
        title: string,
        desc: string,
        imgURL: string,
        id: number,
    }),
};
