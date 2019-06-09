import axios from 'axios';
import { getTokenFromStorage } from '../utils/helpers';

const ApiService = axios.create({
  baseURL: 'https://woollar.com/api',
  headers: {
    authorization: getTokenFromStorage(),
  },
});

const handleResponse = (res) => {
  const response = res.data;
  if (response.status === 'success') {
    return response.data;
  }
  return Promise.reject(response.msg);
};

const handleError = err => Promise.reject(err.response.data.msg);

ApiService.interceptors.request.use(req => req);

ApiService.interceptors.response.use(res => handleResponse(res), err => handleError(err));

export default ApiService;
