import portfolioImage from '../assets/portfolio.png';
import githubImage from '../assets/github-finder.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Portfolio',
    description:
      'Portfolio website to display a little info about me, my background, contact and some projects',
    link: 'https://github.com/Alegreman/portfolio',
    image: portfolioImage,
    liveLink: 'http://alegriadev.com',
    technologies: 'REACT | STYLED COMPONENTS'
  },
  {
    id: 2,
    title: 'Github Finder',
    description: 'Website to search github profiles and consult info',
    link: 'https://github.com/Alegreman/github-finder',
    image: githubImage,
    liveLink: 'http://github.alegriadev.com',
    technologies: 'REACT | STYLED COMPONENTS | REDUCER'
  }
];

export default PROJECTS;
