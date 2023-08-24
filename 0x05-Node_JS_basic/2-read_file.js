const fs = require('fs');

const path = '/home/vagrant/alx-backend-javascript/0x05-Node_JS_basic/database.csv'
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

  if (lines.length === 0) {
    throw new Error('Cannot load the database');
  }

  console.log(`Number of students: ${lines.length - 1}`);

  const headings = lines[0].split(',');

  headings.forEach((heading, index) => {
    if (index !== 0) {
      const students = lines.slice(1).map(line => line.split(',')[index]);
      console.log(`Number of students in ${heading}: ${students.length}. List: ${students.join(', ')}`);
      }
    });

  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents
