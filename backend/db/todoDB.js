const mongoose = require("mongoose");
const { MONGO_KEY } = process.env;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_KEY);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

module.exports = { connectDB };
