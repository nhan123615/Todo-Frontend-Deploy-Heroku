import { call, delay, put, select } from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskFail,
  addTaskSuccess,
  deleteTaskFail,
  deleteTaskSuccess,
  fetchListTask,
  fetchListTaskFail,
  fetchListTaskSuccess,
  updateTaskFail,
  updateTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from '../actions/ui';
import { addTask, deleteTask, getList, updateTask } from '../apis/task';
import { STATUSES, STATUS_CODE } from '../consts';

export function* fetchListTasks({ payload }) {
  const accessToken = yield select((state) => state.auth.tokens.accessToken);
  if (accessToken) {
    const tokenType = yield select((state) => state.auth.tokens.tokenType);

    yield put(showLoading());
    const { params } = payload;
    const resp = yield call(getList, params, {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    });
    const { status, data } = resp;
    yield delay(500);
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFail(data));
    }
    yield put(hideLoading());
  }
}

export function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({ keyword }));
}

export function* addTaskSaga({ payload }) {
  const accessToken = yield select((state) => state.auth.tokens.accessToken);
  if (accessToken) {
    const tokenType = yield select((state) => state.auth.tokens.tokenType);
    const { title, description } = payload;
    yield put(showLoading());
    const resp = yield call(
      addTask,
      {
        title,
        description,
        status: STATUSES[0].value,
      },
      {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      },
    );

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
}

export function* updateTaskSaga({ payload }) {
  const accessToken = yield select((state) => state.auth.tokens.accessToken);
  if (accessToken) {
    const tokenType = yield select((state) => state.auth.tokens.tokenType);
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
      {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      },
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
}

export function* deleteTaskSaga({ payload }) {
  const accessToken = yield select((state) => state.auth.tokens.accessToken);
  if (accessToken) {
    const tokenType = yield select((state) => state.auth.tokens.tokenType);

    const { id } = payload;
    yield put(showLoading());
    const resp = yield call(deleteTask, id, {
      headers: {
        Authorization: `${tokenType} ${accessToken}`,
      },
    });
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
}
