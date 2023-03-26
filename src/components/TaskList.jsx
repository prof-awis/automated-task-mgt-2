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
      <div></div>
    </div>
  );
};

export default TaskList;
