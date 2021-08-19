const styles = (theme) => ({
  drawerPaper: {
    width: 240,
    maxWidth: 240,
    height: '100%',
    zIndex: 98,
    position: 'relative',
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.color.defaultTextColor,
  },
  menuLinkActive: {
    '&>div': {
      backgroundColor: theme.color.hover,
      color: theme.color.hoverColor,
    },
  },
});

export default styles;
