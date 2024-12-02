const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./db/todoDB");
const todoRouter = require("./routes/todo.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(3001, () => {
  connectDB();
});
