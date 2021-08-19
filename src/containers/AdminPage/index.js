import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import styles from './styles';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Management</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AdminPage);
