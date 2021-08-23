import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  withStyles,
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../consts';
import styles from './styles';

const menuId = 'primary-search-account-menu';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleProfileMenuOpen = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  handleOnEdit = () => {
    const { onEdit } = this.props;
    this.handleMenuClose();
    onEdit();
  };

  handleOnDelete = () => {
    const { onDelete } = this.props;
    this.handleMenuClose();
    onDelete();
  };

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const { classes } = this.props;

    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleOnEdit}>
          <ListItemIcon className={classes.listIcon}>
            <CreateIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
        <MenuItem onClick={this.handleOnDelete}>
          <ListItemIcon className={classes.listIcon}>
            <DeleteIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    );
  };

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
    const { classes, task, status } = this.props;

    return (
      <div>
        <Card className={classes.card} elevation={3}>
          <CardHeader
            action={
              <IconButton
                aria-label="settings"
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
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
                <Typography variant="h3" className={classes.title}>
                  {task.title}
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography variant="subtitle2" className={classes.label}>
                  {this.renderLabel(status.label)}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="subtitle1" className={classes.description}>
              {task.description}
            </Typography>
          </CardContent>
        </Card>
        {this.renderMenu()}
      </div>
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
