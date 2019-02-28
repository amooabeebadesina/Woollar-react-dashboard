// @flow
import {
  ALERT_SUCCESS,
  ALERT_ERROR,
  ALERT_CLEAR,
} from '../constants/actiontypes';

const success = (message: string) => ({ type: ALERT_SUCCESS, payload: { message } });

const error = (message: string) => ({ type: ALERT_ERROR, payload: { message } });

const clear = () => ({ type: ALERT_CLEAR });

export {
  success,
  error,
  clear,
};
