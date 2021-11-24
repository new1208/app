import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './AppRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9800',
    },

    secondary: {
      main: '#ba68c8',
    },

    dark:{
      main: '#03a9f4',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();