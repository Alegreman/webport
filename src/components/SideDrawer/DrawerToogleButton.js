import React from 'react';
import styled from 'styled-components';

const Toogle_button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  padding: 0;
  box-sizing: border-box;
`;
const Toggle_button__line = styled.div`
  width: 30px;
  height: 2px;
  background: white;
`;

const drawerToogleButton = props => (
  <Toogle_button onClick={props.click}>
    <Toggle_button__line />
    <Toggle_button__line />
    <Toggle_button__line />
  </Toogle_button>
);

export default drawerToogleButton;
