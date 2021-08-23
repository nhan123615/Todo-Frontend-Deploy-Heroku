const validate = (values) => {
  const errors = {};
  const { username, password } = values;

  if (!username) {
    errors.title = 'Please input username !';
  } else if (username.trim() && username.length < 5) {
    errors.username = 'Username must be at least 5 characters long';
  }

  if (!password) {
    errors.password = 'Please input password !';
  } else if (password.trim() && password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  }

  return errors;
};

export default validate;