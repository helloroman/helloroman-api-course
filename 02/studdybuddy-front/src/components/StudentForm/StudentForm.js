import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { EditButton } from 'components/EditButton';
import { Average } from 'components/Average';
import { getGradesAvg } from 'helpers/gradesAvg';
import * as yup from 'yup';
import { Title, Wrapper } from 'components/SchoolNews/SchoolNews.styles';
import {
  AddScoreWrapper,
  Field,
  Form,
  Input,
  Label, SaveButton,
  Scores,
  ScoresWrapper
} from 'components/StudentForm/StudentForm.styles';

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
