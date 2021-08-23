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
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as authAction from '../../actions/auth';
import renderPasswordField from '../../components/FormHelper/PasswordField';
import renderTextField from '../../components/FormHelper/TextField';
import * as formConsts from '../../consts/form';
import styles from './styles';
import validate from './validate';
import OAuthLoginPage from './OAuth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
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

  render() {
    const { classes, handleSubmit, invalid, submitting } = this.props;
    const { showPassword } = this.state;
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
                  label="Username"
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
                <div className="pt-1 text-md-center">
                  <Link to="/signup">
                    <Button>Register New Account</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
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
