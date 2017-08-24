import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga/saga';
import homeReducer from './modules/home/reducer';
import detailsReducer from './modules/details/reducer';
import loaderReducer from './modules/loader/reducer';

// Components
import App from './modules/app/index';

// promise cross browser fix
if (!window.Promise) {
    window.Promise = Promise;
}

const reducer = combineReducers({
  home: homeReducer,
  details: detailsReducer,
  loader: loaderReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('reactContainer')
);
