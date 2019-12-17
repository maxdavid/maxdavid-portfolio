import React from 'react';
import styled from 'styled-components';

export const ProjectLink = props => {
  return (
    <StyledProjectLink>
      <ProjectImage>
        <img src={props.image} alt='wat' />
      </ProjectImage>
      <ProjectText className='flow'>
        <h2>
          <a>{props.title}</a>
        </h2>
        <h3>{props.tags}</h3>
        <h4>{props.description}</h4>
        <h6 className='mono'>
          <a>VIEW MORE -></a>
        </h6>
      </ProjectText>
    </StyledProjectLink>
  );
};

const StyledProjectLink = styled.div`
  width: 100%;
  height: 90vh;

  padding: 20vh 0;

  display: grid;
  grid-template-columns: 4fr 5fr;
  align-items: center;
`;

const ProjectImage = styled.div`
  width: 100%;

  img {
    object-fit: contain;
  }
`;

const ProjectText = styled.div`
  width: 100%;
  padding: 0 0 32px 32px;

  h6 {
    margin-top: 3rem;
  }
`;
