import React, { use } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    userName: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    // console.log(userData);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // form validation for empty fields
    if (userData.userName === "" || userData.password === "") {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const loggedUser = await axios.post(
        "http://localhost:3000/api/login",
        userData
      );
      // console.log(loggedUser);
      if (loggedUser.request.status === 200) {
        // navigate("/userdashboard");
        toast.success(`${loggedUser.data.msg}`);
      } else {
        toast.error(`${loggedUser.data.msg}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <h3>Login here</h3>
      <form className="login-form">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          name="userName"
          onChange={changeHandler}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          onChange={changeHandler}
        />
        <button className="loginButton" onClick={submitHandler}>
          Login
        </button>
        <Link to="/register"> Don't have an account? Register</Link>
      </form>
    </div>
  );
}

export default Login;
