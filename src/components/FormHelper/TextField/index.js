import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...input}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...custom}
  />
);

renderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default renderTextField;
