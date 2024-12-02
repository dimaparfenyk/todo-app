const mongoose = require("mongoose");
const { MONGO_KEY } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_KEY);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = { connectDB };
