import {
  testy,
  voluntierDemo,
  pythonQuest,
  pythonQuest2,
  soupDemo
} from './assets';

export const projects = [
  {
    title: 'VolunTier',
    description:
      'Researched, Designed, developed, and shipped a comprehensive web app in 6 weeks.',
    tags: 'UX Design, User Research, Frontend Engineering',
    image: voluntierDemo,
    imageAlt: 'mockup screens showing off the Voluntier app',
    route: '/voluntier'
  },
  {
    title: 'Python Quest',
    description:
      'A Multi-User Dungeon (MUD) made in 4 days using React, Hooks, and Django.',
    tags: 'Frontend Engineering, React, JavaScript',
    image: pythonQuest2,
    imageAlt:
      'a poster for Python Quest, stylized like classic dungeons & dragons box art'
  },
  {
    title: "I'll Serve Soup",
    description: 'A design sprint for a soup kitchen inventory management app.',
    tags: 'Visual Design, UX Research, Prototyping',
    image: soupDemo,
    imageAlt: "mockup screens showing off the I'll Serve Soup app"
  }
];
