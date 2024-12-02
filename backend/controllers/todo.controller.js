const mongoose = require("mongoose");
const { Todo } = require("../models/todo.model");
const { Httperror, ctrlWrapper } = require("../helpers");

const getAllToDo = async (req, res) => {
  const result = await Todo.find({});
  res.status(200).json({ success: true, data: result });
};

const createNewToDo = async (req, res) => {
  const todo = req.body;

  if (!todo.title) {
    throw Httperror(400, "Title field is required.");
  }

  const result = await Todo.create({ ...todo });
  res.status(201).json({ success: true, data: result });
};

const updateToDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  const updatedToDo = await Todo.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    message: "ToDo updated successfully",
    data: updatedToDo,
  });
};
const deleteToDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }

  await Todo.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "ToDo deleted successfully",
  });
};

module.exports = {
  getAllToDo: ctrlWrapper(getAllToDo),
  createNewToDo: ctrlWrapper(createNewToDo),
  updateToDo: ctrlWrapper(updateToDo),
  deleteToDo: ctrlWrapper(deleteToDo),
};
