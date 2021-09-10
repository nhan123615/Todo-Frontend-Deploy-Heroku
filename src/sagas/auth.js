import { push, replace } from 'connected-react-router';
import jwt from 'jwt-decode';
import { call, delay, put, select } from 'redux-saga/effects';
import {
  loginFail,
  loginSuccess,
  logout,
  refreshTokenFail,
  refreshTokenSuccess,
  registerFail,
  registerSuccess,
  resetPasswordFail,
  resetPasswordSuccess,
  updateNewPasswordFail,
  updateNewPasswordSuccess,
} from '../actions/auth';
import { hideLoading, showLoading } from '../actions/ui';
import {
  login,
  refreshToken,
  register,
  resetPassword,
  updateNewPassword,
} from '../apis/auth';
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
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  if (tokens) {
    const accessTokenInfo = jwt(tokens.accessToken);
    const { exp: expAccessToken } = accessTokenInfo;
    const refreshTokenInfo = jwt(tokens.refreshToken);
    const { exp: expRefreshToken } = refreshTokenInfo;
    const now = Date.now() / 1000;

    if (expRefreshToken < now) {
      yield put(logout());
    }

    if (expAccessToken < now && expRefreshToken > now) {
      yield call(refreshTokenSaga);
    }
  }
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
    }
    yield put(refreshTokenFail(data));
  }
}

// reset password
export function* resetPasswordSaga({ payload }) {
  yield put(showLoading());
  const resp = yield call(resetPassword, payload.data);
  const { status, data } = resp;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(resetPasswordSuccess(data));
    yield put(push(ROUTES_PATH_LOGIN));
  } else {
    yield put(resetPasswordFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

// update new password
export function* updateNewPasswordSaga({ payload }) {
  const { password, tokenType, token } = payload.data;
  yield put(showLoading());
  const resp = yield call(
    updateNewPassword,
    { password },
    {
      headers: {
        Authorization: `${tokenType} ${token}`,
      },
    },
  );
  const { status, data } = resp;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(updateNewPasswordSuccess(data));
  } else {
    yield put(updateNewPasswordFail(data));
  }
  yield delay(500);
  yield put(hideLoading());
  yield put(push(ROUTES_PATH_LOGIN));
}
