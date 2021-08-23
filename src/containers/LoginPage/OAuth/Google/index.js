import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import styles from './styles';

class GoogleLoginPage extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    const { classes } = this.props;

    return (
      <GoogleLogin
        clientId="39062008570-c34cgpj473os4qepe6shacu12j66unef.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy="single_host_origin"
        className={classes.btn}
      />
    );
  }
}
GoogleLoginPage.propTypes = {
  classes: propTypes.object,
};

export default withStyles(styles)(GoogleLoginPage);
