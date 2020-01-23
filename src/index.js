import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ScrollToTop, withTracker } from './util';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';

import { StateProvider } from './contexts/StateProvider';
import { initialState } from './reducers/initialState';
import { rootReducer } from './reducers/rootReducer';
import App from './App';

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
    ${reset} 
    ${global}
`;

const theme = {
  grayAccent: '#f3f3f3',
  yellowAccent: '#eeff41',
  coralAccent: 'rgba(255, 128, 82, 0.18)',
  turquoiseAccent: 'rgba(100, 209, 212, 0.24)',
  blueAccent: 'rgba(83, 210, 249, 0.24)',
  darkGray: '#666',
  surface: '#fafafa',
  cardBoxShadow: '2px 3px 10px 0px rgba(0, 0, 0, 0.12)',

  homeWidth: '950px',
  maxProjectWidth: '850px',
  projectTextWidth: '600px',
  projectHeaderWidth: '700px',
  navbarHeightDesktop: '64px',
  navbarHeightTablet: '40px',
  footerHeight: '32px',

  tinyFont: '1.2rem',
  smallFont: '1.5rem',
  mediumFont: '1.8rem',
  largeFont: '2.2rem',
  hugeFont: '3.0rem',
  headerSize: '6.0rem',

  bodyText:
    "'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
  navText:
    "'Nova Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;",
  titleText:
    "'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;",
  mono:
    "'Roboto Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router history={history}>
      <StateProvider initialState={initialState} reducer={rootReducer}>
        <ScrollToTop />
        <Route
          component={withTracker(App, {
            /* additional attributes */
          })}
        />
      </StateProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
