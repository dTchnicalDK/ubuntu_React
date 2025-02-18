import { User } from "../models/userModels.js";
import jwt from "jsonwebtoken";

const createAccessAndRefreshTokens = async function (user) {
  try {
    let accessToken = await user.generateAccessToken();
    let refreshToken = await user.generateRefreshToken();
    // saving generated refreshToken into database
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false }); //don't want validation so paased object{ validateBeforeSave: false }
    return { accessToken, refreshToken };
  } catch (error) {
    res.status(500).json({ msg: "token generation error", error: error });
  }
};
///////////////////////// controller for creating a new user/////////////////////////////
export async function createUser(req, res) {
  const { userName, password, email, isAdmin, token } = req.body;
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
      res
        .status(201)
        .json({ msg: "Registration successful", data: createdUser });
    }
  } catch (error) {
    res.status(400).json({
      msg: "user creation error :",
      error,
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

export async function loginUser(req, res) {
  try {
    const { userName, password } = req.body;
    if (!(userName && password)) {
      //checking user exists or not
      res.status(400).json({ msg: "fill lhe fields first" });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      res.status(404).json({ msg: "wrong creditials" });
    }
    //comparing password ==> is valid user or not
    const isValidUser = await user.isPasswordCorrect(password);
    console.log("isvaliduser", isValidUser);

    //now generate token ==> refresh, accessToken
    const generatedTokens = await createAccessAndRefreshTokens(user);

    //set cookies with accessToken
    let options = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("accessToken", generatedTokens.accessToken, options)
      .cookie("refreshToken", generatedTokens.refreshToken, options)
      .json({ msg: "logged in successfully and securely" });

    // res.status(200).json({
    //   msg: "token generated",
    //   accessToken: generatedTokens.accessToken,
    //   refreshToken: generatedTokens.refreshToken,
    // })
  } catch (error) {
    res.status(500).json({ msg: "login error", err: error.msg });
  }
}
