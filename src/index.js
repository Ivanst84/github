import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './themeContex'; // Importa el ThemeProvider

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);