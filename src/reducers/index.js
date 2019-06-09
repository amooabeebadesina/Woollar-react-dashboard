import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { connectRouter } from 'connected-react-router';
import auth from './auth';
import loading from './loading';
import dashboard from './dashboard';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  auth,
  loading,
  dashboard,
  toastr,
});

export default createRootReducer;
