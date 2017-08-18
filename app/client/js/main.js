import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import tilesReducer from './reducers/tilesReducer';
import tilesSaga from './saga/tilesSaga';

// Components
import App from './components/app';

// promise cross browser fix
if (!window.Promise) {
    window.Promise = Promise;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(tilesReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(tilesSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('reactContainer')
);
