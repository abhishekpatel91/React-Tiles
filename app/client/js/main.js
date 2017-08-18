import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import saga from './saga';

// Components
import App from './modules/app/index';

// promise cross browser fix
if (!window.Promise) {
    window.Promise = Promise;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('reactContainer')
);
