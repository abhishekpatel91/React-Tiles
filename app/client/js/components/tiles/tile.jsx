import React from 'react';
import { Link } from 'react-router-dom';
import { string, number } from 'prop-types';

const Tile = (props) => (
    <article className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
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

Tile.propTypes = {
    id: number,
    imgURL: string,
    title: string,
};

export default Tile;