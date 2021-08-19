const styles = (theme) => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    flex: '1 0 auto',
  },

  cardContent: {
    padding: '0px 40px',
    height: 500,
    width: 500,
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },
});

export default styles;
