import React from "react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="menu-bar">
        <a href="#" className="active">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="blue"
          className="sidebarBtn"
        >
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg> */}
          <span>Menu</span>
        </a>
      </div>

      <div className="right-navbar">
        {/*<div>
        <ul className="lists">
          <li>Name</li>
          <li>picture</li>
        </ul>
      </div>*/}
        <div className="user-image">
          <span>Prof</span>

          <img
            src="../../assets/images/0acea755-eac4-4966-b4c0-f16b678a52b7.jpg"
            alt="user pic"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
