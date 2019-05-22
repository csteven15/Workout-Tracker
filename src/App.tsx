import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppRouter from './routes/AppRouter';
import theme from './theme';

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
