import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../components-css/TaskCreator.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

function TaskCreator() {
  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [activeStatus, setActiveStatus] = useState();
  const [newStatus, setNewStatus] = useState("");
  const [token, setToken] = useState("");

  const [newTaskData, setNewTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const changeFormHandler = (e) => {
    setNewTaskData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const createdToken = localStorage.getItem("token");
    setToken(createdToken);

    fetch("http://localhost:8000/api/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${createdToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setActiveStatus(res[0]._id);
        setStatuses(res);

        fetch(`http://localhost:8000/api/tasks?category=${res[0]._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${createdToken}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setTasks(res);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStatusChange = (index) => {
    setActiveStatus(index);
    fetch(`http://localhost:8000/api/tasks?category=${index}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTasks(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = fetch("http://localhost:8000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...newTaskData,
        category: activeStatus,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTasks(res.tasks);
        setOpen(false);
        setNewTaskData({
          title: "",
          description: "",
          dueDate: "",
          priority: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreateStatus = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: newStatus,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setOpenStatus(false);
        setStatuses(res.categories);
        setActiveStatus(res.category);
        setNewStatus("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="statusTask">
        {statuses?.map((status, index) => (
          <button
            key={status._id}
            onClick={() => handleStatusChange(status._id)}
            className={`${
              status._id === activeStatus ? "button buttonActive" : "button"
            }`}
          >
            {status._id === activeStatus ? (
              <span>
                {status.name}{" "}
                <span className="statusCount">{tasks.length}</span>
                <span>
                  {" "}
                  <BiEdit />
                </span>
              </span>
            ) : (
              <span>{status.name}</span>
            )}
          </button>
        ))}

        <button onClick={() => setOpenStatus(true)} className="button">
          <AiOutlinePlus />
          Add status{" "}
        </button>
      </div>
      <div className="taskContainer">
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="button addTaskButton"
          >
            <AiOutlinePlus />
            Create Task
          </button>
        </div>
        <div>
          {tasks?.map((task, index) => (
            <div key={task._id} className="displayTask">
              <div className="taskCount">{index + 1}</div>
              <div className="taskTitle"> {task.title}</div>
              <div className="taskPriority"> {task.priority}</div>
              <div className="taskDueDate"> {task.dueDate}</div>
              <div className="taskDescription"> {task.description}</div>
              <div>
                <BiEdit />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="taskModal"
      >
        {statuses?.length > 0 ? (
          <form className="formTaskModal" onSubmit={handleSubmit}>
            <div class="user-box userBoxInput">
              <label>Title</label>
              <input
                type="text"
                onChange={changeFormHandler}
                value={newTaskData.title}
                name="title"
                required
                placeholder="New Task Name"
              />
            </div>
            <div class="user-box userBoxInput">
              <label>Priority </label>
              <select
                type="text"
                onChange={changeFormHandler}
                value={newTaskData.priority}
                name="priority"
                required
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div class="user-box userBoxInput">
              <label>Due Date</label>
              <input
                type="datetime-local"
                onChange={changeFormHandler}
                value={newTaskData.dueDate}
                name="dueDate"
                required
              />
            </div>

            <div class="user-box userBoxInput">
              <label>Description</label>
              <input
                type="text"
                onChange={changeFormHandler}
                value={newTaskData.description}
                name="description"
                placeholder="Add Task Description..."
                required
              />
            </div>
            <div className="user-box2 userBoxButtons">
              <button type="submit" className="button userBoxButton">
                Save
              </button>
              <button
                type="button"
                className="button userBoxButton userBoxButton2"
                onClick={() => setOpen(false)}
              >
                cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="modalWhenNoStatusName">
            Add the status you want your task to be in!
          </div>
        )}
      </Modal>

      <Modal
        isOpen={openStatus}
        onRequestClose={() => setOpenStatus(false)}
        className="statusModal"
      >
        <form onSubmit={handleCreateStatus} className="formStatusModal">
          <div className="user-box userBoxInput">
            <label>New status</label>
            <input
              type="text"
              onChange={(e) => setNewStatus(e.target.value)}
              value={newStatus}
              name="status"
              required
              placeholder="Enter new status"
            />
          </div>

          <div className="user-box2 userBoxButtons">
            <button type="submit" className="button userBoxButton">
              Add
            </button>
            <button
              type="button"
              className="button userBoxButton userBoxButton2"
              onClick={() => setOpenStatus(false)}
            >
              cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default TaskCreator;