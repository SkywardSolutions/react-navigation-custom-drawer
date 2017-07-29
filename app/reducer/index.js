import { combineReducers } from 'redux';
import * as navReducer from './navigation';

export default combineReducers(Object.assign(
  navReducer,
));
