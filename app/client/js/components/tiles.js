import React from 'react';
import { Link } from 'react-router-dom';
import appConfig from '../config';

const Tile = (props) => (
    <article className="col-xs-6 col-md-4 col-lg-3">
        <Link to={`/detail/${props.id}`}>
            <div className="image-container">
                <img src={props.imgURL} alt={props.title} />
            </div>
            <div className="text-container">
                <span>{props.title}</span>
            </div>
        </Link>
    </article>
);

export default class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tilesData: [] };
    }
    filterResults(data, query) {
        query = query.toLowerCase().trim();
        return data.filter((obj) => (new RegExp(query).test(obj.title.toLowerCase())));
    }
    componentDidMount() {
        const { match } = this.props;
        this.props.makeAjax(appConfig.tilesURL)
        .then((result) => {
            if (match && match.params.searchQuery) {
                this.setState({ tilesData: this.filterResults(result, match.params.searchQuery) });
            } else {
                this.setState({ tilesData: result });
            }
        });
    }
    render() {
        return (
            <section className="row tiles">
                {this.state.tilesData.map((data) => <Tile key={data.id} {...data}/>)}
            </section>
        );
    }
}
