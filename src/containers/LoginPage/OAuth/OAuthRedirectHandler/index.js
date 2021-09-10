import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators, compose } from 'redux';
import * as authAction from '../../../../actions/auth';
import {
  ROUTES_PATH_LOGIN,
  USER_ROUTES_PATH_USER_TASK_BOARD,
} from '../../../../consts/routes';
import { getUrlParameter } from '../../../../helpers/getUrlParameter';
import styles from './styles';

class OAuthRedirectHandler extends Component {
  render() {
    const { location } = this.props;
    const accessToken = getUrlParameter('access_token', location);
    const refreshToken = getUrlParameter('refresh_token', location);
    const tokenType = getUrlParameter('tokenType', location);
    const error = getUrlParameter('error', location);

    if (accessToken && refreshToken && tokenType) {
      const { authACtionCreators } = this.props;
      const { loginSuccess } = authACtionCreators;
      loginSuccess({
        accessToken,
        refreshToken,
        tokenType,
      });

      return (
        <Redirect
          to={{
            pathname: USER_ROUTES_PATH_USER_TASK_BOARD,
          }}
        />
      );
    }
    return (
      <div>
        {toast.error(error)}
        <Redirect
          to={{
            pathname: ROUTES_PATH_LOGIN,
          }}
        />
      </div>
    );
  }
}

OAuthRedirectHandler.propTypes = {
  location: propTypes.object,
  authACtionCreators: propTypes.shape({
    loginSuccess: propTypes.func,
  }),
};

const mapDipatchToProps = (dispatch) => ({
  authACtionCreators: bindActionCreators(authAction, dispatch),
});

const withConnect = connect(null, mapDipatchToProps);

export default compose(withStyles(styles), withConnect)(OAuthRedirectHandler);
