import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Footer,
  Bio,
  LargeCardList,
  SmallCardList,
  projects,
  FunShapes
} from '../components';

export const Home = () => {
  useEffect(() => {
    document.title = 'Max David';
  }, []);

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
      <FunShapes />
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
