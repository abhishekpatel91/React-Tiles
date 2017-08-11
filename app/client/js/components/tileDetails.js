import React from 'react';
import appConfig from '../config';
import { func, object } from 'prop-types';

// Components
import EditDetails from './editDetail';

export default class TileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: {},
            isModalOpen: false,
        };
        this.openEditWindow = this.openEditWindow.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
    }
    componentDidMount() {
        this.props.makeAjax(appConfig.detailsURL + this.props.match.params.id)
        .then((result) => {
            this.setState({ tile: result });
        })
        .catch(() => {
            alert('Problems with the server. Try again later!');
        });
    }
    openEditWindow() {
        this.setState({ isModalOpen: true });
    }
    updateDetails(detailObj) {
        this.setState({
            tile: detailObj,
            isModalOpen: false,
        });
    }
    render() {
        return (
            <section className="row tile-details">
                <div className="image-container col-xs-12 col-md-4 col-lg-4">
                    <img src={this.state.tile.imgURL} alt={this.state.tile.title} />
                </div>
                <div className="text-container col-xs-12 col-md-8 col-lg-8">
                    <div className="detail-group clearfix">
                        <span className="detail-key">Name:</span>
                        <span className="detail-value">{this.state.tile.title}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">IMDB:</span>
                        <span className="detail-value">{this.state.tile.imdb}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Year:</span>
                        <span className="detail-value">{this.state.tile.year}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Description:</span>
                        <span className="detail-value">{this.state.tile.desc}</span>
                    </div>
                    <div className="detail-group clearfix">
                        <span className="detail-key">Platforms:</span>
                        <span className="detail-value">{this.state.tile.console ? this.state.tile.console.join(', ') : this.state.tile.console}</span>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12 text-center">
                    <button type="button" className="btn btn-primary" onClick={this.openEditWindow}>Edit</button>
                </div>
                <EditDetails
                    isModalOpen={this.state.isModalOpen}
                    tile={this.state.tile}
                    makeAjax={this.props.makeAjax}
                    updateDetails={this.updateDetails}
                />
            </section>
        );
    }
}

TileDetails.propTypes = {
    makeAjax: func,
    match: object,
};
