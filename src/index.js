import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';

import { StateProvider } from './contexts/StateProvider';
import { initialState } from './reducers/initialState';
import { rootReducer } from './reducers/rootReducer';
import App from './App';

const GlobalStyle = createGlobalStyle`
    ${reset} 
    ${global}
`;

const theme = {
  grayAccent: '#f3f3f3',
  yellowAccent: '#eeff41',
  darkGray: '#666',
  tinyFont: '1.2rem',
  smallFont: '1.5rem',
  mediumFont: '1.8rem',
  largeFont: '2.2rem',
  hugeFont: '3.0rem',
  headerSize: '6.0rem'
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <StateProvider initialState={initialState} reducer={rootReducer}>
        <App />
      </StateProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
