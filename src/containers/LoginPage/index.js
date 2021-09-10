import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/styles';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authAction from '../../actions/auth';
import * as modalAction from '../../actions/modal';
import renderPasswordField from '../../components/FormHelper/PasswordField';
import renderTextField from '../../components/FormHelper/TextField';
import * as formConsts from '../../consts/form';
import { ROUTES_PATH_SIGNUP } from '../../consts/routes';
import ResetPasswordForm from '../ResetPasswordForm';
import OAuthLoginPage from './OAuth';
import styles from './styles';
import validate from './validate';
import HighlightedInformation from '../../components/HighlighedInformation';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showForgotPasswordForm: false,
    };
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleSubmitForm = (data) => {
    const { authActionCreators } = this.props;
    const { login } = authActionCreators;
    const { username, password } = data;

    login({
      username,
      password,
    });
  };

  handleForgotPassword = () => {
    const { showForgotPasswordForm } = this.state;
    this.setState({
      showForgotPasswordForm: !showForgotPasswordForm,
    });
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    const { showPassword, showForgotPasswordForm } = this.state;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent className={classes.cardContent}>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h3">Login</Typography>
                </div>

                <Field
                  label="Email Address"
                  className={classes.textField}
                  margin="normal"
                  name="username"
                  fullWidth
                  component={renderTextField}
                />

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
                <Grid container justifyContent="center">
                  <Grid item md={6} className={classes.itemLeft}>
                    <Link
                      to={ROUTES_PATH_SIGNUP}
                      className={classes.linkRegister}
                    >
                      <Button color="primary">Register New Account</Button>
                    </Link>
                  </Grid>
                  <Grid item md={6} className={classes.itemRight}>
                    <Button
                      color="secondary"
                      className={classes.forgot}
                      onClick={this.handleForgotPassword}
                    >
                      Forgot Password?
                    </Button>
                  </Grid>
                </Grid>

                <HighlightedInformation>
                  <b>Facebook Testing Account </b>
                  <br />
                  <br />
                  Email: &nbsp;&nbsp;<b>testing_oqulqma_facebook@tfbnw.net</b>
                  <br />
                  Password:&nbsp;&nbsp; <b>nhanle</b>
                </HighlightedInformation>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  className={classes.margin}
                  disabled={invalid || submitting}
                >
                  Login
                </Button>
                <OAuthLoginPage />
              </form>
            </CardContent>
          </Card>
        </div>
        <ResetPasswordForm
          open={showForgotPasswordForm}
          onToggleForm={this.handleForgotPassword}
        />
      </div>
    );
  }
}
LoginPage.propTypes = {
  classes: propTypes.object,
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  submitting: propTypes.bool,
  authActionCreators: propTypes.shape({
    login: propTypes.func,
  }),
  modalActionCreators: propTypes.shape({
    showModal: propTypes.func,
    changeModalTitle: propTypes.func,
    changeModalContent: propTypes.func,
    hideModal: propTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
  modalActionCreators: bindActionCreators(modalAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: formConsts.LOGIN_MANAGEMENT,
  validate,
});

export default compose(
  withRouter,
  withStyles(styles),
  withConnect,
  withReduxForm,
)(LoginPage);
