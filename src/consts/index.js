// export const FRONT_END_SERVER = 'http://localhost:3000';
// export const FRONT_END_SERVER = 'https://nhanle96todoapp.000webhostapp.com';
export const FRONT_END_SERVER =
  'https://todo-deploy-fronten-react.herokuapp.com';
// export const BACK_END_SERVER = 'http://localhost:8080';
export const BACK_END_SERVER =
  'https://todo-deploy-backend-springboot.herokuapp.com';

export const API_ENDPOINT = `${BACK_END_SERVER}/api`;
// export const API_ENDPOINT = 'https://611251a789c6d00017ac022e.mockapi.io';

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
