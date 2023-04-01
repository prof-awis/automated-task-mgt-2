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
            The concept of Task Management dates back to the early 1990s when a
            management consultant named Frederick Winslow Taylor developed the
            principles of scientific management, which included organizing work
            tasks and optimizing workflows.
          </p>
          <p>
            The first task managemnt software was developed in 1980s and was
            called "<em>Project Management Software Systems</em>
            <strong>(PMSS)</strong>. It was mainly used for managing large
            construction project
          </p>
          <p>
            Task management software has come a long way since then, and today,
            there are hundreds of different software tools available, ranging
            from simple to-do list apps to sophisticated project management
            systems.
          </p>
          <p>
            One of the most popular task management systems in the world is
            Trello, which was launched in 2011 and now has over 50 million users
            worldwide.
          </p>
          <p>
            Task management software can help increase productivity by up to
            30%, according to a study by the University of California, Irvine.
          </p>
          <p>
            The average person has around 7-8 tasks on their to-do list at any
            given time, according to a study by the Harvard Business Review.
          </p>
          <p>
            Task management software can help reduce stress and anxiety by
            providing users with a clear and organized way to manage their
            workload, according to a study by the University of Cambridge.
          </p>
          <p>
            The global market for project and task management software is
            expected to reach $6.5 billion by 2026, according to a report by
            MarketsandMarkets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
