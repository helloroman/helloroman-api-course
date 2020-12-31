import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StudentsList from 'components/StudentsList/StudentsList';
import SchoolNews from 'components/SchoolNews/SchoolNews';

const Wrapper = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 50px;
  height: 90vh;
`

const Root = () => {
  return (
    <Wrapper>
      <StudentsList />
      <SchoolNews />
    </Wrapper>
  );
};

export default Root;
