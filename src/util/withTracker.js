import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const trackingId = 'UA-45189020-1';

// Initialize google analytics page view tracking
ReactGA.initialize(trackingId, {
  gaOptions: { siteSpeedSampleRate: 100 }
});

export const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  const HOC = props => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
