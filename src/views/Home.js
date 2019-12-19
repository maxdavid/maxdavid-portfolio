import React from 'react';
import styled from 'styled-components';
import { Footer, ProjectList, Bio } from '../components';

export const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Bio />
        <ProjectList />
      </HomeContainer>
      <Footer fixed />
    </div>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  max-width: ${props => props.theme.homeWidth};
  margin: 0 auto 10vh auto;
  margin-bottom: ${({ theme }) => theme.footerHeight};
`;
