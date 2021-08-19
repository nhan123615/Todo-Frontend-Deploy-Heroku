import * as taskConsts from '../consts/task';
import * as toastHelper from '../helpers/toastHelper';

const initialState = {
  listTasks: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch task
    case taskConsts.FETCH_TASK: {
      return {
        ...state,
        listTasks: [],
      };
    }

    case taskConsts.FETCH_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data,
      };
    }

    case taskConsts.FETCH_TASK_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
        listTasks: [],
      };
    }
    // filter task
    case taskConsts.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data,
      };
    }

    // add task

    case taskConsts.ADD_TASK: {
      return {
        ...state,
      };
    }

    case taskConsts.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      toastHelper.toastSuccess('Add New Task Success!');
      return {
        ...state,
        listTasks: [data].concat(state.listTasks),
      };
    }

    case taskConsts.ADD_TASK_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // edit task

    case taskConsts.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    }

    // update task

    case taskConsts.UPDATE_TASK: {
      return {
        ...state,
      };
    }

    case taskConsts.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTasks } = state;
      const index = listTasks.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listTasks.slice(0, index),
          data,
          ...listTasks.slice(index + 1),
        ];
        toastHelper.toastSuccess('Update Task Success!');

        return {
          ...state,
          listTasks: newList,
        };
      }
      return {
        ...state,
      };
    }

    case taskConsts.UPDATE_TASK_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // delete task

    case taskConsts.DELETE_TASK: {
      return {
        ...state,
      };
    }

    case taskConsts.DELETE_TASK_SUCCESS: {
      const { data: taskId } = action.payload;
      toastHelper.toastSuccess('Delete Task Success!');
      return {
        ...state,
        listTasks: state.listTasks.filter((item) => item.id !== taskId),
      };
    }

    case taskConsts.DELETE_TASK_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default reducer;
