import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

import FunShapes from './FunShapes';
import { maxHeadshot, maxHeadshotSquare } from './assets';

export const Bio = props => {
  return (
    <StyledBio>
      <BioText className='flow'>
        <BioName>Max David</BioName>
        <h4>
          UX Engineer student approaching design from a technical standpoint.
        </h4>
        <div className='subtitle'>Currently located in San Francisco.</div>
        <BioContact className='mono'>
          <a href='mailto:me@maxdavid.com'>get in contact</a>
        </BioContact>
        <BioLinksContainer>
          <BioLink
            href='https://github.com/maxdavid'
            rel='noopener noreferred'
            target='_blank'
            title='GitHub'
          >
            <div className='container'>
              <h6>Some of my Code</h6>
              <h4>GitHub</h4>
            </div>
          </BioLink>
          <BioLink
            href='https://www.linkedin.com/in/maxdavid/'
            rel='noopener noreferred'
            target='_blank'
            title='LinkedIn'
          >
            <div className='container'>
              <h6>Connect if you Want</h6>
              <h4>LinkedIn</h4>
            </div>
          </BioLink>
        </BioLinksContainer>
      </BioText>
      <BioImage>
        <img src={maxHeadshotSquare} alt='headshot of Max David' />
      </BioImage>
      <FunShapes />
    </StyledBio>
  );
};

const BioLinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 3em;
  & > * + * {
    margin-left: 1em;
  }
`;

const BioLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: block;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.grayAccent};
  border-radius: 5px;
  transition: all 0.25s ease;
  position: relative;

  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .container {
    padding: 10px;
  }

  h6 {
    line-height: 1;
    font-weight: 400;
    margin: 0;
  }

  h4 {
    line-height: 1.2;
    font-weight: 800;
    margin: 0;
  }

  &:hover {
    transition: all 0.25s ease;
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.yellowAccent};
  }

  &::after {
    display: block;
    font-weight: 900;
    height: 100%;
    content: '>';
    font-size: 40px;
    padding: 0 10px;
    border-right: 5px solid ${({ theme }) => theme.yellowAccent};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;

const StyledBio = styled.div`
  width: 100%;
  height: 90vh;

  display: grid;
  grid-template-columns: 6fr 4fr;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const BioName = styled.h2`
  font-weight: 400;
  font-family: ${({ theme }) => theme.navText};
  border-bottom: 0.4rem solid ${({ theme }) => theme.yellowAccent};
  padding-bottom: 1.8rem;
`;

const BioImage = styled.div`
  width: 100%;

  img {
    object-fit: contain;
    border-radius: 50%;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const BioText = styled.div`
  width: 100%;
  padding: 0 32px 32px 0;
`;

const BioContact = styled.h5``;
