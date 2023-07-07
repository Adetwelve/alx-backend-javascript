interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

class Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  
  constructor(firstName: string, lastName: string, age: number, location: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._location = location;
  }
}

const student1: Student = new Student('Adejumo', 'Adeniyi', 12, 'lekki');
const student2: Student = new Student('Iylode', 'Mamuro', 7, 'Ikeja');

studentList = {student1, student2};


