import { BACK_END_SERVER, FRONT_END_SERVER } from '.';
import { ROUTES_RESET_NEW_PASSWORD } from './routes';

const OAUTH2 = {
  OAUTH2_PATH: `${BACK_END_SERVER}/oauth2/authorization/`,
  REDIRECT_PATH: `${FRONT_END_SERVER}/oauth2/redirect`,
};

export const RESET_PASSWORD_URL = `${FRONT_END_SERVER}${ROUTES_RESET_NEW_PASSWORD}`;
export const LOGIN_WITH_FACEBOOK_PATH = `${OAUTH2.OAUTH2_PATH}facebook?redirect_uri=${OAUTH2.REDIRECT_PATH}`;
export const LOGIN_WITH_GOOGLE_PATH = `${OAUTH2.OAUTH2_PATH}google?redirect_uri=${OAUTH2.REDIRECT_PATH}`;

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const VERIFY_TOKEN = 'VERIFY_TOKEN';

export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAIL = 'REFRESH_TOKEN_FAIL';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const UPDATE_NEW_PASSWORD = 'UPDATE_NEW_PASSWORD';
export const UPDATE_NEW_PASSWORD_SUCCESS = 'UPDATE_NEW_PASSWORD_SUCCESS';
export const UPDATE_NEW_PASSWORD_FAIL = 'UPDATE_NEW_PASSWORD_FAIL';
