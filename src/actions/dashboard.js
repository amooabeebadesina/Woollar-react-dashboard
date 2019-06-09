// @flow
import { push } from 'connected-react-router';
import loadingActions  from './loading';
import { DashboardService } from '../services';
import { POPULATE_DASHBOARD } from '../constants/actiontypes';
import type { Dispatch } from '../types/action';
import alertActions from './alert';

const getDashboardData = () => {
  const success = data => ({ type: POPULATE_DASHBOARD, payload: data });

  return (dispatch: Dispatch) => {
    dispatch(loadingActions.startLoading());
    DashboardService.getDashboardData()
      .then((res) => {
        dispatch(loadingActions.stopLoading());
        dispatch(success(res));
        dispatch(push('/dashboard/home'));
      }, (err) => {
        dispatch(loadingActions.stopLoading());
        dispatch(alertActions.errorAlert(err));
      });
  };
};

const dashboardActions = {
  getDashboardData,
};

export default dashboardActions;
