import React from 'react';
import { func, object, shape, arrayOf, string, number } from 'prop-types';

// Components
import EditDetails from './editDetail';

export default class TileDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
        this.openEditWindow = this.openEditWindow.bind(this);
        this.closeEditWindow = this.closeEditWindow.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
    }
    componentDidMount() {
        this.props.fetchTileDetails(this.props.match.params.id);
    }
    openEditWindow() {
        this.setState({ isModalOpen: true });
    }
    closeEditWindow() {
        this.setState({ isModalOpen: false });
    }
    updateDetails(editedTile) {
        // not using set state to avoid calling render two times, redux will take care of it.
        this.state.isModalOpen = false;
        this.props.postEditedTile(editedTile);
    }
    render() {
        return (
            <section className="row tile-details">
                <div className="image-container col-xs-12 col-md-4 col-lg-4">
                    <img src={this.props.tileDetails.imgURL} alt={this.props.tileDetails.title} />
                </div>
                <div className="text-container col-xs-12 col-md-8 col-lg-8">
                    <div className="detail-group clearfix">
                        <span className="detail-key">Name:</span>
                        <span className="detail-value">{this.props.tileDetails.title}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">IMDB:</span>
                        <span className="detail-value">{this.props.tileDetails.imdb}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Year:</span>
                        <span className="detail-value">{this.props.tileDetails.year}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Description:</span>
                        <span className="detail-value">{this.props.tileDetails.desc}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Platforms:</span>
                        <span className="detail-value">{this.props.tileDetails.console ? this.props.tileDetails.console.join(', ') : this.props.tileDetails.console}</span>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12 text-center">
                    <button type="button" className="btn btn-primary" onClick={this.openEditWindow}>Edit</button>
                </div>
                <EditDetails
                    isModalOpen={this.state.isModalOpen}
                    tileDetails={this.props.tileDetails}
                    closeEditWindow={this.closeEditWindow}
                    updateDetails={this.updateDetails}
                />
            </section>
        );
    }
}

TileDetails.propTypes = {
    match: object,
    postEditedTile: func,
    tileDetails: shape({
        console: arrayOf(string),
        desc: string,
        title: string,
        imdb: string,
        year: string,
        id: number
    })
};
