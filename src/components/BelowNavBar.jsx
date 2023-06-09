import React from "react";
import "../components-css/BelowNavBar.css";
import belowNavBarImage from "../../src/images/estee-janssens-aQfhbxailCs-unsplash.jpg";
import Button from "./Button";

function BelowNavBar(props) {
  return (
    <div className="belowNavBar">
      <div className="belowNavBarImageContainer">
        <img src={belowNavBarImage} alt="" srcset="" />
        <div className="center">Task Management System</div>
      </div>
      {/* <div className="buttonTask">
        <button className="button" onClick={props.addTaskHandler}>
          Add Task
        </button>
        <button className="button">Manage Task</button>
      </div> */}
    </div>
  );
}

export default BelowNavBar;
