const validate = (values) => {
  const errors = {};
  const { password, confirmPassword } = values;

  if (!password) {
    errors.password = 'Please input password !';
  } else if (password.trim() && password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password and Confirm Password must be the same';
    errors.password = 'Password and Confirm Password must be the same';
  }

  return errors;
};

export default validate;
