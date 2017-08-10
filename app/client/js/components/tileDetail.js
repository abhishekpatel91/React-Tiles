import React from 'react';
import appConfig from '../config';

export default class TileDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tile: {}
        };
    }
    componentDidMount() {
        this.props.makeAjax(appConfig.detailsURL + this.props.match.params.id)
        .then((result) => {
            this.setState({
                tile: result
            });
        });
    }
    render() {
        return (
            <section className="row tile-detail">
                <div className="image-container">
                    <img src={this.state.tile.imgURL} alt={this.state.tile.title} />
                </div>
                <div className="text-container">
                    <div className="detail-group">
                        <span>Name: </span>
                        <span>{this.state.tile.title}</span>
                    </div>
                </div>
            </section>
        );
    }
}