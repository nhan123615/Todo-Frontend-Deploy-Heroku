const validate = (values) => {
  const errors = {};
  const { username } = values;
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

  return errors;
};

export default validate;
