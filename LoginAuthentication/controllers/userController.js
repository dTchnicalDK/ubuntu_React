import res from "express/lib/response.js";
import { User } from "../models/userModels.js";

///////////////////////// controller for creating a new user/////////////////////////////
export async function createUser(req, res) {
  const { userName, password, email, isAdmin } = req.body;
  try {
    //checking if already registered
    const isAlredyRegistered = await User.findOne({ email });
    const usenameExits = await User.findOne({ userName });

    if (isAlredyRegistered) {
      res.status(200).json({ msg: "email already registered" });
    } else if (usenameExits) {
      res
        .status(200)
        .json({ msg: "Choose another username! username already registered" });
    } else {
      // if new user (not already registered) then creating user
      const createdUser = await User.create({
        userName,
        password,
        email,
        isAdmin,
      });
      res.status(201).json({ msg: createdUser });
    }
  } catch (error) {
    res.status(400).json({
      msg: "user creation error",
      Errors: error,
    });
  }
}

////////////////////fuction to get all users/////////////////////////
export async function getAllUsers(req, res) {
  try {
    console.log("all user ran");

    const users = await User.find();
    console.log("status ok");

    res.status(200).json({ msg: "successfull!", data: users });
  } catch (error) {
    res.status(500).json({ msg: "user fetching error", error });
  }
}
