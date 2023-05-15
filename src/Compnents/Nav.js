import React from "react";
import { Edyoda } from "../Icons/Edyoda";
import { Search } from "../Icons/Icons";
const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="left-side-nav">
        <div className="edyoda-icon">
          <Edyoda />
        </div>
        <div className="Courses-section">
          <label>Courses</label>
          <select></select>
        </div>
        <div className="Program-section">
          <label>Programs</label>
          <select></select>
        </div>
      </div>
      <div className="right-side-nav">
        <Search />
        <button className="login-btn">Log in</button>
        <button className="joinnow-btn">JOIN NOW</button>
      </div>
    </nav>
  );
};

export default Nav;
