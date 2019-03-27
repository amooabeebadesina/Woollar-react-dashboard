import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  user,
  loading,
  dashboard,
});

export default rootReducer;
