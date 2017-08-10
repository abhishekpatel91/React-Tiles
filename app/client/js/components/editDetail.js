import React from 'react';

export default class TileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            tile: {
                title: '',
                desc: '',
                year: '',
                imdb: ''
            }
        };
        this.cancelEditing = this.cancelEditing.bind(this);
    }
    componentWillReceiveProps(currProps) {
        this.setState({ isModalOpen: currProps.isModalOpen, tile: currProps.tile });
    }
    cancelEditing() {
        this.setState({ isModalOpen: false });
    }
    render() {
        return (
            <div className={this.state.isModalOpen ? 'edit-modal' : 'hide'}>
                <div className="modal-data">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input value={this.state.tile.title} className="form-control" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imdb">IMDB:</label>
                            <input value={this.state.tile.imdb} className="form-control" id="imdb"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input value={this.state.tile.year} className="form-control" id="year"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="desc">Description:</label>
                            <textarea className="form-control" id="desc" value={this.state.tile.desc}></textarea>
                        </div>
                    </form>
                    <div className="text-center">
                        <button type="button" className="btn btn-success">Save</button>
                        <button type="button" className="btn btn-default" onClick={this.cancelEditing}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}