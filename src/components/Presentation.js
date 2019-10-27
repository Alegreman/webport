import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';

import logo from '../assets/logo.png';
import cv from '../assets/cv.pdf';

const Intro = styled.p`
  margin: auto 12rem;
  font-family: RobotoCondensed;
  text-align: justify;
  font-size: 2rem;
  position: center;
`;

const Name = styled.h1`
  font-family: EconomicaBold;
  font-size: 3rem;
  font-weight: bold;
  padding: auto 3rem;
  text-align: justify;
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
const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Container = styled.div`
  height: 100%;
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
`;

class Presentation extends Component {
  state = { displayBio: false };

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <Container>
        <Intro>
          <Name>Hello</Name>
          <p>My Name is Jorge.</p>
          <Title />
          <p>I'm always looking forward to working on meaningful projects.</p>
        </Intro>
        <Button>
          <A href={cv} target='_blank'>
            CV
          </A>
        </Button>
        <Button>
          <A href='https://github.com/Alegreman/' target='_blank'>
            Github
          </A>
        </Button>
        <Footer />
      </Container>
    );
  }
}

const Footer = () => {
  return (
    <Foot>
      <img src={logo} alt='logo' />
      <p>COPYRIGHT © 2019, ALEGRÍA</p>
    </Foot>
  );
};

export default Presentation;
