export default function getStudentsByLocation(student, city) {
  const state = student.filter((students) => students.location === city);
  return state;
}
