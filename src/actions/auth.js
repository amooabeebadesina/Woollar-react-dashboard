// @flow
import { push } from 'connected-react-router';
import { LOGIN_SUCCESS, LOGOUT_USER } from '../constants/actiontypes';
import { AuthService } from '../services';
import { saveTokenToStorage, logoutUser } from '../utils/helpers';
import type { LoginRequest } from '../types/request';
import type { Dispatch } from '../types/action';
import alertActions from './alert';
import loadingActions from './loading';

const login = (request: LoginRequest) => {
  const success = data => ({ type: LOGIN_SUCCESS, payload: { data } });

  return (dispatch: Dispatch) => {
    dispatch(loadingActions.startLoading());
    const data = {
      ...request,
      type: 'WOOLLAR',
    };
    AuthService.login(data)
      .then((res) => {
        const { meta } = res;
        dispatch(loadingActions.stopLoading());
        saveTokenToStorage(res);
        dispatch(alertActions.successAlert('Login successful'));
        dispatch(success(meta));
        dispatch(push('/dashboard/home'));
      }, (err) => {
        dispatch(loadingActions.stopLoading());
        dispatch(alertActions.errorAlert(err));
      });
  };
};

const logout = () => (dispatch: Dispatch) => {
  logoutUser();
  dispatch({ type: LOGOUT_USER, payload: null });
  dispatch(push('/login'));
};

const authActions = {
  login,
  logout,
};

export default authActions;
