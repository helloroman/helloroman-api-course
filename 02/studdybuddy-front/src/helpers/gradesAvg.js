export const getGradesAvg = (grades) => {
  const sum = grades.reduce((grade, acc) => {
    return acc += grade;
  }, 0);
  return (sum/grades.length).toFixed(1);
};
