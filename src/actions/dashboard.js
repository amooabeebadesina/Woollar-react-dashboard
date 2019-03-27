// @flow
import { startLoading, stopLoading } from './loading';
import { DashboardService } from '../services';
import { isSuccess, statusSuccess } from '../utils/api-response';
import { POPULATE_DASHBOARD } from '../constants/actiontypes';
import type { Dispatch } from '../types/action';

const getDashboardData = () => (dispatch: Dispatch) => {
  dispatch(startLoading());
  DashboardService.getDashboardData()
    .then((res) => {
      dispatch(stopLoading());
      if (isSuccess(res) && statusSuccess(res)) {
        dispatch({
          type: POPULATE_DASHBOARD,
          payload: res.data.data,
        });
      } else {
        console.log('yee');
      }
    }, (err) => {
      dispatch(stopLoading());
    });
};

/* eslint-disable import/prefer-default-export */
export {
  getDashboardData,
};
