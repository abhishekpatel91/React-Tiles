import React from 'react';
import { bool } from 'prop-types';

const Loader = (props) => (
    <div className={props.isLoading ? 'loading': ''}>
        <img className="loader" src="/images/loader.gif" alt="Loader" />
    </div>
);

Loader.propTypes = { isLoading: bool };

export default Loader;
