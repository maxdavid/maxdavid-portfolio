import React from 'react';
import styled from 'styled-components';
import { device } from '../../../styles/deviceBreakpoints';
import { Link } from '../../../util';

export const ProjectCard = props => {
  return (
    <div style={{ height: props.size === 'large' ? 550 : 450 }}>
      {props.route ? (
        <Link to={props.route}>
          <ProjectCardContent {...props} />
        </Link>
      ) : (
        <ProjectCardContent {...props} />
      )}
    </div>
  );
};

const ProjectCardContent = props => {
  return (
    <StyledCard size={props.size} comingSoon={Boolean(!props.route)}>
      <ProjectImage cover={props.imageCover}>
        <img src={props.image} alt={props.imageAlt} />
      </ProjectImage>
      <ProjectText size={props.size}>
        <h2>{props.projectTitle}</h2>
        {props.size === 'large' ? (
          <ProjectTags>
            {props.tags.map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </ProjectTags>
        ) : (
          ''
        )}
        <div className='description'>{props.description}</div>
      </ProjectText>
      {!props.route ? (
        <ComingSoon>
          <span>COMING SOON...</span>
        </ComingSoon>
      ) : (
        ''
      )}
      {/^https?:\/\//.test(props.route) && props.size !== 'large' ? (
        <PendingWriteup>
          <div>GitHub Link</div>
        </PendingWriteup>
      ) : (
        ''
      )}
    </StyledCard>
  );
};

const ComingSoon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;

  background-color: #eeeeeebf;
  border-radius: 10px;
  cursor: default;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.mono};
  font-size: 3rem;

  span {
    background-color: ${({ theme }) => theme.yellowAccent};
  }
`;

const PendingWriteup = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.mono};
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme }) => theme.turquoiseAccent};
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectTags = styled.div`
  margin: 0.5em 0;
  font-family: ${({ theme }) => theme.mono};
  text-transform: uppercase;

  & > span + span {
    margin-left: 0.7em;
  }

  span {
    display: inline-block;
    background-color: ${({ theme }) => theme.turquoiseAccent};
    padding: 0 0.5em;
  }
`;

const ProjectImage = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: ${({ cover }) => (cover ? 'cover' : 'contain')};
    object-position: 50% 25%;

    height: 100%;
    width: 100%;
    overflow: clip;
    border-radius: 10px 10px 0px 0px;

    @media ${device.tablet} {
      max-height: 40vh;
      margin: 0 auto;
    }
  }
`;

const ProjectText = styled.div`
  --h2-size: ${({ size }) => (size === 'large' ? '3rem' : '2.4rem')};
  --desc-size: ${({ size }) => (size === 'large' ? '2rem' : '1.6rem')};
  --text-padding: ${({ size }) => (size === 'large' ? '32px' : '16px')};

  width: 100%;
  /* padding: var(--text-padding); */
  padding: 16px;
  padding-top: 0px;

  h2 {
    font-size: var(--h2-size);
  }

  .description {
    font-size: var(--desc-size);

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;

const StyledCard = styled.div`
  /* Card are assumed small unless specified */
  --grid-gap: ${({ size }) => (size === 'large' ? '1em' : '0.5em')};
  --height: ${({ size }) => (size === 'large' ? '550px' : '500px')};
  --card-padding: ${({ size }) => (size === 'large' ? '16px' : '0px')};

  position: relative;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.grayAccent};
  transition: all 0.25s ease;
  border-radius: 10px;

  -webkit-box-shadow: ${({ theme }) => theme.cardBoxShadow};
  -moz-box-shadow: ${({ theme }) => theme.cardBoxShadow};
  box-shadow: ${({ theme }) => theme.cardBoxShadow};

  cursor: pointer;

  display: grid;
  column-gap: var(--grid-gap);
  grid-template-rows: 60% 36% 4%;

  width: 100%;
  height: var(--height);
  padding: var(--card-padding);

  &:hover {
    transition: all 0.15s ease;
    transform: ${({ comingSoon }) => (comingSoon ? 'none' : 'scale(1.02)')};
  }
`;
