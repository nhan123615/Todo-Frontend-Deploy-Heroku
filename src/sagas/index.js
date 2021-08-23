import { fork, takeEvery, takeLatest } from 'redux-saga/effects';
import * as authActions from '../consts/auth';
import * as taskActions from '../consts/task';
import * as taskService from './task';
import * as authService from './auth';

function* rootSaga() {
  // authenticate
  yield fork(authService.verifyTokenSaga);
  yield takeLatest(authActions.LOGIN, authService.loginSaga);
  yield takeLatest(authActions.LOGOUT, authService.logoutSaga);
  yield takeLatest(authActions.REGISTER, authService.registerSaga);

  // tasks
  yield takeLatest(taskActions.FETCH_TASK, taskService.fetchListTasks);
  yield takeLatest(taskActions.FILTER_TASK, taskService.filterTaskSaga);
  yield takeEvery(taskActions.ADD_TASK, taskService.addTaskSaga);
  yield takeLatest(taskActions.UPDATE_TASK, taskService.updateTaskSaga);
  yield takeLatest(taskActions.DELETE_TASK, taskService.deleteTaskSaga);
}

export default rootSaga;
