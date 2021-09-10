import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import * as formConsts from '../../consts/form';
import styles from './styles';
import validate from './validate';
import * as authAction from '../../actions/auth';
import { RESET_PASSWORD_URL } from '../../consts/auth';

class ResetPasswordForm extends Component {
  onClose = () => {
    const { onToggleForm } = this.props;
    onToggleForm();
  };

  handleSubmitForm = (data) => {
    const { username } = data;
    const { authActionCreators, onToggleForm } = this.props;
    const { resetPassword } = authActionCreators;

    resetPassword({
      username,
      redirectUrl: RESET_PASSWORD_URL,
    });
    onToggleForm();
  };

  render() {
    const { classes, open, handleSubmit, invalid, submitting } = this.props;

    return (
      <Dialog open={open} hideBackdrop maxWidth="xs" onClose={this.onClose}>
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <DialogContent className={classes.dialogContent}>
            <Typography paragraph>
              Enter your email address below and we will send you instructions
              on how to reset your password.
            </Typography>

            <Field
              label="Email Address"
              className={classes.textField}
              margin="dense"
              name="username"
              fullWidth
              variant="outlined"
              component={renderTextField}
              autoFocus
              autoComplete="off"
            />
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button onClick={this.onClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={invalid || submitting}
            >
              Reset password
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}
ResetPasswordForm.propTypes = {
  classes: propTypes.object,
  onToggleForm: propTypes.func,
  open: propTypes.bool,
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  submitting: propTypes.bool,
  authActionCreators: propTypes.shape({
    resetPassword: propTypes.func,
  }),
};

const mapDispatchToProps = (dispatch) => ({
  authActionCreators: bindActionCreators(authAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: formConsts.RESET_PASSWORD_MANAGEMENT,
  validate,
});

export default compose(
  withReduxForm,
  withConnect,
  withStyles(styles),
)(ResetPasswordForm);
