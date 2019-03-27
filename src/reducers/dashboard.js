// @flow
import {
  POPULATE_DASHBOARD,
} from '../constants/actiontypes';
import type { Action } from '../types/action';

const initialState = {};

const dashboardReducer = (state: any = initialState, action: Action) => {
  let newState;
  switch (action.type) {
    case POPULATE_DASHBOARD:
      newState = {
        ...action.payload,
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default dashboardReducer;
