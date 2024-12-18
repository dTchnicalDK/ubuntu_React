import React from "react";
import "./LeftSidebar.css";
import { IoHomeSharp } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RiBookShelfLine } from "react-icons/ri";
import { BiSolidDonateHeart } from "react-icons/bi";
import { ImLibrary } from "react-icons/im";
function LeftSidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <span className="title-text">
          My <span>Docs</span> <br />
          Library
        </span>
      </div>
      <ul className="sidebar-list">
        <a href="">
          <li>
            <span className="icon">
              <IoHomeSharp />
            </span>
            Home
          </li>
        </a>
        <a href="">
          <li>
            <span className="icon">
              <BsSearch />
            </span>
            Search
          </li>
        </a>
        <a href="">
          <li>
            <span className="icon">
              <RiBookShelfLine />
            </span>{" "}
            MySelf
          </li>
        </a>
        <a href="">
          <li>
            <span className="icon">
              <ImLibrary />
            </span>
            library
          </li>
        </a>
        <a href="">
          <li>
            <span className="icon">
              <BiSolidDonateHeart />
            </span>
            contribute
          </li>
        </a>
      </ul>
      <div className="sidebar-footer">
        <ul>
          <a href="">
            <li>about</li>
          </a>
          <a href="">
            <li>support</li>
          </a>
          <a href="">
            <li>term & conditions</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
