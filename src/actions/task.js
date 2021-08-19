import * as taskConsts from '../consts/task';

export const fetchListTask = (params = {}) => ({
  type: taskConsts.FETCH_TASK,
  payload: { params },
});

export const fetchListTaskSuccess = (data) => ({
  type: taskConsts.FETCH_TASK_SUCCESS,
  payload: { data },
});

export const fetchListTaskFail = (error) => ({
  type: taskConsts.FETCH_TASK_FAIL,
  payload: { error },
});

export const filterTask = (keyword) => ({
  type: taskConsts.FILTER_TASK,
  payload: { keyword },
});

export const filterTaskSuccess = (data) => ({
  type: taskConsts.FILTER_TASK_SUCCESS,
  payload: { data },
});

// add task

export const addTask = (task) => ({
  type: taskConsts.ADD_TASK,
  payload: {
    title: task.title,
    description: task.description,
  },
});

export const addTaskSuccess = (data) => ({
  type: taskConsts.ADD_TASK_SUCCESS,
  payload: { data },
});

export const addTaskFail = (error) => ({
  type: taskConsts.ADD_TASK_FAIL,
  payload: { error },
});

// edit task

export const setTaskEditing = (task) => ({
  type: taskConsts.SET_TASK_EDITING,
  payload: { task },
});

// update task

export const updateTask = (task) => ({
  type: taskConsts.UPDATE_TASK,
  payload: {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
  },
});

export const updateTaskSuccess = (data) => ({
  type: taskConsts.UPDATE_TASK_SUCCESS,
  payload: { data },
});

export const updateTaskFail = (error) => ({
  type: taskConsts.UPDATE_TASK_FAIL,
  payload: { error },
});

// delete task

export const deleteTask = (task) => ({
  type: taskConsts.DELETE_TASK,
  payload: {
    id: task.id,
  },
});

export const deleteTaskSuccess = (data) => ({
  type: taskConsts.DELETE_TASK_SUCCESS,
  payload: { data },
});

export const deleteTaskFail = (error) => ({
  type: taskConsts.DELETE_TASK_FAIL,
  payload: { error },
});
