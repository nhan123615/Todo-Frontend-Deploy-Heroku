import * as authConsts from '../consts/auth';

// login

export const login = (user) => ({
  type: authConsts.LOGIN,
  payload: { user },
});

export const loginSuccess = (data) => ({
  type: authConsts.LOGIN_SUCCESS,
  payload: { data },
});

export const loginFail = (error) => ({
  type: authConsts.LOGIN_FAIL,
  payload: { error },
});

// logout
export const logout = () => ({
  type: authConsts.LOGOUT,
});

// register
export const register = (user) => ({
  type: authConsts.REGISTER,
  payload: { user },
});

export const registerSuccess = (data) => ({
  type: authConsts.REGISTER_SUCCESS,
  payload: { data },
});

export const registerFail = (error) => ({
  type: authConsts.REGISTER_FAIL,
  payload: { error },
});

// verify token

export const verifyToken = () => ({
  type: authConsts.VERIFY_TOKEN,
});

// refresh token
export const refreshToken = () => ({
  type: authConsts.REFRESH_TOKEN,
});

export const refreshTokenSuccess = (data) => ({
  type: authConsts.REFRESH_TOKEN_SUCCESS,
  payload: { data },
});

export const refreshTokenFail = (error) => ({
  type: authConsts.REFRESH_TOKEN_FAIL,
  payload: { error },
});

// reset password
export const resetPassword = (data) => ({
  type: authConsts.RESET_PASSWORD,
  payload: { data },
});

export const resetPasswordSuccess = (data) => ({
  type: authConsts.RESET_PASSWORD_SUCCESS,
  payload: { data },
});

export const resetPasswordFail = (error) => ({
  type: authConsts.RESET_PASSWORD_FAIL,
  payload: { error },
});

// update new password
export const updateNewPassword = (data) => ({
  type: authConsts.UPDATE_NEW_PASSWORD,
  payload: { data },
});

export const updateNewPasswordSuccess = (data) => ({
  type: authConsts.UPDATE_NEW_PASSWORD_SUCCESS,
  payload: { data },
});

export const updateNewPasswordFail = (error) => ({
  type: authConsts.UPDATE_NEW_PASSWORD_FAIL,
  payload: { error },
});
