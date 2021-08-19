import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#f44336',
    textColor: '#ffffff',
    defaultTextColor: '#000000',
    hover: 'rgba(0,0,0,0.08)',
    hoverColor: '#1976d2',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: '#ffffff',
    borderColor: '#ccccc',
  },
});

export default theme;
