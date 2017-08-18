import React from 'react';
import { Link } from 'react-router-dom';
import appConfig from '../config';
import { func, string, object } from 'prop-types';

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
    render() {
        const results = this.props.tiles.length ? (this.props.tiles.map((data) => <Tile key={data.id} {...data}/>)) : (<h2 className="text-center">No Results Found</h2>);
        return (
            <section className="row tiles">
                {results}
            </section>
        );
    }
}

Tiles.propTypes = {
    match: object,
    imgURL: string,
    title: string,
};
