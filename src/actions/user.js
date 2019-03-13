// @flow

import {
  LOGIN_USER, LOGOUT_USER,
} from '../constants/actiontypes';


const login = (user: any) => {
  return { type: LOGIN_USER, payload: { ...user } };
};

const logout = () => ({ type: LOGOUT_USER });

export {
  login,
  logout,
};
