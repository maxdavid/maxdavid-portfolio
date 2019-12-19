import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/deviceBreakpoints';

export const Footer = props => {
  return (
    <StyledFooter fixed={props.fixed} className='mono horz-flow'>
      <span>max david 2019 // looking for the old site?</span>
      <a href='http://old.maxdavid.com'>it's still around</a>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'static')};
  padding-top: ${({ fixed }) => (fixed ? 0 : '32px')};
  height: ${({ theme, fixed }) => (fixed ? theme.footerHeight : '64px')};
  bottom: 0;
  width: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.darkGray};

  @media ${device.tablet} {
    display: none;
  }
`;
