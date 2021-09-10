import { Typography, withStyles } from '@material-ui/core';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { compose } from 'redux';
import styles from './styles';

class HighlighedInformation extends Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.main}>
        <Typography variant="body2">{children}</Typography>
      </div>
    );
  }
}

HighlighedInformation.propTypes = {
  classes: propTypes.object,
  children: propTypes.array,
};

export default compose(withStyles(styles))(HighlighedInformation);
