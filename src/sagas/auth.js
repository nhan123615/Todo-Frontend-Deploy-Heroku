import { push, replace } from 'connected-react-router';
import { call, delay, put, select } from 'redux-saga/effects';
import {
  loginFail,
  loginSuccess,
  logout,
  refreshTokenFail,
  refreshTokenSuccess,
  registerFail,
  registerSuccess,
  verifyToken,
} from '../actions/auth';
import { hideLoading, showLoading } from '../actions/ui';
import { login, refreshToken, register } from '../apis/auth';
import { STATUS_CODE } from '../consts';
import {
  ROUTES_PATH_LOGIN,
  USER_ROUTES_PATH_USER_TASK_BOARD,
} from '../consts/routes';

// login
export function* loginSaga({ payload }) {
  const { user } = payload;

  yield put(showLoading());
  const resp = yield call(login, user);
  const { status, data } = resp;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(loginSuccess(data));
    yield put(push(USER_ROUTES_PATH_USER_TASK_BOARD));
  } else {
    yield put(loginFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

// logout
export function* logoutSaga() {
  yield put(replace(ROUTES_PATH_LOGIN));
}

// register

export function* registerSaga({ payload }) {
  const { user } = payload;

  yield put(showLoading());
  const resp = yield call(register, user);
  const { status, data } = resp;

  if (status === STATUS_CODE.CREATED) {
    yield put(registerSuccess(data));
    yield put(push(ROUTES_PATH_LOGIN));
  } else {
    yield put(registerFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

// verify

export function* verifyTokenSaga() {
  const tokens = yield select((state) => state.auth.tokens);
  if (tokens) {
    yield put(verifyToken());
    const isAccessTokenValid = yield select(
      (state) => state.auth.isAccessTokenValid,
    );
    const isRefreshTokenValid = yield select(
      (state) => state.auth.isRefreshTokenValid,
    );

    if (!isAccessTokenValid && isRefreshTokenValid) {
      yield call(refreshTokenSaga);
    } else if (!isAccessTokenValid && !isRefreshTokenValid) {
      yield put(logout());
      return false;
    }
  }
  return true;
}

// refresh token
export function* refreshTokenSaga() {
  const tokenToRefresh = yield select(
    (state) => state.auth.tokens.refreshToken,
  );

  const tokenType = yield select((state) => state.auth.tokens.tokenType);

  if (tokenToRefresh) {
    const resp = yield call(refreshToken, {
      headers: {
        Authorization: `${tokenType} ${tokenToRefresh}`,
      },
    });
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(refreshTokenSuccess(data));
    } else {
      yield put(refreshTokenFail(data));
    }
  }
}
