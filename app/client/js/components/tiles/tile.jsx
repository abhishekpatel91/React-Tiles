import React from 'react';
import { Link } from 'react-router-dom';

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

export default Tile;