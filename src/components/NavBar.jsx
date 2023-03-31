import React, { useEffect, useState } from "react";
import "../components-css/NavBar.css";
import ProfilePicture from "../images/remind.jpg";
import { FiLogOut } from "react-icons/fi";
import { IoLogoSlack, IoEarth } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const newUser = localStorage.getItem("user");
    setUser(JSON.parse(newUser));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const navigateToProfile = () => {
    navigate("/Profile");
  };

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
            <Link className="centerNavbar-links" to={"/Dashboard"}>
              Home
            </Link>
            {/* <a href="/Dashboard">Home</a> */}
          </li>
          {/* <li>
            <Link className="centerNavbar-links" to={"/Schedule"}>
              Schedule
            </Link>
          </li> */}
          <li>
            <Link className="centerNavbar-links" to={"/AboutUs"}>
              About Us
            </Link>
            {/* <a href="/AboutUs">About Us</a> */}
          </li>
          <li>
            <Link className="centerNavbar-links" to={"/ContactUs"}>
              Contact Us
            </Link>
            {/* <a href="/ContactUs">Contact Us</a> */}
          </li>
        </ul>
      </div>

      <div className="profileContainer">
        <div className="profileName">
          <p>
            {user.firstName} {user.lastName}{" "}
          </p>
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
            <button onClick={navigateToProfile} className="button nav-button">
              <GoPerson /> Profile
            </button>
          </div>
          <div className="profileLogout">
            <button onClick={logout} className="button nav-button">
              <FiLogOut /> Log Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
