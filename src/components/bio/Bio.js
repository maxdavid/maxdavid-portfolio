import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

import { BlockLink, StyledBlockLinksContainer } from '../BlockLink';
import { maxHeadshot, maxHeadshotSquare } from './assets';

export const Bio = props => {
  return (
    <StyledBio>
      <BioText className='flow'>
        <BioName>Max David</BioName>
        <h4>
          UX Engineer approaching design from a technical angle and a
          hospitality mindset.
        </h4>
        <div className='subtitle'>Currently located in San Francisco.</div>
        {/* <BioContact className='mono'>
          <a href='mailto:me@maxdavid.com'>✎ get in contact</a>
        </BioContact> */}
        <StyledBlockLinksContainer>
          <BlockLink
            href='https://github.com/maxdavid'
            title='GitHub'
            description='Some of my Code'
          />
          <BlockLink
            href='mailto:me@maxdavid.com'
            title='Email me!'
            description='Shoot me a message'
          />
        </StyledBlockLinksContainer>
      </BioText>
      <BioImage>
        <img src={maxHeadshotSquare} alt='headshot of Max David' />
      </BioImage>
    </StyledBio>
  );
};

const StyledBio = styled.div`
  width: 100%;
  height: 90vh;
  min-height: 450px;

  margin-bottom: 20vh;

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

  h4 {
    font-size: 3.2rem;

    @media ${device.tablet} {
      font-size: 2.7rem;
    }
  }
`;

const BioContact = styled.h5``;
