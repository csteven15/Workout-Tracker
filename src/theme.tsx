import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: red,
  },
  overrides: {
    MuiStepIcon: {
      root: {
        color: '#000000', // or 'rgba(0, 0, 0, 1)'
        '&$active': {
          color: '#FDC542',
        },
        '&$completed': {
          color: '#FDC542',
        },
      },
    },
  },
});

export default theme;