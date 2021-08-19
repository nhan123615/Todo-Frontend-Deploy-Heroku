import React, { Component } from 'react';
import {
  withStyles,
  CardHeader,
  IconButton,
  Fab,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import propTypes from 'prop-types';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status, onEdit, onDelete } = this.props;
    return (
      <Card className={classes.card} elevation={3}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={8}>
              <Typography variant="h3">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle2" className={classes.label}>
                {status.label}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="subtitle1">{task.description}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab color="primary" aria-label="edit" size="small" onClick={onEdit}>
            <EditIcon fontSize="small" />
          </Fab>
          <Fab
            color="secondary"
            aria-label="edit"
            size="small"
            onClick={onDelete}
          >
            <DeleteIcon fontSize="small" />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: propTypes.object,
  task: propTypes.object,
  status: propTypes.object,
  onEdit: propTypes.func,
  onDelete: propTypes.func,
};

export default withStyles(styles)(TaskItem);
