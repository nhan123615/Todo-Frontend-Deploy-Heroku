import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import propTypes from 'prop-types';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
  render() {
    const { classes, tasks, status, onEdit, onDelete } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <Typography variant="subtitle2" className={classes.status}>
            {status.label}
          </Typography>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              status={status}
              onEdit={() => onEdit(task)}
              onDelete={() => onDelete(task)}
            />
          ))}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: propTypes.object,
  tasks: propTypes.array,
  status: propTypes.object,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
};

export default withStyles(styles)(TaskList);
