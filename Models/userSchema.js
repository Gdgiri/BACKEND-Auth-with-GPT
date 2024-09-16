import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Avoid overwriting the model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
