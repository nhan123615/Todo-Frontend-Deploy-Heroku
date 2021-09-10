import { Checkbox, FormControlLabel } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const renderCheckboxField = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} onChange={input.onChange} />}
      label={label}
    />
  </div>
);

renderCheckboxField.propTypes = {
  label: PropTypes.object,
  input: PropTypes.object,
};

export default renderCheckboxField;
