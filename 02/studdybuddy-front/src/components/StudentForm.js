import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { EditButton } from 'components/EditButton';
import { Average } from 'components/Average';
import { getGradesAvg } from 'helpers/gradesAvg';
import * as yup from 'yup';

const Wrapper = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  position: relative;
  overflow-y: scroll;
`;

const Title = styled.h2`
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

const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 150px 50px 50px;
`;

const Input = styled.input`
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

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
`;

const SaveButton = styled.button`
  background-color: #FFD84F;
  border-radius: 50px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
`

const AddScoreWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ScoresWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;

const Scores = styled.div`
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

const Field = styled.div`
  display: inline-block;
  margin-right: 30px;
`;

let grade = yup.number();
grade
  .integer('Ocena musi być liczbowa')
  .positive('Ocena musi być liczbą dodatnią')
  .min(1, 'Ocena musi być wyższa od 0')
  .max(6, 'Ocena musi być niższa od 7');

const StudentForm = () => {
  const [scores, setScores] = useState([4,2,3,4,4,3,4]);
  const [scoreInputValue, setScoreInputValue] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log({ ...data, scores });
  const [average, setAverage] = useState();

  useEffect(() => {
    setScores([4,2,3,4,4,3,4]);
  }, []);

  useEffect(() => {
    setAverage(getGradesAvg(scores));
  }, [scores])

  const handleScoreInputChange = (e) => {
      setScoreInputValue(e.target.value);
  }

  const handleAddGrade = () => {
    setScores([...scores, parseInt(scoreInputValue)])
    setScoreInputValue('');
  }

  return (
    <Wrapper>
      <Title>Dodaj ucznia</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field><Label>Imię</Label>
          <Input id="name" name="name" ref={register}/></Field>
        <Field><Label>Grupa</Label>
          <Input id="group" name="group" ref={register}/></Field>

        <Field><Label>Wiek</Label>
          <Input id="age" name="age" ref={register}/></Field>
        <Field><Label>Dodaj ocenę</Label>
          <AddScoreWrapper>
            <Input id="score" name="score" value={scoreInputValue} onChange={handleScoreInputChange} />
            <EditButton type="button" onClick={handleAddGrade}>+</EditButton>
          </AddScoreWrapper></Field>
        <ScoresWrapper>
          <Scores>
            <p>Oceny</p>
            <p>{scores.join(', ')}</p>
          </Scores>
          <Average value={average}>{average}</Average>
        </ScoresWrapper>
        <SaveButton type="submit">zapisz</SaveButton>
      </Form>
    </Wrapper>
  );
};

StudentForm.propTypes = {};

export default StudentForm;
