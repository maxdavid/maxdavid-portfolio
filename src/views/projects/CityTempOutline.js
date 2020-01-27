import React, { useEffect } from 'react';
import { StyledProjectOutline } from './styled';
import { Footer, BlockLink } from '../../components';
import { citytempDemo } from './assets/citytemp';

export const CityTempOutline = () => {
  useEffect(() => {
    document.title = 'Pebble CityTemp';
  }, []);

  return (
    <div>
      <StyledProjectOutline>
        <figure className='hero'>
          <img
            className='rounded'
            src={citytempDemo}
            alt='Demo showing off different temperature modes and cities for CityTemp'
          />
        </figure>
        <h2 className='header'>
          GPS-enabled temperature watchface for the Pebble smartwatch.
        </h2>
        <div className='content'>
          <div className='project-links'>
            <BlockLink
              href='https://github.com/maxdavid/pebble-citytemp'
              title='Code on GitHub'
              description='Docs &amp; Installation'
            />
            <BlockLink
              href='citytemp/citytemp.pbw'
              title='Download the App'
              description='Compiled PBW File'
            />
          </div>
          <h3>Description</h3>
          <p>
            Temperature watchface for the Pebble smart watch. Uses GPS from
            bluetooth connected smartphone to query{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://openweathermap.org/'
            >
              Open Weather Map
            </a>{' '}
            to get local temperature and conditions. Comes with graphics for 9
            different weather conditions and 40 different cities.
          </p>
          <p>
            Compatible with the Pebble Classic, Steel, Time, Time Steel, and
            Time Round watches. Consult the official{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://rebble.io/howto'
            >
              Rebble HowTo guide
            </a>{' '}
            for installation instructions.
          </p>
          <h3>Pebble Background</h3>
          <p>
            Before the Apple Watch or Wear OS,{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://en.wikipedia.org/wiki/Pebble_(watch)'
            >
              Pebble
            </a>{' '}
            ruled the smartwatch scene as the posterchild of scrappy Silicon
            Valley crowdfunding. By raising ~$40 million in three different
            Kickstarter campaigns, they gathered support from a dedicated group
            of fans.
          </p>
          <p>
            But by the end of 2016, sinking profits forced them to close. FitBit
            acquired most of their assets, but discontinued support and other
            online services on June 30, 2018.
          </p>
          <p>
            Fortunately that wasn't the end. A loose collective of enthusiasts
            formed{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://rebble.io/'
            >
              Rebble
            </a>
            , a group dedicated to continuing support for the Pebble smartwatch.
          </p>
          <h4>
            <a
              href='https://nl.ifixit.com/News/33398/rebble-with-a-cause-how-pebble-watches-got-their-amazing-afterlife'
              rel='noopener noreferred'
              target='_blank'
            >
              Read the Full Story
            </a>
          </h4>
        </div>
        {/* end .content */}
      </StyledProjectOutline>
      <Footer />
    </div>
  );
};
