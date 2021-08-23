import FacebookIcon from '@material-ui/icons/Facebook';
import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import styles from './styles';

class FacebookLoginPage extends Component {
  responseFacebook = (response) => {
    console.log(response);
  };

  componentClicked = () => {
    console.log('FB clicked');
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        a
        <FacebookLogin
          appId="1409930916039308"
          fields="name,email,picture"
          callback={this.responseFacebook}
          onClick={this.componentClicked}
          cssClass={classes.btn}
          icon={<FacebookIcon className={classes.fbIcon} />}
        />
      </div>
    );
  }
}
FacebookLoginPage.propTypes = {
  classes: propTypes.object,
};

export default withStyles(styles)(FacebookLoginPage);
