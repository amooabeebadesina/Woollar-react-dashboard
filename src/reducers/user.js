// @flow
import {
  LOGIN_USER, LOGOUT_USER,
} from '../constants/actiontypes';
import type { Action } from '../types/action';

const initialState = {
  profile: null,
  loggedIn: false,
};

const userReducer = (state: any = initialState, action: Action) => {
  let newState;
  switch (action.type) {
    case LOGIN_USER:
      newState = {
        ...state,
        profile: action.payload.user,
        loggedIn: true,
      };
      break;
    case LOGOUT_USER:
      newState = {
        ...state,
        profile: null,
        loggedIn: false,
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default userReducer;
