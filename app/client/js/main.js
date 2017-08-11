import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill'; 

// Components
import Container from './components/container';

// promise cross browser fix
if (!window.Promise) {
    window.Promise = Promise;
}

ReactDOM.render(<Container/>, document.getElementById('reactContainer'));
