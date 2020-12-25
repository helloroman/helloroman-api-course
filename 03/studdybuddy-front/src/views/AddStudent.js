import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StudentForm from 'components/StudentForm/StudentForm';

const Wrapper = styled.div`
  padding: 40px;
  max-width: 800px;
`

const AddStudent = () => {
  return (
    <Wrapper>
      <StudentForm />
    </Wrapper>
  );
};

export default AddStudent;
