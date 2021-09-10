import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { bindActionCreators, compose } from 'redux';
import * as authAction from '../../../../actions/auth';
import { LOGIN_WITH_FACEBOOK_PATH } from '../../../../consts/auth';
import styles from './styles';

class FacebookLoginPage extends Component {
  handleClick = () => {
    window.location.href = LOGIN_WITH_FACEBOOK_PATH;
  };

  render() {
    const { classes } = this.props;

    return (
      <FacebookLoginButton className={classes.btn} onClick={this.handleClick} />
    );
  }
}
FacebookLoginPage.propTypes = {
  classes: propTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(FacebookLoginPage);
