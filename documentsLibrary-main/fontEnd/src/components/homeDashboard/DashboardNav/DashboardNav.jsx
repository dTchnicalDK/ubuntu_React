import "./DashboardNav.css";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { CiBarcode } from "react-icons/ci";
import { MdGTranslate } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";

function DashboardNav() {
  return (
    <>
      <div className="top-nav">
        <div className="eleDiv search">
          <div className="search-option">
            <label htmlFor="All">All</label>
            <select name="All" id="search-select">
              <option value="val1"></option>
              <option value="val2">search2</option>
              <option value="val3">search3</option>
              <option value="val4">search4</option>
              <option value="val5">search5</option>
            </select>
          </div>
          <div className="search-input">
            <input type="text" placeholder="search..." id="search" />
            <div className="buttons">
              <button>
                <HiOutlineSearch />
              </button>
              <div className="line"></div>
              <button>
                <CiBarcode />
              </button>
            </div>
          </div>
        </div>
        <div className="eleDiv language">
          <button>
            <MdGTranslate />
          </button>
          <label htmlFor="">language</label>
          <select name="language" id="language">
            <option value="lan1">lan1</option>
            <option value="vlan">lan2</option>
            <option value="lan3">lan3</option>
            <option value="lan4">lan4</option>
            <option value="lan5">lan5</option>
          </select>
        </div>
        <div className="button dateNtime eleDiv">
          <div className="time">
            <button>
              <IoMdClock />
            </button>
            <span>09:00:am</span>
          </div>
          <div className="date">
            <button>
              <SlCalender />
            </button>
            <span>05/feb/1984</span>
          </div>
        </div>
        <div className="button user eleDiv">
          <div>
            <img src="../src/assets/images/profileImg.png" alt="photo" />
          </div>

          <label>unknown</label>
          <button>
            <FaCaretDown />
          </button>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
