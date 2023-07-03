export default function getListStudentIds(studentId) {
  if (!Array.isArray(studentId)) {
    return [];
  }
  return studentId.map((student) => student.id);
}
