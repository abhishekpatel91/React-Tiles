import { combineReducers } from 'redux';
import homeReducer from './modules/home/reducer';
import detailsReducer from './modules/details/reducer';
import loaderReducer from './modules/loader/reducer';

export default combineReducers({
  home: homeReducer,
  details: detailsReducer,
  loader: loaderReducer,
})
