import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';
import { boomerang, squiggly } from './assets';

export const FunShapes = () => {
  return (
    <ShapeContainer>
      <BlueCircle />
      <RedSquare />
      <PurpleTriangle />
      <GreenSquiggly />
      <OrangeSteps rotation='30deg' top='188%'>
        <span />
        <span />
        <span />
      </OrangeSteps>
      <OrangeSteps rotation='55deg' top='191%' left='9%' delay='0.3s'>
        <span />
        <span />
        <span />
      </OrangeSteps>
    </ShapeContainer>
  );
};

const ShapeContainer = styled.div`
  position: absolute;
  z-index: -9000;
  height: 100vh;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 700px;
  min-width: 1024px;

  /* Shape Variables */
  --blue-shape-color: rgba(138, 180, 248, 1);
  --red-shape-color: rgba(229, 115, 115, 1);
  --green-shape-color: rgba(129, 201, 149, 1);
  --yellow-shape-color: rgba(253, 214, 99, 1);
  --purple-shape-color: rgba(179, 157, 219, 1);
  --orange-shape-color: #ffb74d;

  --blue-circle-size: 60px;
  --red-square-size: 80px;

  span {
    position: absolute;
    display: block;
    content: '';
  }

  @media ${device.tablet} {
    /* display: none; */
  }
`;

const BlueCircle = styled.span`
  animation: blue-circle-animation-y 20s infinite
    cubic-bezier(0.2, 0.1, 0.21, 1);
  top: 4%;
  left: 6%;

  ::after {
    background-color: var(--blue-shape-color);
    height: var(--blue-circle-size);
    width: var(--blue-circle-size);
    border-radius: 50%;
    animation: blue-circle-animation-x 20s infinite
      cubic-bezier(0.3, 0.27, 0.07, 1.64);
    display: block;
    content: '';
  }

  @keyframes blue-circle-animation-x {
    50% {
      animation-timing-function: cubic-bezier(0.2, 0.1, 0.21, 1);
      transform: translateX(230px);
    }
  }

  @keyframes blue-circle-animation-y {
    50% {
      animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
      transform: translateY(120px);
    }
  }
`;

const RedSquare = styled.span`
  background-color: var(--red-shape-color);
  height: var(--red-square-size);
  width: var(--red-square-size);
  top: 13%;
  right: 3%;
  border-radius: 10%;
  animation: red-square-animation 30s infinite linear;

  @keyframes red-square-animation {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PurpleTriangle = styled.span`
  background-color: var(--purple-shape-color);
  -webkit-mask: url(${boomerang}) no-repeat bottom right;
  height: 260px;
  width: 200px;
  bottom: 2%;
  left: 40%;
  border-radius: 10%;
  transform-origin: 100% 87%;
  animation: purple-boomerang-animation 26s infinite ease-in-out;

  @keyframes purple-boomerang-animation {
    50% {
      transform: rotate(-80deg);
    }
  }
`;

const GreenSquiggly = styled.span`
  background-color: var(--green-shape-color);
  -webkit-mask: url(${squiggly}) repeat-y top left;
  height: 302px;
  width: 80px;
  bottom: -80%;
  right: 6%;
`;

const OrangeSteps = styled.span`
  --rotation: ${({ rotation }) => (rotation ? rotation : '0deg')};
  --top: ${({ top }) => (top ? top : '82%')};
  --left: ${({ left }) => (left ? left : '2%')};
  --delay: ${({ delay }) => (delay ? delay : '0s')};

  height: 95px;
  width: 120px;
  top: var(--top);
  left: var(--left);
  animation: orange-steps-animation 3s infinite ease-in-out var(--delay);
  transform-origin: 50% 50%;

  transform: rotate(var(--rotation));

  span {
    background-color: var(--orange-shape-color);
    position: absolute;
    display: block;
    content: '';
    width: 60px;
    height: 35px;
    top: 30px;
    left: 30px;
    border-radius: 5px;
  }

  span:first-child {
    top: 0px;
    left: 0px;
  }

  span:last-child {
    top: 60px;
    left: 60px;
  }

  @keyframes orange-steps-animation {
    50% {
      transform: rotate(calc(var(--rotation) + 20deg));
    }
  }
`;

export default FunShapes;
