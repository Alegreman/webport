import React from 'react';
import LINKS from '../data/links';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const A = styled.a`
  text-decoration: none;
  font-family: RobotoCondensed;
  color: #000;
  font-style: bold;
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

const Link = props => {
  const { image, link } = props.link;
  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt='social-profile'
          style={{ width: 45, height: 45, margin: 10 }}
        />
      </a>
    </span>
  );
};

const Links = () => (
  <div className='media'>
    <h2>Contact Me:</h2>
    <h3>If you want to talk about something email me at:</h3>
    <div>
      <A href='mailto:jorgealegriadev@gmail.com'>jorgealegriadev@gmail.com</A>
    </div>

    <div>
      {LINKS.map(LINK => (
        <Link key={LINK.id} link={LINK} />
      ))}
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

export default Links;
