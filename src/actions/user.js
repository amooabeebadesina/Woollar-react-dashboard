// @flow

import type { LoginRequest } from '../types/request';
import { AuthService } from '../services';
import {
  LOGIN_USER, LOGOUT_USER,
} from '../constants/actiontypes';
import type { JSONResponse } from '../types/response';

const login = (data: LoginRequest) => (dispatch) => {
  AuthService.login(data)
    .then((res: JSONResponse) => {
      this.setState({ _loading: false });
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
};

const loginSuccess = (user: any) => ({ type: LOGIN_USER, payload: { user } });

const logout = () => ({
  type: LOGOUT_USER,
});

export {
  login,
  logout,
};
