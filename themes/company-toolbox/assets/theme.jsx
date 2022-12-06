import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    xprimary: {
      main: '#556cd6',
    },
    xsecondary: {
      main: '#19857b',
    },
    white: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
