import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import FacebookLoginPage from './Facebook';
import GoogleLoginPage from './Google';
import styles from './styles';

class OAuthLoginPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        justifyContent="center"
        className={classes.container}
        spacing={3}
      >
        <Grid item md={6} sm={6} className={`${classes.item} ${classes.pl}`}>
          <FacebookLoginPage />
        </Grid>
        <Grid item md={6} sm={6} className={`${classes.item} ${classes.pr}`}>
          <GoogleLoginPage />
        </Grid>
      </Grid>
    );
  }
}
OAuthLoginPage.propTypes = {
  classes: propTypes.object,
};

export default withStyles(styles)(OAuthLoginPage);
