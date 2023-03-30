import React from "react";
import Task from "./Task";
import "../components-css/LeftSide.css";

function LeftSide(props) {
  return (
    <div className="left-below-navbar">
      {/* <div className="content">
        <div className="contentHeader">
          <h1>TASKS</h1>
        </div>
        <div className="contentTask">
          {/* <Task />
          <Task />
          <Task />
          <Task />
          <Task /> */}
      {/* </div>
      </div>
      <div className="content">
        <div className="contentHeader">
          <h1>UPCOMING TASKS</h1>
        </div>
        <div className="contentTask">{props.showLeftSide && <Task />}</div>
      </div>  */}
      <div className="content">
        <div className="contentHeader">
          <h1>DID YOU KNOW ?</h1>
        </div>
        <div className="contentTask">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor in
            odit adipisci quidem provident corrupti aut sequi earum similique
            inventore eaque, veniam modi reprehenderit corporis amet ea error!
            Ducimus ea similique temporibus eligendi, laudantium ipsa expedita
            ab doloremque voluptas dignissimos provident eveniet, nesciunt dicta
            a suscipit? Non vero ea explicabo necessitatibus quae dolore omnis
            neque sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
