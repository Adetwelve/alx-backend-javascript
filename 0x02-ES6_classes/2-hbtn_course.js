/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') { throw new TypeError('Name must be a string'); }
    if (typeof length !== 'number') { throw new TypeError('Length must be a number'); }
    if (!Array.isArray(students) || !students.every((element) => typeof element === 'string')) {
      throw new TypeError('Student must be an array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this._name = name;
  }

  set length(length) {
    this._length = length;
  }

  set students(students) {
    this._students = students;
  }
}