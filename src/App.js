import React from 'react';
import styled from 'styled-components';
import { device } from './styles/deviceBreakpoints';
import { Switch, Route } from 'react-router';
import { Navbar } from './components';
import {
  Home,
  VoluntierOutline,
  ThankYouOutline,
  FoodreauOutline,
  CityTempOutline
} from './views';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ContentContainer>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/voluntier'} component={VoluntierOutline} />
          <Route exact path={'/thank-you'} component={ThankYouOutline} />
          <Route exact path={'/foodreau'} component={FoodreauOutline} />
          <Route exact path={'/citytemp'} component={CityTempOutline} />
        </Switch>
      </ContentContainer>
      {/* <Footer fixed /> */}
    </div>
  );
}

const ContentContainer = styled.div`
  margin-top: ${({ theme }) => theme.navbarHeightDesktop};
  /* margin-bottom: ${({ theme }) => theme.footerHeight}; */

  @media ${device.tablet} {
    margin-top: ${({ theme }) => theme.navbarHeightTablet};
    padding: 0 16px;
  }
`;

export default App;
