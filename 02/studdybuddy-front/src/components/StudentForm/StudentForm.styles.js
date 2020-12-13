import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  position: relative;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  position: absolute;
  left: 0;
  margin-top: 50px;
  padding-right: 20px;
  background-color: #FFD84F;
  width: 120px;
  height: 70px;
  text-align: right;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 150px 50px 50px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  font-size: 17px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  
  &:focus {
    outline: none;
  }
  
  &#score {
    width: 100px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const SaveButton = styled.button`
  background-color: #FFD84F;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
`

export const AddScoreWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ScoresWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

export const Scores = styled.div`
  border-radius: 15px;
  width: 100%;
  margin-right: 30px;
  height: 90px;
  padding: 20px;
  background-color: #F5F2F0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p {
    margin: 5px 0;
  }
  
  p:first-child {
    font-size: 15px;
  }
  
  p:last-child {
    font-size: 20px;
  }
`;

export const Field = styled.div`
  display: inline-block;
  margin-right: 30px;
`;
