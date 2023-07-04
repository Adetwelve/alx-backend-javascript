export default function getStudentIdsSum(student) {
  const listStudentId = student.map((studentId) => studentId.id);
  const sum = listStudentId.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum;
}
