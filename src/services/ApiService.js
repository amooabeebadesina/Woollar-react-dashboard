import axios from 'axios';
import store from '../store';
import { startLoading, stopLoading } from '../actions/loading';

const ApiService = axios.create({
  baseURL: 'https://woollar.com/api',
});

ApiService.interceptors.request.use((req) => {
  store.dispatch(startLoading());
  return req;
});

ApiService.interceptors.response.use((res) => {
  store.dispatch(stopLoading());
  return res;
}, (err) => {
  store.dispatch(stopLoading());
  switch (err.response.status) {
    case 401:
      if (err.config.url === `${err.config.baseURL}/login`) {
        console.log('unauthorized');
      }
      break;
    default:
  }
  return err;
});

export default ApiService;
