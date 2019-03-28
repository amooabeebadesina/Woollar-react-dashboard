import axios from 'axios';
import { getTokenFromStorage } from '../utils/helpers';

const ApiService = axios.create({
  baseURL: 'https://woollar.com/api',
  headers: {
    authorization: getTokenFromStorage(),
  },
});

ApiService.interceptors.request.use(req => req);

ApiService.interceptors.response.use(res => res, (err) => {
  switch (err.response.status) {
    case 401:
      if (err.config.url !== `${err.config.baseURL}/login`) {
        // logoutUser();
      }
      break;
    default:
      return err;
  }
  return err;
});

export default ApiService;
