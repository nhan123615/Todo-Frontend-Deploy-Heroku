const styles = (theme) => ({
  container: {
    marginTop: 10,
  },

  btn: {
    width: '90%',
    borderRadius: '4px !important',
  },

  pr: {
    paddingRight: '0 !important',
  },
  pl: {
    paddingLeft: '0 !important',
  },

  [theme.breakpoints.up('sm')]: {
    item: {
      padding: '0 !important',
      margin: '10px 0px',
    },
  },
});

export default styles;
