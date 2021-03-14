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
	Label,
	SaveButton,
	Scores,
	ScoresWrapper,
	Error,
} from 'components/StudentForm/StudentForm.styles';
import { api, endpoints } from 'api';

let grade = yup.number();
grade
	.integer('Ocena musi być liczbowa')
	.positive('Ocena musi być liczbą dodatnią')
	.min(1, 'Ocena musi być wyższa od 0')
	.max(6, 'Ocena musi być niższa od 7');

const StudentForm = () => {
	const [scores, setScores] = useState([]);
	const [scoreInputValue, setScoreInputValue] = useState('');
	const { register, handleSubmit, watch, errors } = useForm();
	const [average, setAverage] = useState();

	const onSubmit = ({ name, age, group }, e) => {
		//zamiast całego obiektu musimy dokonać destrukturyzacji żeby age zamienić na number
		api.post(endpoints.users, {
			name,
			group,
			age: parseInt(age, 10),
			grades: scores,
		})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
		e.target.reset();
		setScores([]);
	};

	useEffect(() => {
		setAverage(getGradesAvg(scores));
	}, [scores]);

	const handleScoreInputChange = (e) => {
		setScoreInputValue(e.target.value);
	};

	const handleAddGrade = () => {
		if (scoreInputValue) {
			setScores([...scores, parseInt(scoreInputValue)]);
		}
		setScoreInputValue('');
	};

	return (
		<Wrapper>
			<Title>Dodaj ucznia</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Field>
					<Label>Imię</Label>
					<Input
						id="name"
						name="name"
						ref={register({ required: true })}
					/>
					{errors.name && <Error>Podaj imię</Error>}
				</Field>
				<Field>
					<Label>Grupa</Label>
					<Input
						id="group"
						name="group"
						ref={register({ required: true })}
					/>
					{errors.group && <Error>Podaj grupę</Error>}
				</Field>

				<Field>
					<Label>Wiek</Label>
					<Input
						type="number"
						id="age"
						name="age"
						ref={register({ required: true })}
					/>
					{errors.age && <Error>Podaj wiek</Error>}
				</Field>
				<Field>
					<Label>Dodaj ocenę</Label>
					<AddScoreWrapper>
						<Input
							type="number"
							id="score"
							name="score"
							value={scoreInputValue}
							onChange={handleScoreInputChange}
							ref={register}
						/>
						<EditButton type="button" onClick={handleAddGrade}>
							+
						</EditButton>
					</AddScoreWrapper>
				</Field>
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
