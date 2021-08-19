import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <div className={classes.container} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          placeholder="Input Keyword"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};
export default withStyles(styles)(SearchBox);
