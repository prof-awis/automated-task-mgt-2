import React, { useState } from "react";

const TaskList = () => {
  const [status, setStatus] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [inputedStatus, setInputedStatus] = useState("");
  const [activeStatus, setActiveStatus] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const createStatus = () => {
    let newStatuses = [...status, inputedStatus];
    setStatus(newStatuses);
  };
  const createTask = () => {
    let newTasks = [
      ...tasks,
      {
        taskName,
        status,
        priority,
        date,
        taskDescription,
      },
    ];
    setTasks(newTasks);
  };

  const switchStatus = (index) => {};

  return (
    <div>
      <table>
        <tr>
          <th>
            <select name="status" id="">
              <option value="todo">TO DO</option>
              <option value="">COMPLETED</option>
              <option value="">IN PROGRESS</option>
              <option value="">NEW</option>
            </select>
          </th>
        </tr>{" "}
        <tr>
          <th>Name</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <input type="text" name="" id="" placeholder="Task Name" />
          </td>
          <td>
            <input type="date" name="" placeholder="Date" id="" />
          </td>
          <td>
            <select name="priority" id="">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="High">High</option>
            </select>
          </td>
          <td>
            <textarea
              name=""
              id=""
              cols="25"
              rows="1"
              placeholder="Task Description..."
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TaskList;
