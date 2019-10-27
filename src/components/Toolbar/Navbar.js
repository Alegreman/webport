import React from 'react';
import styled from 'styled-components';
import DrawerToogleButton from '../SideDrawer/DrawerToogleButton';
import logo from '../../assets/Full_logo.png';
import { Link } from 'react-router-dom';

const Toolbar = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #003f5c;
  height: 56px;
`;
const Toolbar__navigation = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1rem;
`;
const Toolbar__logo = styled.div`
  margin: 1rem;
  & a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
`;
const Toolbar__navigation_items = styled.div`
  color: white;
  text-decoration: none;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  & li {
    padding: 0 0.5rem;
  }
  & a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
  }
  & :hover {
    color: #fa923f;
  }
  & :active {
    color: #fa923f;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Toolbar_toogle_button = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = props => (
  <Toolbar>
    <Toolbar__navigation>
      <Toolbar_toogle_button>
        <DrawerToogleButton click={props.drawerClickHandler} />
      </Toolbar_toogle_button>
      <Toolbar__logo>
        {' '}
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </Toolbar__logo>
      <Spacer />
      <Toolbar__navigation_items>
        <ul>
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
      </Toolbar__navigation_items>
    </Toolbar__navigation>
  </Toolbar>
);

export default Navbar;
