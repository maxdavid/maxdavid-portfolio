import {
  testy,
  voluntierDemo,
  pythonQuest,
  pythonQuest2,
  pythonQuestDemo,
  soupDemo,
  thankYouDemo,
  shrekDemo,
  webstaurantDemo,
  treasureClientDemo,
  foodreauDemo,
  citytempDemo,
  dotfilesDemo,
  gitsnapDemo
} from './assets';

export const projects = [
  {
    projectTitle: 'VolunTier',
    description:
      'Researched, Designed, developed, and shipped a comprehensive web app in 6 weeks.',
    tags: ['UX Design', 'User Research', 'Frontend Engineering'],
    image: voluntierDemo,
    imageAlt: 'mockup screens showing off the Voluntier app',
    route: '/voluntier',
    size: 'large'
  },
  {
    projectTitle: "I'll Serve Soup",
    description: 'A design sprint for a soup kitchen inventory management app.',
    tags: ['Visual Design', 'UX Research', 'Prototyping'],
    image: soupDemo,
    imageAlt: "mockup screens showing off the I'll Serve Soup app",
    size: 'large'
  },
  {
    projectTitle: 'Which Webstaurant?',
    description:
      'Spark AR filter made for WebstaurantStore in the style of the popular randomizer-style filters on social media.',
    tags: ['Augmented Reality', 'JavaScript', 'Spark', 'Fun'],
    image: webstaurantDemo,
    imageAlt: "demo of the 'Which Webstaurant?' AR filter",
    route: '/which-webstaurant',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Thank You Generator',
    description:
      'One-page app written in JavaScript for making art like the classic take-out bag we all know and love.',
    tags: ['Frontend Engineering', 'JavaScript', 'CSS', 'Fun'],
    image: thankYouDemo,
    imageAlt: 'demo of the THANK YOU bag project',
    route: 'thank-you',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'What Shrek?',
    description:
      'Spark AR filter to parody the popular randomizer-style filters on Instagram and social media.',
    tags: ['Augmented Reality', 'JavaScript', 'Spark', 'Fun'],
    image: shrekDemo,
    imageAlt: "demo of the 'What Shrek?' AR filter",
    route: '/what-shrek',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'CityTemp',
    description:
      'Temperature watchface for the Pebble smart watch, with graphics for 9 weather conditions and 40 different cities.',
    tags: ['Wearable Technology', 'JavaScript', 'C', 'IoT'],
    image: citytempDemo,
    imageAlt:
      'Demo of CityTemp showing off different weather graphics and cities',
    route: '/citytemp',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Foodreau Sketch Plugin',
    description: 'Sketch plugin for populating designs with real food recipes.',
    tags: ['Sketch', 'Plugin', 'JavaScript', 'UX'],
    image: foodreauDemo,
    imageAlt: 'demo of using foodreau in sketch',
    route: '/foodreau',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Python Quest',
    description:
      'A Multi-User Dungeon (MUD) made in 4 days using React, Hooks, and Django.',
    tags: ['Frontend Engineering', 'React', 'JavaScript', 'CS', 'Graph Theory'],
    image: pythonQuestDemo,
    imageAlt:
      'a poster for Python Quest, stylized like classic dungeons & dragons box art',
    route: 'https://github.com/muddy-pythonistas/MUD-frontend',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Treasure Client',
    description:
      'Comprehensive React client for the Lambda treasure hunt made from scratch in four days.',
    tags: ['Frontend Engineering', 'React', 'JavaScript', 'CS', 'Graph Theory'],
    image: treasureClientDemo,
    imageAlt: 'snippet of the treasure client UI showing player info',
    route: 'https://github.com/maxdavid/react-treasure-hunt',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'gitsnap',
    description: 'NPM package that snaps a laptop selfie on every git commit.',
    tags: ['JavaScript', 'npm', 'git', 'Fun'],
    image: gitsnapDemo,
    imageAlt: 'Gitsnap illustrative graphic',
    route: 'https://github.com/maxdavid/gitsnap',
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Dotfiles',
    description:
      'My command line dotfiles, preserved here for posterity and inspiration.',
    tags: ['Linux', 'zsh', 'CS', 'System Administration'],
    image: dotfilesDemo,
    imageAlt: 'Screengrab of neofetch',
    route: 'https://github.com/maxdavid/dotfiles',
    size: 'small',
    imageCover: true
  }
];
