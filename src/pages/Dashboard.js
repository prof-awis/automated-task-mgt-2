import React, { useState } from "react";
import BelowNavBar from "../components/BelowNavBar";
import Footer from "../components/Footer";
import LeftSide from "../components/LeftSide";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TaskCreator from "../components/TaskCreator";
import TaskList from "../components/TaskList";
import "./Dashboard.css";

const Dashboard = () => {
  const [showLeftSide, setshowLeftSide] = useState(false);
  const addTaskHandler = (e) => {
    e.preventDefault();
    setshowLeftSide(!showLeftSide);
  };
  return (
    <div className="main">
      <NavBar />
      <section className="home-section">
        <BelowNavBar addTaskHandler={addTaskHandler} />
        {/* <TaskList /> */}
        <TaskCreator />
        <LeftSide showLeftSide={showLeftSide} />
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
