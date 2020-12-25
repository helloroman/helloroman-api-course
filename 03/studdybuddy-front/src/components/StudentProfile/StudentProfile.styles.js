import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 30px;
  width: 95%;
  height: 150px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 25px -20px rgba(0, 0, 0, .1);
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 0.35fr 1fr;
  grid-gap: 0 10px;
`;



export const Content = styled.div`
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 2 / 2;
  
  p {
    margin: 0;
    font-size: 15px;
  }
`;

export const NameSection = styled.div`
  display: flex;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: 30px;
  }
`;
