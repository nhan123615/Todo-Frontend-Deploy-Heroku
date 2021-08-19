import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
    <Select
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...input}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...custom}
      // inputProps={{
      //   name: 'age',
      //   id: 'age-native-simple',
      // }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

renderSelectField.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(renderSelectField);
