import React from "react";
import "./HomeDashboard.css";
import { HiOutlineSearch } from "react-icons/hi";
import { CiBarcode } from "react-icons/ci";
import { MdGTranslate } from "react-icons/md";

function HomeDashboard() {
  return (
    <>
      <div className="container">
        <div className="side-bar"></div>
        <div className="main-container">
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
            <div className="button dateNtime"></div>
            <div className="button user"></div>
          </div>
          <div className="main"></div>
        </div>
      </div>
    </>
  );
}

export default HomeDashboard;
