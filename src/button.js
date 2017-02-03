import React from 'react';
import defaultTheme from './themes/default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './app-bar-icon';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const Button = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(defaultTheme)}>
    <AppBar title="compwhile" />
  </MuiThemeProvider>
);

export default Button;
