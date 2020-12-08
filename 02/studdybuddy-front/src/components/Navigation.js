import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as AddStudentIcon } from 'assets/icons/add_student.svg';

const StyledNav = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  li {
    padding: 25px 0 5px;
  }
  
  a.selected path {
    fill: #4A4A4A;
  }
`

const StyledLogo = styled.div`
  margin-top: 40px;
  background-color: #FFD84F;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navigation = () => (
  <StyledNav>
    <StyledLogo>
      <img src={process.env.PUBLIC_URL + '/logo.svg'} />
    </StyledLogo>
    <ul>
      <li>
        <NavLink exact activeClassName="selected" to="/"><HomeIcon /></NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/add-student"><AddStudentIcon /></NavLink>
      </li>
    </ul>
  </StyledNav>
);

Navigation.propTypes = {};

export default Navigation;
