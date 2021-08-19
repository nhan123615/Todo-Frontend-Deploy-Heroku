import { withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';

class DefaultLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    return (
      <Route
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...remainProps}
        render={(routeProps) => (
          <YourComponent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...routeProps}
          />
        )}
      />
    );
  }
}

DefaultLayoutRoute.propTypes = {
  path: propTypes.string,
  name: propTypes.string,
  component: propTypes.object,
  exact: propTypes.bool,
};

export default withStyles(styles)(DefaultLayoutRoute);
