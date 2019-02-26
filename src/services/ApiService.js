import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'http://woollar.com/api',
});

export default ApiService;
