import React, { useState, useEffect } from "react";
import StudentProfile from "components/StudentProfile/StudentProfile";
import { Wrapper } from "components/SchoolNews/SchoolNews.styles";
const axios = require("axios").default;

const StudentsList = () => {
  const [students, setStudents] = useState([
   
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  },[]);

  return (
    <Wrapper>
      {students.length ? students.map(student=><StudentProfile key={student.id} studentData={student} />) : <h2>No students</h2>}
    </Wrapper>
  );
};

StudentsList.propTypes = {};

export default StudentsList;
