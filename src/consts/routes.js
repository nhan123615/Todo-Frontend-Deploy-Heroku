import AdminPage from '../containers/AdminPage';
import Taskboard from '../containers/Taskboard';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';

export const USER_ROUTES_PATH_USER = '/user';
export const USER_ROUTES_PATH_USER_TASK_BOARD = '/user/task-board';

export const ROUTES_PATH_LOGIN = '/login';
export const ROUTES_PATH_SIGNUP = '/signup';

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
];
