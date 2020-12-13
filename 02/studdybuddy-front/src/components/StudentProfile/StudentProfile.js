import React from 'react';
import PropTypes from 'prop-types';
import { getGradesAvg } from 'helpers/gradesAvg';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { EditButton } from 'components/EditButton';
import { Average } from 'components/Average';
import { Content, NameSection, Wrapper } from 'components/StudentProfile/StudentProfile.styles';

const StudentProfile = ({ studentData: { name, group, age, grades } }) => {
  const avg = getGradesAvg(grades);

  return (
    <Wrapper>
      <Average value={avg}>{avg}</Average>
      <Content>
        <NameSection>
          <h2>{name}</h2>
          <EditButton><EditIcon/></EditButton>
        </NameSection>
        <p>Grupa: <b>{group}</b></p>
        <p>Wiek: <b>{age}</b></p>
      </Content>
    </Wrapper>
  );
};

StudentProfile.propTypes = {
  studentData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default StudentProfile;
