const express = require("express");
const router = express.Router();
const { Student, students } = require("../models/student");

// Danh sách sinh viên (GET)
router.get("/", (req, res) => {
  res.json(students);
});

// Thêm sinh viên (POST)
router.post("/", (req, res) => {
  const { id, name, age } = req.body;
  const newStudent = new Student(id, name, age);
  students.push(newStudent);
  res.json({ message: "Đã thêm sinh viên", student: newStudent });
});

// Sửa sinh viên (PUT)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;
  const student = students.find(s => s.id === id);
  if (student) {
    student.name = name;
    student.age = age;
    res.json({ message: `Đã sửa sinh viên ${id}`, student });
  } else {
    res.status(404).json({ message: "Không tìm thấy sinh viên" });
  }
});

// Xóa sinh viên (DELETE)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    res.json({ message: `Đã xóa sinh viên ${id}` });
  } else {
    res.status(404).json({ message: "Không tìm thấy sinh viên" });
  }
});

module.exports = router;
