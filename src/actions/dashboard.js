// @flow
import { startLoading, stopLoading } from './loading';
import DashboardService from '../services/DashboardService';
import { isSuccess, statusSuccess } from '../utils/api-response';
import { POPULATE_DASHBOARD } from '../constants/actiontypes';

const getDashboardData = () => (dispatch) => {
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

export {
  getDashboardData,
};
