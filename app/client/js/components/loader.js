import React from 'react';

const Loader = (props) => (
    <div className={props.showLoader ? 'loading': ''}>
        <img className="loader" src="/images/loader.gif" alt="Loader" />
    </div>
);

export default Loader;
