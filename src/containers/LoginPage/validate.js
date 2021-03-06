const validate = (values) => {
  const errors = {};
  const { username, password } = values;
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );

  if (!username) {
    errors.username = 'Please input Email Address !';
  } else if (username.trim() && username.length < 5) {
    errors.username = 'Email Address must be at least 5 characters long';
  } else if (!validEmail.test(username)) {
    errors.username = 'Email Address is not correct!';
  }

  if (!password) {
    errors.password = 'Please input password !';
  } else if (password.trim() && password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  }

  return errors;
};

export default validate;
