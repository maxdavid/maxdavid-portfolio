import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../styles/deviceBreakpoints';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavlinks>
        <NavLink className='nav-home-link' to='/'>
          Max David
        </NavLink>
      </StyledNavlinks>
      <div />
      <StyledNavlinks>
        <a className='nav-resume-link' href='cv/max-david-resume.pdf'>
          Resume
        </a>
      </StyledNavlinks>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbarHeightDesktop};
  padding: 0 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 auto 1;

  font-family: ${props => props.theme.navText};
  font-size: ${props => props.theme.mediumFont};

  z-index: 9000;

  @media ${device.laptop} {
    background-color: ${props => props.theme.surface};

    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  }

  @media ${device.tablet} {
    height: ${({ theme }) => theme.navbarHeightTablet};
    padding: 0 16px;
  }
`;

const StyledNavlinks = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    text-decoration: none;
    color: inherit;

    &:hover {
      background-color: ${props => props.theme.yellowAccent};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
