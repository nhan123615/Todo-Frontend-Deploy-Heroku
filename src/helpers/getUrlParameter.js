export const getUrlParameter = (name, location) => {
  name = name.replace('/[[]/', '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);

  const { search } = location;

  const results = regex.exec(search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
