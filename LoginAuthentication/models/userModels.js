import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  refreshToken: {
    type: String,
  },
});

////////////////////////////method for hashing and comparing password////////////////
userSchema.pre("save", async function (next) {
  const user = this;
  //checking if password modified or not!
  if (!user.isModified("password")) return next();
  //if password modified then hash th password
  user.password = await bcrypt.hash(user.password, 8);
  next();
});
//compare is password correct or not
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/////////////generating access and refresh token/////////////////////////////////////
userSchema.methods.generateAccessToken = async function () {
  const token = jwt.sign(
    { _id: this._id, userName: this.userName, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  // console.log(token);
  return token;
};
userSchema.methods.generateRefreshToken = async function () {
  const refreshToken = jwt.sign(
    { _id: this._id, userName: this.userName, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  return refreshToken;
};
export const User = mongoose.model("User", userSchema);
