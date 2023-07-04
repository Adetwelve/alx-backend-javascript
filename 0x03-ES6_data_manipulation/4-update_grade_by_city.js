export default function updateStudentGradeByCity(students, city, newGrades) {
  const specificCity = students.filter((student) => student.location === city);
  const Updatestudent = specificCity.map((student) => {
    const gradesMatch = newGrades.find((grade) => grade.studentId === student.id);

    if (gradesMatch) {
      return {
        ...student,
        grade: gradesMatch.grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
  return Updatestudent;
}
