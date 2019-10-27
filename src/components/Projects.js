import React from 'react';
import PROJECTS from '../data/projects';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Projectt = styled.div`
  width: 300;
  margin: 10;
  margin-bottom: 100px;
  & img {
    max-width: 400px;
    max-height: 220px;
    align-items: center;
  }
  & img {
    filter: drop-shadow(0 0 10px #000);
  }
`;
const Foot = styled.div`
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  margin-top: 5em;
  position: relative;
  align-content: center;
  width: 100%;
  text-align: center;
  & img {
    filter: drop-shadow(0 0 5px #000);
  }
`;

const Title = styled.h3`
  font-family: EconomicaBold;
  src: url(assets/Economica-Bold.ttf);
`;
const Description = styled.p`
  font-family: RobotoCondensed;
  src: url(assets/RobotoCondensed-Light.ttf);
  font-weight: 800;
`;
const Button = styled.button`
  cursor: pointer;
  background: #003f5c;
  font-size: 2rem;
  border-radius: 3px;
  color: white;
  border: 2px solid #003f5c;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #ff6361;
    color: white;
    border: 2px solid #ff6361;
  }
`;
const Tech = styled.p`
  font-family: RobotoCondensed;
  src: url(assets/RobotoCondensed-Light.ttf);
  font-weight: 800;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-family: RobotoCondensed;
  font-size: 1.5rem;
`;

const Project = props => {
  const {
    title,
    image,
    description,
    link,
    liveLink,
    technologies
  } = props.project;
  return (
    <Projectt>
      <Title>{title}</Title>
      <img src={image} alt='profile' />
      <Description>{description}</Description>
      <Tech>{technologies}</Tech>
      <Button>
        <Link href={link} target='_blank'>
          SOURCE
        </Link>
      </Button>
      <Button>
        <Link href={liveLink} target='_blank'>
          DEMO
        </Link>
      </Button>
    </Projectt>
  );
};

const Projects = () => (
  <div className='project'>
    <h2>Portfolio</h2>
    <div>
      {PROJECTS.map(PROJECT => {
        return <Project key={PROJECT.id} project={PROJECT} />;
      })}
    </div>
    <Footer />
  </div>
);

const Footer = () => {
  return (
    <Foot>
      <img src={logo} alt='logo' />
      <p>COPYRIGHT © 2019, ALEGRÍA</p>
    </Foot>
  );
};

export default Projects;
