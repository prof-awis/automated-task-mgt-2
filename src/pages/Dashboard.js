import React from "react";
import BelowNavBar from "../components/BelowNavBar";
import Footer from "../components/Footer";
import LeftSide from "../components/LeftSide";
import NavBar from "../components/NavBar";
import RightSide from "../components/RightSide";
import SideBar from "../components/SideBar";
import TaskList from "../components/TaskList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="main">
      <NavBar />
      <section className="home-section">
        <BelowNavBar />
        <TaskList />
        <LeftSide />

        {/* <RightSide /> */}
      </section>
      <Footer />
    </div>
  );
};

export default Dashboard;
