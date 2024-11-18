const express = require("express");
require("dotenv").config();

const { connectDB } = require("./db/todoDB");
const { todoRouter } = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/api/todos", todoRouter);

app.listen(3000, () => {
  connectDB();
});
