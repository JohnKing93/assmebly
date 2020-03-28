import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, blueGrey, grey, purple,indigo } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[200],
      main: blueGrey[800],
      dark: grey[900],
    },
    secondary: {
      light: blue.A400,
      main: purple[900],
      dark: indigo[900],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;