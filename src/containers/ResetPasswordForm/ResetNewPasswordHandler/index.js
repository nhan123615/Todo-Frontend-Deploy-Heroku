import {
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import jwt from 'jwt-decode';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authAction from '../../../actions/auth';
import renderPasswordField from '../../../components/FormHelper/PasswordField';
import * as formConsts from '../../../consts/form';
import { ROUTES_PATH_LOGIN } from '../../../consts/routes';
import { getUrlParameter } from '../../../helpers/getUrlParameter';
import styles from './styles';
import validate from './validate';

class ResetNewPasswordHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
    };
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  handleClickShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({
      showConfirmPassword: !showConfirmPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleSubmitForm = (data) => {
    const { location } = this.props;
    const { password } = data;
    const tokenType = getUrlParameter('tokenType', location);
    const token = getUrlParameter('token', location);
    const { authActionCreators } = this.props;
    const { updateNewPassword } = authActionCreators;
    updateNewPassword({
      password,
      token,
      tokenType,
    });
  };

  renderResetNewPasswordHandler = () => {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    const { showPassword, showConfirmPassword } = this.state;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent className={classes.cardContent}>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h3">Reset Password</Typography>
                </div>

                <Field
                  label="Password"
                  className={classes.textField}
                  fullWidth
                  component={renderPasswordField}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <Field
                  label="Confirm Password"
                  className={classes.textField}
                  fullWidth
                  component={renderPasswordField}
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowConfirmPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className={classes.margin}
                  disabled={invalid || submitting}
                >
                  Reset
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  render() {
    const { location } = this.props;
    const tokenType = getUrlParameter('tokenType', location);
    const token = getUrlParameter('token', location);
    if (token && tokenType) {
      const now = Date.now() / 1000;
      const resetToken = jwt(token);
      const { exp: expirationResetToken } = resetToken;
      if (expirationResetToken < now) {
        return (
          <div>
            {toast.error(
              'Reset Password Expried, Forgot Password to get a new one!',
            )}
            <Redirect
              to={{
                pathname: ROUTES_PATH_LOGIN,
              }}
            />
          </div>
        );
      }
      return this.renderResetNewPasswordHandler();
    }
    return (
      <Redirect
        to={{
          pathname: ROUTES_PATH_LOGIN,
        }}
      />
    );
  }
}
ResetNewPasswordHandler.propTypes = {
  classes: propTypes.object,
  location: propTypes.object,
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  submitting: propTypes.bool,
  authActionCreators: propTypes.shape({
    updateNewPassword: propTypes.func,
  }),
};

const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: formConsts.RESET_NEW_PASSWORD_MANAGEMENT,
  validate,
});

export default compose(
  withReduxForm,
  withConnect,
  withStyles(styles),
)(ResetNewPasswordHandler);
