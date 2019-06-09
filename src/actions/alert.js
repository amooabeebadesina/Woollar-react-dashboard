// @flow
import {
  ALERT_SUCCESS,
  ALERT_ERROR,
} from '../constants/actiontypes';

const successAlert = (message: string) => ({ type: ALERT_SUCCESS, payload: { message } });

const errorAlert = (message: string) => ({ type: ALERT_ERROR, payload: { message } });

const alertActions = {
  successAlert,
  errorAlert,
};

export default alertActions;
