import React from "react";
import "./Navbar.css";
import { GoArrowRight } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_container">
          <img src="Logo.png" alt="" />
          <nav className="nav_menu">
            <ul className="menu_lists">
              <li>Home</li>
              <li>About us</li>
              <li>Study Destination <RiArrowDownSLine /></li>
              <li>Gallery <RiArrowDownSLine /></li>
              <li>Blogs</li>
              <li>Contact us</li>
              <li>Enquire Now  <GoArrowRight /></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
