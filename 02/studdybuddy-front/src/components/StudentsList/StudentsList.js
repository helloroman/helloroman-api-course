import React, { useState, useEffect } from "react";
import StudentProfile from "components/StudentProfile/StudentProfile";
import { Wrapper } from "components/SchoolNews/SchoolNews.styles";
import {api, endpoints} from "api";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    api
      .get(endpoints.users)
      .then(({ data }) => setStudents(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      {students.length ? (
        students.map((student) => (
          <StudentProfile key={student._id} studentData={student} />
        ))
      ) : (
        <h2>No students</h2>
      )}
    </Wrapper>
  );
};

StudentsList.propTypes = {};

export default StudentsList;
