import React from 'react';
import styled from 'styled-components';
import {
  Footer,
  ProjectList,
  Bio,
  LargeCardList,
  SmallCardList,
  projects
} from '../components';

export const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Bio />
        <LargeCardList
          cards={projects.filter(project => project.size === 'large')}
        />
        <SmallCardList
          cards={projects.filter(project => project.size !== 'large')}
        />
      </HomeContainer>
      <Footer fixed />
    </div>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  max-width: ${props => props.theme.homeWidth};
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.footerHeight};
  padding-bottom: 15vh;
`;
