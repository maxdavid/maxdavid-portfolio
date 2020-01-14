import React, { useEffect } from 'react';
import { StyledProjectOutline } from './styled';
import { Footer, BlockLink, StyledBlockLinksContainer } from '../../components';
import { thankYouDemo } from './assets/thankYou';

export const ThankYouOutline = () => {
  useEffect(() => {
    document.title = 'Thank You Generator';
  }, []);

  return (
    <div>
      <StyledProjectOutline>
        <figure>
          <img
            src={thankYouDemo}
            alt='demo showing off the functionality of the thank you app'
          />
        </figure>
        <h2 className='header'>
          One-page app written in JavaScript for making art like the classic
          take-out bag we all know and love.
        </h2>
        <div className='content centered'>
          <div className='project-links'>
            <BlockLink
              href='http://garden.maxdavid.com/thank-you'
              title='Live Demo'
            />
            <BlockLink
              href='https://github.com/maxdavid/thank-you'
              title='Code on GitHub'
            />
          </div>
          <h4>
            Also available on{' '}
            <a
              href='https://thank-you-generator.glitch.me'
              rel='noopener noreferred'
              target='_blank'
            >
              Glitch.me
            </a>
          </h4>
        </div>
        {/* end .content */}
      </StyledProjectOutline>
      <Footer />
    </div>
  );
};
