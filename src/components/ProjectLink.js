import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectLink = props => {
  return (
    <StyledProjectLink>
      <ProjectImage>
        {props.route ? (
          <Link to={props.route}>
            <img src={props.image} alt={props.imageAlt} />
          </Link>
        ) : (
          <img src={props.image} alt={props.imageAlt} />
        )}
      </ProjectImage>
      <ProjectText className='flow'>
        <h2>
          {props.route ? (
            <Link to={props.route}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h2>
        <h3>{props.tags}</h3>
        <h4>{props.description}</h4>
        <h6>
          {props.route ? (
            <Link to={props.route}>View More -></Link>
          ) : (
            'Write-up Coming Soon ...'
          )}
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

  a {
    text-decoration: none;
  }
`;

const ProjectImage = styled.div`
  width: 100%;

  img {
    object-fit: contain;
    transition: opacity 0.2s ease-in-out;
  }
  a:hover > img {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
`;

const ProjectText = styled.div`
  width: 100%;
  padding: 0 0 32px 32px;

  h6 {
    margin-top: 3rem;
  }
`;
