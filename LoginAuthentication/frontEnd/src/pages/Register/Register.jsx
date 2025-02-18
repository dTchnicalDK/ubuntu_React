import React, { useState } from "react";
import "./Register.css";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  //-----------onSubmit function to send the data to the backend-------------
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "http://localhost:3000/api/createUser",
        userData
      );
      //conditional toasting message
      if (user.request.status === 201) {
        toast.success(`${user.data.msg})`);
        navigate("/login");
      } else {
        toast.error(`${user.data.msg}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //--------------assigning values of the input fields in the state variable--------------------
  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <h3>Register here</h3>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          name="userName"
          value={userData.userName}
          onChange={changeHandler}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={userData.email}
          onChange={changeHandler}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={userData.password}
          onChange={changeHandler}
        />
        <button className="registerButton" onClick={submitHandler}>
          Register
        </button>
        <Link to="/login"> already have an account? Login</Link>
      </form>
    </div>
  );
}

export default Register;
