import styled from 'styled-components';
import { device } from '../../../styles/deviceBreakpoints';

export const StyledProjectOutline = styled.article`
  width: 100%;
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 300;

  .content {
    max-width: ${({ theme }) => theme.maxProjectWidth};
  }

  * {
    max-width: ${({ theme }) => theme.projectTextWidth};
    margin: 0 auto;
  }

  p {
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.projectTextWidth};
    margin-top: 1em;
  }

  h2 {
    width: 100%;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.projectTextWidth};
    font-size: 2.7rem;
    font-weight: 400;
    margin-top: 1em;
    text-align: justify;
    text-justify: inter-word;
  }

  .header {
    max-width: ${({ theme }) => theme.projectHeaderWidth};
  }

  .hero {
    width: 100%;
    /* max-width: ${({ theme }) => theme.maxProjectWidth}; */
    max-width: 1000px;
  }

  h3 {
    max-width: ${({ theme }) => theme.projectHeaderWidth};
    margin: 0 auto;
    background-color: ${({ theme }) => theme.yellowAccent};
    padding: 8px;
    margin-top: 4em;
  }

  h4 {
    max-width: ${({ theme }) => theme.projectTextWidth};
    margin: 0 auto;
    margin-top: 1.8em;
  }

  h6 {
    margin-top: 2em;
  }

  figure {
    width: 100%;
    object-fit: cover;
  }

  img {
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
    max-width: 100%;
  }

  .full-width {
    width: 100%;
    max-width: ${({ theme }) => theme.maxProjectWidth};
    margin-top: 2em;
    margin-bottom: 3em;

    & > * {
      width: 100%;
      max-width: ${({ theme }) => theme.maxProjectWidth};
    }
  }

  .project-links {
    height: 100px;
    margin-top: 10px;
    padding-top: 30px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
    align-items: center;

    * {
      margin: 0;
    }
  }

  .centered {
    width: 100%;
    text-align: center;
  }

  .grid-row {
    width: 100%;
    max-width: ${({ theme }) => theme.maxProjectWidth};
    margin-top: 2em;
    margin-bottom: 2em;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;

    & > * + * {
      margin-left: 2em;
    }
  }

  .hero .grid-row {
    width: 100%;
    max-width: 1000px;
  }

`;
