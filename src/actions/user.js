// @flow
import {
  LOGIN_USER, LOGOUT_USER,
} from '../constants/actiontypes';
import { AuthService } from '../services';
import { startLoading, stopLoading } from './loading';
import { saveTokenToStorage, history, logoutUser } from '../utils/helpers';
import { getResponseData, isSuccess, statusSuccess } from '../utils/api-response';
import type { LoginRequest } from '../types/request';
import type { Dispatch } from '../types/action';

const login = (request: LoginRequest) => (dispatch: Dispatch) => {
  dispatch(startLoading());
  const data = { ...request, type: 'WOOLLAR' };
  AuthService.login(data)
    .then((res) => {
      dispatch(stopLoading());
      if (isSuccess(res) && statusSuccess(res)) {
        // eslint-disable-next-line
        const { meta, token_data } = getResponseData(res);
        dispatch({
          type: LOGIN_USER,
          payload: { user: { ...meta } },
        });
        saveTokenToStorage(token_data);
        history.push('/dashboard/home');
      }
    }, (err) => {
      dispatch(stopLoading());
    });
};

const logout = () => (dispatch: Dispatch) => {
  logoutUser();
  dispatch({
    type: LOGOUT_USER,
    payload: null,
  });
};

export {
  login,
  logout,
};
