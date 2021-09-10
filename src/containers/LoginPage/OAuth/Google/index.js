import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { compose } from 'redux';
import { LOGIN_WITH_GOOGLE_PATH } from '../../../../consts/auth';
import styles from './styles';

class GoogleLoginPage extends Component {
  handleClick = () => {
    window.location.href = LOGIN_WITH_GOOGLE_PATH;
  };

  render() {
    const { classes } = this.props;

    return (
      <GoogleLoginButton className={classes.btn} onClick={this.handleClick} />
    );
  }
}
GoogleLoginPage.propTypes = {
  classes: propTypes.object,
};

export default compose(withRouter, withStyles(styles))(GoogleLoginPage);
