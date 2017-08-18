import React from 'react';

const Loader = (props) => (
    <div className={props.isLoading ? 'loading': ''}>
        <img className="loader" src="/images/loader.gif" alt="Loader" />
    </div>
);

export default Loader;
