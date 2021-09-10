const validate = (values) => {
  const errors = {};
  const { username, password, confirmPassword, terms, name } = values;
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
  );

  if (!username) {
    errors.username = 'Please input email address !';
  } else if (username.trim() && username.length < 5) {
    errors.username = 'Email Address must be at least 5 characters long';
  } else if (!validEmail.test(username)) {
    errors.username = 'Email Address is not correct!';
  }

  if (!name) {
    errors.name = 'Please input username !';
  } else if (name.trim() && name.length < 5) {
    errors.name = 'Username must be at least 5 characters long';
  }

  if (!password) {
    errors.password = 'Please input password !';
  } else if (password.trim() && password.length < 5) {
    errors.password = 'Password must be at least 5 characters long';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password and Confirm Password must be the same';
    errors.password = 'Password and Confirm Password must be the same';
  }

  if (!terms) {
    errors.terms = 'You must agree with our terms of service';
  }

  return errors;
};

export default validate;
