import styled from 'styled-components';

export const StyledNav = styled.nav`
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

export const StyledLogo = styled.div`
  margin-top: 40px;
  background-color: #FFD84F;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
