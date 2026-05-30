const express = require("express");
const router = express.Router();

// Danh sách sinh viên (GET)
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Nguyen Van A" }]);
});

// Thêm sinh viên (POST)
router.post("/", (req, res) => {
  const student = req.body;
  res.json({ message: "Đã thêm sinh viên", student });
});

// Sửa sinh viên (PUT)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const student = req.body;
  res.json({ message: `Đã sửa sinh viên ${id}`, student });
});

// Xóa sinh viên (DELETE)
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Đã xóa sinh viên ${id}` });
});

module.exports = router;
