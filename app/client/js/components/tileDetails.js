import React from 'react';
import appConfig from '../config';

// Components
import EditDetails from './editDetail';

export default class TileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: {},
            isModalOpen: false
        };
        this.editDetails = this.editDetails.bind(this);
    }
    componentDidMount() {
        this.props.makeAjax(appConfig.detailsURL + this.props.match.params.id)
        .then((result) => {
            this.setState({
                tile: result
            });
        });
    }
    editDetails() {
        this.setState({
            isModalOpen: true
        });
    }
    render() {
        return (
            <section className="row tile-details">
                <div className="image-container col-xs-12 col-md-4 col-lg-4">
                    <img src={this.state.tile.imgURL} alt={this.state.tile.title} />
                </div>
                <div className="text-container col-xs-12 col-md-8 col-lg-8">
                    <div className="detail-group">
                        <span>Name:</span>
                        <span>{this.state.tile.title}</span>
                    </div>
                    <div className="detail-group">
                        <span>IMDB:</span>
                        <span>{this.state.tile.imdb}</span>
                    </div>
                    <div className="detail-group">
                        <span>Year:</span>
                        <span>{this.state.tile.year}</span>
                    </div>
                    <div className="detail-group">
                        <span>Description:</span>
                        <span>{this.state.tile.desc}</span>
                    </div>
                    <div className="detail-group">
                        <span>Platforms:</span>
                        <span>{this.state.tile.console ? this.state.tile.console.join(', ') : this.state.tile.console}</span>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12 text-center">
                    <button type="button" className="btn btn-warning" onClick={this.editDetails}>Edit</button>
                </div>
                <EditDetails isModalOpen={this.state.isModalOpen} tile={this.state.tile}/>
            </section>
        );
    }
}