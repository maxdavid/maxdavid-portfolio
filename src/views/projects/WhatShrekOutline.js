import React, { useEffect } from 'react';
import { StyledProjectOutline } from './styled';
import { Footer, BlockLink } from '../../components';
import { shrekDemo } from './assets/shrek';

export const WhatShrekOutline = () => {
  useEffect(() => {
    document.title = 'What Shrek?';
  }, []);

  return (
    <div>
      <StyledProjectOutline>
        <figure className='hero'>
          <img
            className='rounded'
            src={shrekDemo}
            alt="Demo of the 'What Shrek?' AR filter"
          />
        </figure>
        <h2 className='header'>
          Spark AR filter to parody the popular randomizer-style filters on
          social media.
        </h2>
        <div className='content'>
          <p>
            This filter was meant to parody the extremely popular 'What Pokémon
            Are You?' filter on Instagram. But instead of getting a Pokémon, you
            get a Shrek.
          </p>
          <p>
            As of writing (January 2020) the filter has been shared{' '}
            <mark>59,668 times.</mark>
          </p>
          <p>
            Scripted &amp; textured in Facebook's{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://sparkar.facebook.com/ar-studio/'
            >
              Spark AR Studio
            </a>
            .
          </p>
          <div className='project-links'>
            <BlockLink
              href='https://github.com/maxdavid/spark-WhatShrek'
              title='Code on GitHub'
              description='Code &amp; Textures'
            />
            <BlockLink
              href='https://www.instagram.com/a/r/?effect_id=2732931206802910'
              title='Open in Instagram'
              description='Try it Out'
            />
          </div>
          <h3> </h3>
          <p></p>
        </div>
        {/* end .content */}
      </StyledProjectOutline>
      <Footer />
    </div>
  );
};
