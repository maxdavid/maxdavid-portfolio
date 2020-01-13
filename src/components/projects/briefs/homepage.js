import {
  testy,
  voluntierDemo,
  pythonQuest,
  pythonQuest2,
  pythonQuestDemo,
  soupDemo,
  thankYouDemo,
  shrekDemo,
  webstaurantDemo
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
    size: 'large',
    comingSoon: true
  },
  {
    projectTitle: 'Which Webstaurant?',
    description:
      'Spark AR filter made for WebstaurantStore in the style of the popular randomizer-style filters on social media.',
    tags: ['Augmented Reality', 'JavaScript', 'Spark', 'Fun'],
    image: webstaurantDemo,
    imageAlt: "demo of the 'Which Webstaurant?' AR filter",
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Thank You Generator',
    description:
      'Simple one-page app for making text like the classic take-out bag we all know and love.',
    tags: ['Frontend Engineering', 'JavaScript', 'CSS', 'Fun'],
    image: thankYouDemo,
    imageAlt: 'demo of the THANK YOU bag project',
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
    size: 'small',
    imageCover: true
  },
  {
    projectTitle: 'Python Quest',
    description:
      'A Multi-User Dungeon (MUD) made in 4 days using React, Hooks, and Django.',
    tags: ['Frontend Engineering', 'React', 'JavaScript'],
    image: pythonQuestDemo,
    imageAlt:
      'a poster for Python Quest, stylized like classic dungeons & dragons box art',
    size: 'small',
    imageCover: true,
    comingSoon: true
  }
];
