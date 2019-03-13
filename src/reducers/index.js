import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';

const rootReducer = combineReducers({
  user,
  loading,
});

export default rootReducer;
