import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Side_drawer = styled.nav`
  height: 100%;
  background-color: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  & ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & a {
    color: #521751;
    text-decoration: none;
    font-size: 1.2rem;
  }
  & li {
    margin: 0.5rem 0;
  }
  & :hover {
    color: #fa923f;
  }
  & :active {
    color: #fa923f;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const sideDrawer = props => (
  <Side_drawer>
    <ul>
      <Link to='/'>
        <li>HOME</li>
      </Link>
      <Link to='/about'>
        <li>ABOUT</li>
      </Link>
      <Link to='/portfolio'>
        <li>PORTFOLIO</li>
      </Link>
      <Link to='/contact'>
        <li>CONTACT</li>
      </Link>
    </ul>
  </Side_drawer>
);

export default sideDrawer;
