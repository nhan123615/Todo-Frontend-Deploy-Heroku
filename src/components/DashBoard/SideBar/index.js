import { Icon, withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { USER_ROUTES } from '../../../consts/routes';
import styles from './styles';

class SideBar extends Component {
  toggleDrawer = (status) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(status);
    }
  };

  renderList = () => {
    let xhtml = null;
    const { classes } = this.props;
    xhtml = (
      <div
        className={classes.list}
        role="presentation"
        onClick={this.toggleDrawer(false)}
        onKeyDown={this.toggleDrawer(false)}
      >
        <List component="nav">
          {USER_ROUTES.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              exact={route.exact}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
            >
              <ListItem button className={classes.listItem}>
                <ListItemIcon>
                  <Icon color="primary">{route.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <SwipeableDrawer
        open={showSidebar}
        onClose={this.toggleDrawer(false)}
        onOpen={() => this.toggleDrawer(true)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="temporary"
      >
        {this.renderList()}
      </SwipeableDrawer>
    );
  }
}

SideBar.propTypes = {
  classes: propTypes.object,
  showSidebar: propTypes.bool,
  onToggleSidebar: propTypes.func,
};

export default withStyles(styles)(SideBar);
