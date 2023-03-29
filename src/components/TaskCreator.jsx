import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function TaskCreator() {
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [activeStatus, setActiveStatus] = useState(0);
  const [newStatus, setNewStatus] = useState("");

  const [newTaskData, setNewTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
  });

  const changeFormHandler = (e) => {
    setNewTaskData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTasks(res);
      });

    fetch("http://localhost:8000/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setStatuses(res);
      });
  }, []);

  const handleStatusChange = (index) => {
    fetch(`http://localhost:8000/api/tasks?category=${index}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasks(res);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = fetch("http://localhost:8000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newTaskData,
        category: activeStatus,
      }),
    }).then((res) => {});
  };

  const handleCreateStatus = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newStatus,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setStatuses(res);
        setOpenStatus(false);
      });
  };

  return (
    <div>
      <div>
        {statuses?.map((status, index) => (
          <button
            key={status._id}
            onClick={() => handleStatusChange(status._id)}
          >
            {status.name}
          </button>
        ))}
        <button onClick={() => setOpenStatus(!open)}>add status </button>
      </div>
      <div>
        {tasks?.map((task) => (
          <div key={task._id}>
            <p> {task.title}</p>
            <p> {task.description}</p>
            <p> {task.priority}</p>
            <p> {task.dueDate}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={open} onRequestClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div class="user-box">
            <label>Title</label>
            <input
              type="text"
              onChange={changeFormHandler}
              value={newTaskData.title}
              name="title"
              required
              placeholder=""
            />
          </div>
          <div class="user-box">
            <label>Description</label>
            <input
              type="text"
              onChange={changeFormHandler}
              value={newTaskData.description}
              name="description"
              required
            />
          </div>
          <div class="user-box">
            <label>Due Date</label>
            <input
              type="date"
              onChange={changeFormHandler}
              value={newTaskData.dueDate}
              name="dueDate"
              required
            />
          </div>
          <div class="user-box">
            <label>Priority </label>
            <input
              type="text"
              onChange={changeFormHandler}
              value={newTaskData.priority}
              name="priority"
              required
            />
          </div>

          <div className="user-box2">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setOpen(false)}>
              cancel
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={openStatus} onRequestClose={() => setOpenStatus(false)}>
        <form onSubmit={handleCreateStatus}>
          <div class="user-box">
            <label>new status</label>
            <input
              type="text"
              onChange={(e) => setNewStatus(e.target.value)}
              value={newStatus}
              name="status"
              required
              placeholder="enter new status"
            />
          </div>

          <div className="user-box2">
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setOpenStatus(false)}>
              cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default TaskCreator;
