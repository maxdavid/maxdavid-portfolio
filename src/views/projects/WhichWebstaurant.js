import React, { useEffect } from 'react';
import { StyledProjectOutline } from './styled';
import { Footer, BlockLink } from '../../components';
import { webstaurantDemo } from './assets/webstaurant';

export const WhichWebstaurantOutline = () => {
  useEffect(() => {
    document.title = 'Which Webstaurant?';
  }, []);

  return (
    <div>
      <StyledProjectOutline>
        <figure className='hero'>
          <img
            className='rounded'
            src={webstaurantDemo}
            alt="Demo of the 'Which Webstaurant?' AR filter"
          />
        </figure>
        <h2 className='header'>
          Spark AR filter made for WebstaurantStore in the style of the popular
          randomizer-style filters on social media.
        </h2>
        <div className='content'>
          <p>
            This filter was made in collaboration with{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://www.webstaurantstore.com/'
            >
              WebstaurantStore
            </a>{' '}
            to ride the wave of popularity from the very common randomizer-style
            filters on Instagram, with a tongue-in-cheek version of their own.
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
              href='https://github.com/maxdavid/spark-WhichWebstaurant'
              title='Code on GitHub'
              description='Code &amp; Textures'
            />
            <BlockLink
              href='https://www.instagram.com/a/r/?effect_id=2732931206802910'
              title='Coming Soon'
              description='Pending Facebook Approval'
              disabled
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
