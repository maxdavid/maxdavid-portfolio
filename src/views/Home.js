import React from 'react';
import styled from 'styled-components';
import { ProjectList, Bio } from '../components';

export const Home = () => {
  return (
    <HomeContainer>
      <Bio />
      <ProjectList />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  max-width: ${props => props.theme.homeWidth};
  margin: 0 auto 10vh auto;
`;
