const mongoose = require("mongoose");
const { Todo } = require("../models/todo.model");

const getAllToDo = async (req, res) => {
  try {
    const result = await Todo.find({});
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createNewToDo = async (req, res) => {
  const todo = req.body;

  if (!todo.title) {
    return res
      .status(400)
      .json({ succsess: false, message: "Title field is required." });
  }

  try {
    const result = await Todo.create({ ...todo });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    console.error("Error in createNewToDo:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateToDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    const updatedToDo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "ToDo updated successfully",
      data: updatedToDo,
    });
  } catch (error) {
    console.error("Error in updateToDo:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
const deleteToDo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Product Id" });
  }
  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "ToDo deleted successfully",
    });
  } catch (error) {
    console.error("Error in Delete todo:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { getAllToDo, createNewToDo, updateToDo, deleteToDo };
