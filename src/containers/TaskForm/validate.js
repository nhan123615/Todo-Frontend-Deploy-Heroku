const validate = (values) => {
  const errors = {};
  const { title, description } = values;

  if (!title) {
    errors.title = 'Please input title !';
  } else if (title.trim() && title.length < 5) {
    errors.title = 'Title must be at least 5 characters long';
  }

  if (!description) {
    errors.description = 'Please input description !';
  } else if (description.trim() && description.length < 5) {
    errors.description = 'description must be at least 5 characters long';
  }

  return errors;
};

export default validate;
