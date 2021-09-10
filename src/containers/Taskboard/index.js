import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modalAction from '../../actions/modal';
import * as taskAction from '../../actions/task';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import { STATUSES } from '../../consts';
import TaskForm from '../TaskForm';
import styles from './styles';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  openForm = () => {
    const { modalActionCreators, taskActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(null);
    const { showModal, changeModalTitle, changeModalContent } =
      modalActionCreators;

    showModal();
    changeModalTitle('Add new Task');
    changeModalContent(<TaskForm />);
  };

  handleOnEdit = (task) => {
    const { taskActionCreators, modalActionCreators } = this.props;
    const { setTaskEditing } = taskActionCreators;
    setTaskEditing(task);

    const { showModal, changeModalTitle, changeModalContent } =
      modalActionCreators;

    showModal();
    changeModalTitle('Edit Task');
    changeModalContent(<TaskForm />);
  };

  showModalDeleteTask = (task) => {
    const { modalActionCreators, classes } = this.props;
    const { showModal, changeModalTitle, changeModalContent, hideModal } =
      modalActionCreators;

    showModal();
    changeModalTitle('Delete Task');
    changeModalContent(
      <div className={classes.modelDelete}>
        <div className={classes.modelConfirmText}>
          Are you sure to delete{' '}
          <span className={classes.modelConfirmTextBold}>{task.title}</span> ?
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleOnDelete(task)}
            >
              Agree
            </Button>
          </Box>
          <Box>
            <Button variant="contained" color="secondary" onClick={hideModal}>
              Cancel
            </Button>
          </Box>
        </Box>
      </div>,
    );
  };

  handleOnDelete = (task) => {
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(task);
  };

  renderBoard = () => {
    const { listTasks } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              key={status.value}
              tasks={taskFiltered}
              status={status}
              onEdit={this.handleOnEdit}
              onDelete={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return xhtml;
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleChange} />;
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
      </div>
    );
  }
}

Taskboard.propTypes = {
  classes: propTypes.object,
  taskActionCreators: propTypes.shape({
    fetchListTask: propTypes.func,
    filterTask: propTypes.func,
    setTaskEditing: propTypes.func,
    deleteTask: propTypes.func,
  }),
  modalActionCreators: propTypes.shape({
    showModal: propTypes.func,
    hideModal: propTypes.func,
    changeModalTitle: propTypes.func,
    changeModalContent: propTypes.func,
  }),
  listTasks: propTypes.array,
};

const mapStateToProps = (state) => ({
  listTasks: state.tasks.listTasks,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskAction, dispatch),
  modalActionCreators: bindActionCreators(modalAction, dispatch),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard),
);
