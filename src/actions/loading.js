// @flow

import { START_LOADING, STOP_LOADING } from '../constants/actiontypes';

const startLoading = () => ({ type: START_LOADING });
const stopLoading = () => ({ type: STOP_LOADING });

export {
  startLoading,
  stopLoading,
};
