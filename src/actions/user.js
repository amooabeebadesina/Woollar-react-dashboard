// @flow
import {
  LOGIN_USER, LOGOUT_USER,
} from '../constants/actiontypes';
import { AuthService } from '../services';
import { startLoading, stopLoading } from './loading';
import { saveTokenToStorage, history, logoutUser } from '../utils/helpers';

const login = (request: any) => (dispatch) => {
  dispatch(startLoading());
  const data = { ...request, type: 'WOOLLAR' };
  AuthService.login(data)
    .then((res) => {
      dispatch(stopLoading());
      if (res && res.data && res.data.data) {
        // eslint-disable-next-line
        const { meta, token_data } = res.data.data;
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

const logout = () => (dispatch) => {
  logoutUser();
  dispatch({
    type: LOGOUT_USER,
  });
};

export {
  login,
  logout,
};
