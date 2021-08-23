import { Chip, withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DoneIcon from '@material-ui/icons/Done';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../consts';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends Component {
  renderLabel = (label) => {
    let xhtml = null;
    const { classes } = this.props;

    if (label === STATUSES[0].label) {
      xhtml = (
        <Chip
          className={classes.ready}
          icon={<EmojiEmotionsIcon className={classes.readyIcon} />}
          label={label}
        />
      );
    } else if (label === STATUSES[1].label) {
      xhtml = <Chip color="primary" icon={<AutorenewIcon />} label={label} />;
    } else {
      xhtml = <Chip color="secondary" icon={<DoneIcon />} label={label} />;
    }
    return xhtml;
  };

  render() {
    const { classes, tasks, status, onEdit, onDelete } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={2} mb={2}>
          <Typography variant="subtitle2" className={classes.status}>
            {this.renderLabel(status.label)}
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
