import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';
import authReducer from './auth';
import { history } from '../redux/history';

const rootReducer = combineReducers({
  tasks: taskReducer,
  ui: uiReducer,
  modal: modalReducer,
  auth: authReducer,
  form: formReducer,
  router: connectRouter(history),
});

export default rootReducer;
