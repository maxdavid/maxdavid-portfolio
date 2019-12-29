import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

import FunShapes from './FunShapes';
import { maxHeadshot } from './assets';

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
      </BioText>
      <BioImage>
        <img src={maxHeadshot} alt='headshot of Max David' />
      </BioImage>
      <FunShapes />
    </StyledBio>
  );
};

const StyledBio = styled.div`
  width: 100%;
  height: 90vh;

  display: grid;
  grid-template-columns: 6fr 4fr;
  align-items: center;

  @media ${device.tablet} {
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
