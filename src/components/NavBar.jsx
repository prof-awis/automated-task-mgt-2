import React, { useState } from "react";
import "../components-css/NavBar.css";
import ProfilePicture from "../images/remind.jpg";
import { FiLogOut } from "react-icons/fi";
import { IoLogoSlack, IoEarth } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBar">
      <div className="logoBar">
        <IoLogoSlack />
        {/* <IoEarth /> */}
        <span>AwTask</span>
      </div>

      <div className="centerNavbar">
        <ul>
          <li>
            <a href="/Dashboard">Home</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="/AboutUs">About Us</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="profileContainer">
        <div className="profileName">
          <p>Profile Name</p>
        </div>

        <div
          onClick={() => {
            setIsOpen((op) => !op);
          }}
          className="profileImage"
        >
          <img src={ProfilePicture} alt="" srcset="" />
        </div>
      </div>
      {isOpen && (
        <div className="profile-container">
          <div className="profileLogout">
            <button className="button nav-button">
              <GoPerson /> Profile
            </button>
          </div>
          <div className="profileLogout">
            <button className="button nav-button">
              <FiLogOut /> Log Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
