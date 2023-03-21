import React from "react";
import "../components-css/Task.css";

function Task() {
  return (
    <div className="task">
      <form action="#">
        <p>Task Name</p>
        <input type="text" />
        <p>Date and Time</p>
        <input type="datetime" name="" id="" />
        <p>Location</p>
        <input type="text" />
        <p>Task Description</p>
        <textarea name="" id="" cols="30" rows="5"></textarea>
      </form>
    </div>
  );
}

export default Task;
