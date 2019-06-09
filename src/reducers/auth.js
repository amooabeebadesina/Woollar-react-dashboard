// @flow
import {
  LOGIN_SUCCESS, LOGOUT_USER,
} from '../constants/actiontypes';
import type { Action } from '../types/action';

const initialState = {
  user: null,
};

const authReducer = (state: any = initialState, action: Action) => {
  let newState;
  switch (action.type) {
    case LOGIN_SUCCESS:
      newState = {
        ...state,
        user: action.payload.data,
      };
      break;
    case LOGOUT_USER:
      newState = {
        ...state,
        user: null,
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default authReducer;
