const express = require("express");
const {
  getAllToDo,
  createNewToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get("/", getAllToDo);

todoRouter.post("/", createNewToDo);

todoRouter.put("/:id", updateToDo);

todoRouter.delete("/:id", deleteToDo);

module.exports = { todoRouter };
