import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#070807',
    },
    secondary: {
      main: '#016e0e',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
