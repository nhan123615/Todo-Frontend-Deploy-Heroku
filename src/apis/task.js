import qs from 'query-string';
import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../consts';

const url = 'tasks';
export const getList = (params = {}) => {
  let queryParams = '';
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = (data) =>
  axiosService.post(`${API_ENDPOINT}/${url}`, data);

export const updateTask = (data, taskId) =>
  axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);

export const deleteTask = (taskId) =>
  axiosService.delete(`${API_ENDPOINT}/${url}/${taskId}`);
