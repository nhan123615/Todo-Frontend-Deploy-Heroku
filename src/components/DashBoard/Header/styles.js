const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  inputRoot: {
    color: 'inherit',
  },

  title: {
    textTransform: 'capitalize',
  },

  sectionDesktop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
});

export default styles;
