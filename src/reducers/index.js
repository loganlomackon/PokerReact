import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  loginUrl: LoginReducer
});

export default rootReducer;
