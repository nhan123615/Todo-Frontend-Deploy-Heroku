import AdminPage from '../containers/AdminPage';
import Taskboard from '../containers/Taskboard';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import OAuthRedirectHandler from '../containers/LoginPage/OAuth/OAuthRedirectHandler';
import ResetNewPasswordHandler from '../containers/ResetPasswordForm/ResetNewPasswordHandler';

export const USER_ROUTES_PATH_USER = '/user';
export const USER_ROUTES_PATH_USER_TASK_BOARD = '/user/task-board';

export const ROUTES_PATH_LOGIN = '/login';
export const ROUTES_PATH_SIGNUP = '/signup';
export const ROUTES_OAUTH2_REDIRECT = '/oauth2/redirect';
export const ROUTES_RESET_NEW_PASSWORD = '/reset-password';

export const USER_ROUTES = [
  {
    path: USER_ROUTES_PATH_USER,
    name: 'Admin Management',
    exact: true,
    component: AdminPage,
    icon: 'home',
  },
  {
    path: USER_ROUTES_PATH_USER_TASK_BOARD,
    name: 'Tasks Management',
    exact: true,
    component: Taskboard,
    icon: 'edit_note',
  },
];

export const ROUTES = [
  {
    path: ROUTES_PATH_LOGIN,
    name: 'Login',
    exact: false,
    component: LoginPage,
  },

  {
    path: ROUTES_PATH_SIGNUP,
    name: 'Singup',
    exact: false,
    component: SignupPage,
  },

  {
    path: ROUTES_OAUTH2_REDIRECT,
    name: 'Oauth2 Redirect Handler',
    exact: false,
    component: OAuthRedirectHandler,
  },
  {
    path: ROUTES_RESET_NEW_PASSWORD,
    name: 'Reset New Password',
    exact: false,
    component: ResetNewPasswordHandler,
  },
  {
    path: '',
    name: 'Login',
    exact: false,
    component: LoginPage,
  },
];
