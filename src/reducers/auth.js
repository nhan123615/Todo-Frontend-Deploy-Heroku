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
  },

  isAccessTokenValid: false,
  isRefreshTokenValid: false,
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
      const { sub, role } = user;

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
        },
        isAccessTokenValid: true,
        isRefreshTokenValid: true,
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
        isAccessTokenValid: false,
        isRefreshTokenValid: false,
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
      const { sub, role } = user;

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
        },
        isAccessTokenValid: true,
        isRefreshTokenValid: true,
      };
    }

    case authConsts.REFRESH_TOKEN_FAIL: {
      const { error } = action.payload;
      toastHelper.toastError(error);
      return {
        ...state,
        isAccessTokenValid: false,
        isRefreshTokenValid: false,
      };
    }
    // verify token

    case authConsts.VERIFY_TOKEN: {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens) {
        const accessTokenInfo = jwt(tokens.accessToken);
        const { sub, role, exp: expAccessToken } = accessTokenInfo;
        const refreshTokenInfo = jwt(tokens.refreshToken);
        const { exp: expRefreshToken } = refreshTokenInfo;
        const now = Date.now() / 1000;
        const user = {
          username: sub,
          role,
        };
        let isAccessTokenValid = false;
        let isRefreshTokenValid = false;

        if (expAccessToken > now) {
          isAccessTokenValid = true;
          isRefreshTokenValid = true;
        } else if (expAccessToken < now && expRefreshToken > now) {
          isRefreshTokenValid = true;
        }
        return {
          ...state,
          tokens,
          user,
          isAccessTokenValid,
          isRefreshTokenValid,
        };
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default reducer;
