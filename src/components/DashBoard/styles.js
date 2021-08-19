const styles = (theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },

  wrapperContent: {
    width: '100%',
    padding: 20,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  shifLeft: {
    // width of side bar
    // marginLeft: -240,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
});

export default styles;
