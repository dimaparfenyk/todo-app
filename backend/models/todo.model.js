const { model, Schema } = require("mongoose");

const schema = new Schema(
  {
    title: { type: String, required: true },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const Todo = model("Todo", schema);

module.exports = { Todo };