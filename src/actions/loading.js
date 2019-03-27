// @flow

import { START_LOADING, STOP_LOADING } from '../constants/actiontypes';

const startLoading = () => ({ type: START_LOADING, payload: null });
const stopLoading = () => ({ type: STOP_LOADING, payload: null });

export {
  startLoading,
  stopLoading,
};
