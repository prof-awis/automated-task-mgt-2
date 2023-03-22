import React from "react";
import "../components-css/NavBar.css";
import ProfilePicture from "../images/unseen-studio-s9CC2SKySJM-unsplash.jpg";
import { FiLogOut } from "react-icons/fi";
import { IoLogoSlack, IoEarth } from "react-icons/io5";
function NavBar() {
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="profileContainer">
        <div className="profileName">
          <p>Profile Name</p>
        </div>

        <div className="profileImage">
          <img src={ProfilePicture} alt="" srcset="" />
        </div>

        <div className="profileLogout">
          <FiLogOut />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
