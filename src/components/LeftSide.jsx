import React from "react";
import Task from "./Task";

function LeftSide() {
  return (
    <div className="left-below-navbar">
      <div>
        <h1>TASKS</h1>
      </div>

      <div className="content">
        <Task />
        <Task />
        <Task />
      </div>

      <div>
        <div>
          <h1>UPCOMING TASKS</h1>
        </div>
        <div className="content">
          <Task />
          <Task />
        </div>
        <div>
          <div>
            <h1>DID YOU KNOW ?</h1>
          </div>
          <div className="content">
            <div className="task">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                voluptatibus aut culpa tenetur reiciendis deserunt, quam veniam
                vero, nulla quidem voluptates non. Incidunt maiores quae
                nesciunt aliquam, non accusamus. Sunt sint ea veniam? Libero
                dicta, laboriosam asperiores nihil quo velit sequi blanditiis
                voluptate delectus nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
