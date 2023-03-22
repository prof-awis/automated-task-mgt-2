import React from "react";
import "./GetStarted.css";
import pic from "../images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import Button from "../components/Button";

function GetStarted() {
  return (
    <div className="get-started">
      <div className="imageContainer">
        <img src={pic} alt="" srcset="" />
        <div className="center">Task Management System</div>
      </div>
      <div className="textContainer">
        <p>The best way to organize, manage and track your work.</p>
        {/* <Button/> */}
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default GetStarted;
