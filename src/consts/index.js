import HomeIcon from '@material-ui/icons/Home';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AdminPage from '../containers/AdminPage';
// eslint-disable-next-line import/no-cycle
import Taskboard from '../containers/Taskboard';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';

// export const API_ENDPOINT = 'http://localhost:3000';
export const API_ENDPOINT = 'https://611251a789c6d00017ac022e.mockapi.io';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Admin Management',
    exact: true,
    component: AdminPage,
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: () => <HomeIcon color="primary" />,
  },
  {
    path: '/',
    name: 'Tasks Management',
    exact: true,
    component: Taskboard,
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: () => <EventNoteIcon color="primary" />,
  },
];

export const ROUTES = [
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: LoginPage,
  },

  {
    path: '/signup',
    name: 'Singup',
    exact: false,
    component: SignupPage,
  },
];
