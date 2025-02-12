import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/todo")
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
};
