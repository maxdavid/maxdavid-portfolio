import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/deviceBreakpoints';
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
            <Link to={props.route}>{props.projectTitle}</Link>
          ) : (
            props.projectTitle
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

  @media ${device.tablet} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    text-align: center;
  }

  a {
    text-decoration: none;
  }
`;

const ProjectImage = styled.div`
  width: 100%;

  img {
    object-fit: contain;
    transition: opacity 0.2s ease-in-out;

    @media ${device.tablet} {
      max-height: 40vh;
      margin: 0 auto;
    }
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
