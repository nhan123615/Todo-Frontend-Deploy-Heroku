import React from 'react';
import {
  FormControl,
  InputLabel,
  FormHelperText,
  withStyles,
  Input,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderPasswordField = ({
  classes,
  input,
  label,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <FormControl
    className={classes.textField}
    fullWidth
    margin="normal"
    // error={touched && error}
    error={touched && invalid}
  >
    <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
    <Input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...custom}
    />
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderPasswordField.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(renderPasswordField);
