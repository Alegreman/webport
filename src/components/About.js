import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const Intro = styled.p`
  align-items: center;
  margin: 1rem 2rem;
  line-height: 1.7rem;
  margin: 0 10rem;
  font-family: RobotoCondensed;
  text-align: justify;
  font-size: 1.3rem;
  padding: 0.5rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 1rem 1rem;
  }
`;

const List = styled.ul`
  columns: 2;
  text-align: left;
  align-items: center;
  width: 70%;
  margin: auto;
  font-weight: bold;
  font-family: RobotoCondensed;
  font-size: 2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
    width: 50%;
    margin: 1rem;
  }
`;

const Title = styled.p`
  font-family: EconomicaBold;
  font-size: 3rem;
  font-weight: bold;
  padding: auto 3rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.8rem;
    font-weight: bold;
    margin: 2rem;
    padding: 0 5px;
  }
`;

const Foot = styled.div`
  left: 0;
  bottom: 0;
  flex-shrink: 0;
  margin-top: 5em;
  position: fixed;
  align-content: center;
  width: 100%;
  text-align: center;
  & img {
    filter: drop-shadow(0 0 5px #000);
  }
  @media (max-width: 768px) {
    position: relative;
  }
  @media (min-width: 1000px) {
    position: relative;
  }
`;

const About = () => {
  return (
    <div className='about'>
      <Intro>
        I'm Jorge Alegría, I have a Bachelor degree in Computer Systems
        Engineering and <br />
        recently I have been focusing in Fullstack Web Development.
        <br />A couple of months before I graduated from college, I started to
        work with React and Node in various projects.
      </Intro>
      <Intro>
        I have used Javascript for almost 2 years now, Making school projects to
        learn fundamental and advanced concepts.
        <br />I have been working with React.JS and Node.Js environment and i
        have had fun.
      </Intro>
      <Intro>
        So to show off my skills I did some personal projects, to see my work go
        to Portfolio.
      </Intro>
      <Title>My stack of languages/technologies is:</Title>

      <List>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>JAVASCRIPT</li>
        <li>SASS</li>
        <li>WEBPACK</li>
        <li>REACT.JS</li>
        <li>REDUX</li>
        <li>STYLED COMPONENTS</li>
        <li>MongoDB</li>
        <li>NODE.JS & EXPRESS.JS</li>
      </List>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <Foot>
      <img src={logo} alt='logo' />
      <p>COPYRIGHT © 2019, ALEGRÍA</p>
    </Foot>
  );
};

export default About;
