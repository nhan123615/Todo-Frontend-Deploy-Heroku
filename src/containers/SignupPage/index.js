import {
  Button,
  Card,
  CardContent,
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
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authAction from '../../actions/auth';
import renderCheckboxField from '../../components/FormHelper/CheckboxField';
import renderPasswordField from '../../components/FormHelper/PasswordField';
import renderTextField from '../../components/FormHelper/TextField';
import TermsOfServiceDialog from '../../components/TermsOfServiceDialog';
import * as formConsts from '../../consts/form';
import styles from './styles';
import validate from './validate';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
      openTermsOfServiceDialog: false,
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

  handleClickShowConfirmPassword = () => {
    const { showConfirmPassword } = this.state;
    this.setState({
      showConfirmPassword: !showConfirmPassword,
    });
  };

  handleSubmitForm = (data) => {
    const { authActionCreators } = this.props;
    const { register } = authActionCreators;
    const { username, password, name } = data;
    register({
      username,
      password,
      name,
    });
  };

  openTermsDialog = (event) => {
    event.preventDefault();
    this.setState({
      openTermsOfServiceDialog: true,
    });
  };

  closeTermsDialog = () => {
    this.setState({
      openTermsOfServiceDialog: false,
    });
  };

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    const { showPassword, showConfirmPassword, openTermsOfServiceDialog } =
      this.state;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent className={classes.cardContent}>
              <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <div className="text-xs-center pb-xs">
                  <Typography variant="h3">Register</Typography>
                </div>

                <Field
                  label="Email Address"
                  className={classes.textField}
                  margin="normal"
                  name="username"
                  fullWidth
                  component={renderTextField}
                  autoFocus
                />

                <Field
                  label="Username"
                  className={classes.textField}
                  margin="normal"
                  name="name"
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

                <Field
                  name="terms"
                  component={renderCheckboxField}
                  label={
                    <Typography variant="body1">
                      I agree to the{' '}
                      <span
                        className={classes.link}
                        onClick={this.openTermsDialog}
                        tabIndex={0}
                        role="button"
                        onKeyDown={(event) => {
                          // For screenreaders listen to space and enter events
                          if (event.keyCode === 13 || event.keyCode === 32) {
                            this.openTermsDialog();
                          }
                        }}
                      >
                        {' '}
                        terms of service
                      </span>
                    </Typography>
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
                  Signup
                </Button>
                <div
                  className="pt-1 text-md-center"
                  style={{ marginTop: 10, marginBottom: 30 }}
                >
                  <Link to="/login" className={classes.underline}>
                    <Button color="primary">Already Have Account ?</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <TermsOfServiceDialog
          open={openTermsOfServiceDialog}
          onCloseDialog={this.closeTermsDialog}
        />
      </div>
    );
  }
}

Signup.propTypes = {
  classes: propTypes.object,
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  submitting: propTypes.bool,
  authActionCreators: propTypes.shape({
    register: propTypes.func,
  }),
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: formConsts.SIGNUP_MANAGEMENT,
  validate,
});

export default compose(withStyles(styles), withConnect, withReduxForm)(Signup);
