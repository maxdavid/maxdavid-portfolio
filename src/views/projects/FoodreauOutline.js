import React, { useEffect } from 'react';
import { StyledProjectOutline } from './styled';
import { Footer, BlockLink } from '../../components';
import {
  foodreauIconWide,
  foodreauDemo,
  foodreauLayers
} from './assets/foodreau';

export const FoodreauOutline = () => {
  useEffect(() => {
    document.title = 'Foodreau Sketch Plugin';
  }, []);

  return (
    <div>
      <StyledProjectOutline>
        <figure className='hero'>
          <img
            className='rounded'
            src={foodreauIconWide}
            alt='Wide logo for Foodreau'
          />
        </figure>
        <h2 className='header'>
          Sketch plugin to fill text and image layers with recipe-related
          content. Useful for designing food-related layouts without resorting
          to Lorem Ipsum.
        </h2>
        <div className='content'>
          <div className='project-links single-link'>
            <BlockLink
              href='https://github.com/maxdavid/sketch-foodreau'
              title='Code on GitHub'
              description='Docs &amp; Advanced Usage'
            />
          </div>
          <h3>Installation</h3>
          <h4>Sketch plugin manager</h4>
          <p>
            In the 'Catalog' tab of{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://mludowise.github.io/Sketch-Plugin-Manager/'
            >
              Sketch Plugin Manager
            </a>{' '}
            search for 'Foodreau'
          </p>
          <h4>Runner</h4>
          <p>
            In the{' '}
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://sketchrunner.com/'
            >
              Runner
            </a>{' '}
            prompt, type <mark>install</mark>, then hit the Tab key, then type{' '}
            <mark>foodreau</mark>
          </p>
          <h4>Manual</h4>{' '}
          <p>
            <ul>
              <li>Download zip and extract</li>
              <li>
                In Sketch <mark>Plugins > Manage Plugins...</mark>
              </li>
              <li>
                Click the cog-wheel icon in lower right, and select{' '}
                <mark>Reveal Plugins Folder</mark>
              </li>
              <li>Move extracted zip to the Plugins directory</li>
            </ul>
          </p>
          <h3>Usage</h3>
          <figure className='full-width'>
            <img
              src={foodreauDemo}
              alt='Demo of the Foodreau plugin in Sketch'
            />
          </figure>
          <p>
            Can be used like other DataSupplier plugins. Right-click a layer to
            fill with recipe information, or use the toolbar Data dropdown.
          </p>
          <div className='grid-row'>
            <figure>
              <img
                src={foodreauLayers}
                alt='Example of appropriately named Foodreau layers in a Sketch file'
              />
            </figure>
            <div>
              <p>
                To fill text layers with the appropriate information, the text
                layer must be named accordingly.
              </p>
              <p>
                For more detailed information on this feature, refer to the
                layer documentation:
              </p>
              <div
                className='project-links'
                style={{ gridTemplateColumns: '1fr' }}
              >
                <BlockLink
                  href='https://github.com/maxdavid/sketch-foodreau/blob/master/docs/layer-names.md'
                  title='Layer Docs on GitHub'
                />
              </div>
            </div>
          </div>
          <h3>Recipe API</h3>
          <p>
            This plugin comes bundled with a number of offline recipes that be
            used without restriction. They can be found{' '}
            <a
              href='https://github.com/maxdavid/sketch-foodreau/blob/master/assets/backup/recipes.js'
              rel='noopener noreferrer'
              target='_blank'
            >
              here.
            </a>
          </p>
          <p>
            If the offline recipes are not enough, this plugin can also connect
            to{' '}
            <a
              href='https://spoonacular.com/food-api'
              rel='noopener noreferrer'
              target='_blank'
            >
              Spoonacular's recipe API.
            </a>{' '}
            Register for a freemium API key through{' '}
            <a
              href='https://rapidapi.com/spoonacular/api/recipe-food-nutrition/pricing'
              rel='noopener noreferrer'
              target='_blank'
            >
              RapidAPI.
            </a>
          </p>
          <p>
            In the plugin menu within Sketch, navigate to the Foodreau options
            and click <mark>Set API key...</mark>. Your key will persist between
            sessions.
          </p>
        </div>
        {/* end .content */}
      </StyledProjectOutline>
      <Footer />
    </div>
  );
};
