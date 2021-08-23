import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../consts';

const url = 'auth';

export const login = (data) =>
  axiosService
    .post(`${API_ENDPOINT}/${url}/login`, data, null)
    .catch((error) => error.response);

export const register = (data) =>
  axiosService
    .post(`${API_ENDPOINT}/${url}/register`, data, null)
    .catch((error) => error.response);

export const refreshToken = (headers) =>
  axiosService
    .post(`${API_ENDPOINT}/${url}/refresh-token`, null, headers)
    .catch((error) => error.response);
