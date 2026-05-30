class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

// Dữ liệu giả (mock data)
const students = [
  new Student(1, "Nguyen Van A", 20),
  new Student(2, "Tran Thi B", 21),
];

module.exports = { Student, students };
