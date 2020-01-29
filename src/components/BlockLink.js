import React from 'react';
import styled from 'styled-components';

export const BlockLink = props => {
  let disabled = props.disabled ? { disabled: 'disabled' } : {};
  return (
    <StyledBlockLink
      href={props.href}
      title={props.title}
      description={props.description}
      {...disabled}
      rel='noopener noreferred'
      target='_blank'
    >
      <div className='container'>
        <h6>{props.description}</h6>
        <h4>{props.title}</h4>
      </div>
    </StyledBlockLink>
  );
};

export const StyledBlockLinksContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 3em;
  & > * + * {
    margin-left: 1em;
  }
`;

export const StyledBlockLink = styled.a`
  text-decoration: none;
  display: block;
  background-color: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.grayAccent};
  border-radius: 5px;
  transition: all 0.25s ease;
  position: relative;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  -webkit-box-shadow: ${({ theme }) => theme.cardBoxShadow};
  -moz-box-shadow: ${({ theme }) => theme.cardBoxShadow};
  box-shadow: ${({ theme }) => theme.cardBoxShadow};

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
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.grayAccent : theme.yellowAccent};
  }

  &::after {
    display: block;
    font-weight: 900;
    height: 100%;
    content: '>';
    font-size: 40px;
    padding: ${({ description }) =>
      description ? '10px 10px 0 10px' : '0 10px'};
    border-right: 5px solid ${({ theme }) => theme.yellowAccent};
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
`;
