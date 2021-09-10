import jwt from 'jwt-decode';
import * as authConsts from '../consts/auth';
import * as toastHelper from '../helpers/toastHelper';

const initialState = {
  tokens: {
    accessToken: null,
    refreshToken: null,
    tokenType: null,
  },

  user: {
    username: null,
    role: null,
    name: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // login

    case authConsts.LOGIN: {
      return {
        ...state,
      };
    }

    case authConsts.LOGIN_SUCCESS: {
      const { data } = action.payload;
      const { accessToken, refreshToken, tokenType } = data;
      const user = jwt(accessToken);
      const { sub, role, name } = user;

      const tokens = {
        accessToken,
        refreshToken,
        tokenType,
      };

      localStorage.setItem('tokens', JSON.stringify(tokens));
      toastHelper.toastSuccess('Login Success!');
      return {
        ...state,
        tokens,
        user: {
          username: sub,
          role,
          name,
        },
      };
    }

    case authConsts.LOGIN_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // logout
    case authConsts.LOGOUT: {
      localStorage.removeItem('tokens');
      return {
        ...state,
        tokens: null,
        user: null,
      };
    }

    // register

    case authConsts.REGISTER: {
      return {
        ...state,
      };
    }

    case authConsts.REGISTER_SUCCESS: {
      toastHelper.toastSuccess('Register Success!');
      return {
        ...state,
      };
    }

    case authConsts.REGISTER_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // refresh token
    case authConsts.REFRESH_TOKEN: {
      return {
        ...state,
      };
    }

    case authConsts.REFRESH_TOKEN_SUCCESS: {
      const { data } = action.payload;
      const { accessToken, refreshToken, tokenType } = data;
      const user = jwt(accessToken);
      const { sub, role, name } = user;

      const tokens = {
        accessToken,
        refreshToken,
        tokenType,
      };

      localStorage.setItem('tokens', JSON.stringify(tokens));
      return {
        ...state,
        tokens,
        user: {
          username: sub,
          role,
          name,
        },
      };
    }

    case authConsts.REFRESH_TOKEN_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // reset password

    case authConsts.RESET_PASSWORD: {
      return {
        ...state,
      };
    }

    case authConsts.RESET_PASSWORD_SUCCESS: {
      toastHelper.toastSuccess(
        'Reset Passwod Success, Please check your Email Address!',
      );
      return {
        ...state,
      };
    }

    case authConsts.RESET_PASSWORD_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    // update new password

    case authConsts.UPDATE_NEW_PASSWORD: {
      return {
        ...state,
      };
    }

    case authConsts.UPDATE_NEW_PASSWORD_SUCCESS: {
      toastHelper.toastSuccess('Update new password success!');
      return {
        ...state,
      };
    }

    case authConsts.UPDATE_NEW_PASSWORD_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
