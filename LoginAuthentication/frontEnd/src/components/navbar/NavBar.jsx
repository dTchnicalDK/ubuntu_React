import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="nav-item">
          <NavLink>Logo</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-item">
          <NavLink to={"/"}>home</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={"/login"}>Login</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={"/register"}>Register</NavLink>
        </div>
        <div className="nav-item">
          <NavLink to={"/userdashboard"}>userDashboard</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
