import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const Loader = (props) => (
    <div className={props.isLoading ? 'loading': ''}>
        <img className="loader" src="/images/loader.gif" alt="Loader" />
    </div>
);

const mapStateToProps = (store) => ({ isLoading: store.isLoading });

export default connect(mapStateToProps)(Loader);
