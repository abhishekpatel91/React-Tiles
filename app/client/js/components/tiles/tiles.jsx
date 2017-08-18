import React from 'react';
import { string, object } from 'prop-types';

// components
import Tile from './tile';

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
