// @flow
import { START_LOADING, STOP_LOADING } from '../constants/actiontypes';
import type { Action } from '../types/action';

const initialState = {
  value: false,
};

const loadingReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        value: true,
      };
    case STOP_LOADING:
      return {
        value: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
