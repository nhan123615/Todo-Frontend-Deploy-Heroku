import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import propTypes from 'prop-types';
import DashBoard from '../../../components/DashBoard';
import styles from './styles';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...remainProps}
        render={(routeProps) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <DashBoard {...remainProps}>
            <YourComponent
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...routeProps}
            />
          </DashBoard>
        )}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: propTypes.string,
  name: propTypes.string,
  component: propTypes.object,
  exact: propTypes.bool,
};

export default withStyles(styles)(AdminLayoutRoute);
