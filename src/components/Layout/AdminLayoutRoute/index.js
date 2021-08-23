import { withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { compose } from 'redux';
import DashBoard from '../../../components/DashBoard';
import { ROUTES_PATH_LOGIN } from '../../../consts/routes';
import styles from './styles';

class AdminLayoutRoute extends Component {
  renderAdminRoutes = () => {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...remainProps}
        render={(routeProps) => (
          <DashBoard
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...remainProps}
          >
            <YourComponent
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...routeProps}
            />
          </DashBoard>
        )}
      />
    );
  };

  redirectToLogin = () => (
    <Redirect
      to={{
        pathname: ROUTES_PATH_LOGIN,
      }}
    />
  );

  render() {
    const { auth } = this.props;
    return auth.user.username
      ? this.renderAdminRoutes()
      : this.redirectToLogin();
  }
}

AdminLayoutRoute.propTypes = {
  path: propTypes.string,
  name: propTypes.string,
  component: propTypes.object,
  exact: propTypes.bool,
  auth: propTypes.object,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(AdminLayoutRoute);
