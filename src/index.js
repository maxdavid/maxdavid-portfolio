import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ScrollToTop } from './util';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import * as reset from './styles/reset.css';
import * as global from './styles/global.css';

import { StateProvider } from './contexts/StateProvider';
import { initialState } from './reducers/initialState';
import { rootReducer } from './reducers/rootReducer';
import App from './App';

import ReactGA from 'react-ga';
const trackingId = 'UA-45189020-1';

// Initialize google analytics page view tracking
ReactGA.initialize(trackingId, {
  gaOptions: { siteSpeedSampleRate: 100 }
});
const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactGA.set({ page: '/' });
ReactGA.pageview('/');

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
        <App />
      </StateProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
