const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Trang chủ
app.get("/", (req, res) => {
  res.send("Hello Student CRUD!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
