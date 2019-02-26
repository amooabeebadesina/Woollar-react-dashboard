// @flow
import ApiService from './ApiService';
import type { LoginRequest } from '../types/request';

const AuthService = {
  login: (payload: LoginRequest) => ApiService.post('/login', payload),
};

export default AuthService;
