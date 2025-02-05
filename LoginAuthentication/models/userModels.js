import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: 5,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//method for hashing password
userSchema.pre("save", async function (next) {
  const user = this;
  //checking if password modified or not!
  if (!user.isModified("password")) return next();
  //if password modified then hash th password
  user.password = await bcrypt.hash(user.password, 8);
  next();
});

export const User = mongoose.model("User", userSchema);
