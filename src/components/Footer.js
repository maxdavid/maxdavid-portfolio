import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/deviceBreakpoints';

export const Footer = () => {
  return (
    <StyledFooter className='mono horz-flow'>
      <span>copyright max david 2019 // hit me up:</span>
      <a href='mailto:me@maxdavid.com'>me@maxdavid.com</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 32px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.darkGray};

  @media ${device.tablet} {
    display: none;
  }
`;
