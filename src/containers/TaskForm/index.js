import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, Grid, Box, MenuItem } from '@material-ui/core';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalAction from '../../actions/modal';
import * as taskAction from '../../actions/task';
import styles from './styles';
import * as formConsts from '../../consts/form';
import renderTextField from '../../components/FormHelper/TextField';
import renderSelectField from '../../components/FormHelper/SelectField';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = (data) => {
    const { taskActionCreators, initialValues } = this.props;
    const { addTask, updateTask } = taskActionCreators;
    const { title, description, id, status } = data;
    if (initialValues) {
      updateTask({
        id,
        title,
        description,
        status,
      });
    } else {
      addTask({
        title,
        description,
      });
    }
  };

  renderStatusField = () => {
    let xhtml = null;
    const { initialValues, classes } = this.props;
    if (initialValues && initialValues.id) {
      xhtml = (
        <Grid item md={12} sm={12}>
          <Field
            label="Status"
            className={classes.select}
            name="status"
            component={renderSelectField}
          >
            <MenuItem value={0}>Ready</MenuItem>
            <MenuItem value={1}>In Progress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Field>
        </Grid>
      );
    }

    return xhtml;
  };

  render() {
    const { classes, modalActionCreators, handleSubmit, invalid, submitting } =
      this.props;
    const { hideModal } = modalActionCreators;

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container className={classes.form}>
          <Grid item md={12} sm={12}>
            <Field
              label="Title"
              className={classes.textField}
              margin="normal"
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12} sm={12}>
            <Field
              label="Description"
              className={classes.textField}
              multiline
              maxRows="4"
              margin="normal"
              name="description"
              component={renderTextField}
            />
          </Grid>
          {this.renderStatusField()}
          <Grid item md={12} sm={12}>
            <Box display="flex" flexDirection="row-reverse" mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={invalid || submitting}
              >
                Add
              </Button>
              <Box mr={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={hideModal}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: propTypes.object,
  modalActionCreators: propTypes.shape({
    hideModal: propTypes.func,
  }),
  taskActionCreators: propTypes.shape({
    addTask: propTypes.func,
    updateTask: propTypes.func,
  }),
  handleSubmit: propTypes.func,
  invalid: propTypes.bool,
  submitting: propTypes.bool,
  initialValues: propTypes.object,
};

const mapStateToProps = (state) => ({
  initialValues: state.tasks.taskEditing,
});

const mapDispatchToProps = (dispatch) => ({
  modalActionCreators: bindActionCreators(modalAction, dispatch),
  taskActionCreators: bindActionCreators(taskAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: formConsts.TASK_MANAGEMENT,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
