import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../consts';

const url = 'tasks';
export const getList = (params = {}, headers) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService
    .get(`${API_ENDPOINT}/${url}${queryParams}`, headers)
    .catch((error) => error.response);
};

export const addTask = (data, headers) =>
  axiosService
    .post(`${API_ENDPOINT}/${url}`, data, headers)
    .catch((error) => error.response);

export const updateTask = (data, taskId, headers) =>
  axiosService
    .put(`${API_ENDPOINT}/${url}/${taskId}`, data, headers)
    .catch((error) => error.response);

export const deleteTask = (taskId, headers) =>
  axiosService
    .delete(`${API_ENDPOINT}/${url}/${taskId}`, headers)
    .catch((error) => error.response);
