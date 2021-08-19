import { call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import * as taskActions from '../consts/task';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../consts';
import {
  fetchListTaskSuccess,
  fetchListTaskFail,
  addTaskSuccess,
  addTaskFail,
  fetchListTask,
  updateTaskSuccess,
  updateTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
} from '../actions/task';
import { hideModal } from '../actions/modal';
import { showLoading, hideLoading } from '../actions/ui';

function* fetchListTasks({ payload }) {
  yield put(showLoading());
  const { params } = payload;
  const resp = yield call(getList, params);
  const { status, data } = resp;
  yield delay(500);
  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchListTaskSuccess(data));
  } else {
    yield put(fetchListTaskFail(data));
  }
  yield put(hideLoading());
}

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({ q: keyword }));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });

  const { status, data } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
  const { id, title, description, status } = payload;
  yield put(showLoading());
  const resp = yield call(
    updateTask,
    {
      title,
      description,
      status,
    },
    id,
  );
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(showLoading());
  const resp = yield call(deleteTask, id);
  const { status: statusCode, data } = resp;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(deleteTaskSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTaskFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

function* rootSaga() {
  yield takeLatest(taskActions.FETCH_TASK, fetchListTasks);
  yield takeLatest(taskActions.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskActions.ADD_TASK, addTaskSaga);
  yield takeLatest(taskActions.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskActions.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
