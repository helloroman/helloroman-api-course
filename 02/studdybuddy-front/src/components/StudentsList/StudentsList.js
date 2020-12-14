import React, { useState } from 'react';
import StudentProfile from 'components/StudentProfile/StudentProfile';
import { Wrapper } from 'components/SchoolNews/SchoolNews.styles';

const StudentsList = () => {
  const [students, setStudents] = useState([
    {
      name: 'Fake',
      age: 32,
      group: 'Fake Group',
      grades: [2,5,4,4,5,5],
    }
  ]);

  return (
    <Wrapper>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
      <StudentProfile studentData={students[0]}/>
    </Wrapper>
  );
}

StudentsList.propTypes = {};

export default StudentsList;
