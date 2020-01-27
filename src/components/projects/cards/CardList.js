import React from 'react';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';

export const LargeCardList = props => {
  return (
    <StyledLargeCardList>
      {props.cards.map(card => (
        <ProjectCard key={card.projectTitle} {...card} />
      ))}
    </StyledLargeCardList>
  );
};

export const SmallCardList = props => {
  return (
    <StyledSmallCardList>
      {props.cards.map(card => (
        <ProjectCard key={card.projectTitle} {...card} />
      ))}
    </StyledSmallCardList>
  );
};

const StyledCardList = styled.div`
  width: 100%;
  display: grid;

  a {
    text-decoration: none;

    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledLargeCardList = styled(StyledCardList)`
  grid-template-columns: 1fr 1fr;
  column-gap: 1em;
  height: 90vh;
  min-height: 600px;
`;

const StyledSmallCardList = styled(StyledCardList)`
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
  row-gap: 3em;
  min-height: 1560px;
`;
