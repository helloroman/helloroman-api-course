import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';
import { ReactComponent as AddStudentIcon } from 'assets/icons/add_student.svg';
import { StyledLogo, StyledNav } from 'components/Navigation/Navigation.styles';

const Navigation = () => (
  <StyledNav>
    <StyledLogo>
      <img src={process.env.PUBLIC_URL + '/logo.svg'}  alt="Logo"/>
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
