export const getGradesAvg = (grades) => {
  if (!grades.length) return '0';
  const sum = grades.reduce((grade, acc) => {
    return acc += grade;
  }, 0);
  return (sum/grades.length).toFixed(1);
};
